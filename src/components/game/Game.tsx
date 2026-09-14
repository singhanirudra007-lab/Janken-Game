import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, BookOpen, RotateCcw, Trophy, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThrowMark } from "@/components/game/ThrowMark";
import { resumeAudio, setMuted, sfxPlay, unlockAudio } from "@/lib/game/audio";
import {
  MODE_META,
  THROWS,
  THROW_META,
  randomThrow,
  resolveThrow,
  targetFor,
  type Mode,
  type Outcome,
  type ThrowId,
} from "@/lib/game/rules";
import { defaultStats, loadStats, saveStats, type Stats } from "@/lib/game/save";
import { cn } from "@/lib/utils";

type View = "title" | "mode" | "how" | "records" | "play";
type Phase = "idle" | "count" | "reveal" | "resolve" | "matchover";
type CountWord = "JAN" | "KEN" | "PON" | null;

const COUNT_WORDS: CountWord[] = ["JAN", "KEN", "PON"];

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function delay(ms: number, signal: AbortSignal) {
  return new Promise<void>((resolve) => {
    if (signal.aborted) {
      resolve();
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      if (signal.aborted || now - start >= ms) {
        resolve();
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

export function Game() {
  const [view, setView] = useState<View>("title");
  const [stats, setStats] = useState<Stats>(defaultStats);
  const [hydrated, setHydrated] = useState(false);
  const [mode, setMode] = useState<Mode>("bo3");
  const [youScore, setYouScore] = useState(0);
  const [houseScore, setHouseScore] = useState(0);
  const [round, setRound] = useState(1);
  const [phase, setPhase] = useState<Phase>("idle");
  const [yourThrow, setYourThrow] = useState<ThrowId | null>(null);
  const [houseThrow, setHouseThrow] = useState<ThrowId | null>(null);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [countWord, setCountWord] = useState<CountWord>(null);
  const [burst, setBurst] = useState(0);

  const stageRef = useRef<HTMLDivElement>(null);
  const traumaRef = useRef(0);
  const abortRef = useRef<AbortController | null>(null);
  const statsRef = useRef(stats);
  statsRef.current = stats;

  useEffect(() => {
    const loaded = loadStats();
    setStats(loaded);
    setMode(loaded.lastMode);
    setMuted(loaded.muted);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveStats(stats);
  }, [stats, hydrated]);

  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "visible") resumeAudio();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (traumaRef.current > 0) {
        traumaRef.current = Math.max(0, traumaRef.current - dt * 3.2);
        const shake = traumaRef.current * traumaRef.current;
        const t = now / 1000;
        const x = Math.sin(t * 47) * 10 * shake;
        const y = Math.cos(t * 41) * 8 * shake;
        const r = Math.sin(t * 33) * 1.4 * shake;
        const el = stageRef.current;
        if (el) el.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
      } else {
        const el = stageRef.current;
        if (el && el.style.transform) el.style.transform = "";
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const addTrauma = useCallback((amount: number) => {
    if (!statsRef.current.shake || prefersReducedMotion()) return;
    traumaRef.current = Math.min(1, traumaRef.current + amount);
  }, []);

  const patchStats = useCallback((fn: (s: Stats) => Stats) => {
    setStats((s) => fn(s));
  }, []);

  const resetMatch = useCallback((nextMode: Mode) => {
    abortRef.current?.abort();
    setMode(nextMode);
    setYouScore(0);
    setHouseScore(0);
    setRound(1);
    setPhase("idle");
    setYourThrow(null);
    setHouseThrow(null);
    setOutcome(null);
    setCountWord(null);
    patchStats((s) => ({ ...s, lastMode: nextMode }));
  }, [patchStats]);

  const goTitle = useCallback(() => {
    abortRef.current?.abort();
    setView("title");
    setPhase("idle");
    setYourThrow(null);
    setHouseThrow(null);
    setOutcome(null);
    setCountWord(null);
  }, []);

  const startMatch = useCallback(
    (nextMode: Mode) => {
      unlockAudio();
      sfxPlay.select();
      resetMatch(nextMode);
      setView("play");
    },
    [resetMatch],
  );

  const finishRound = useCallback(
    (you: ThrowId, house: ThrowId, result: Outcome) => {
      const target = targetFor(mode);
      let nextYou = youScore;
      let nextHouse = houseScore;
      if (result === "win") nextYou += 1;
      if (result === "lose") nextHouse += 1;

      patchStats((s) => {
        const throws = { ...s.throws, [you]: s.throws[you] + 1 };
        if (result === "win") {
          const streak = s.streak + 1;
          return {
            ...s,
            throws,
            roundsWon: s.roundsWon + 1,
            streak,
            bestStreak: Math.max(s.bestStreak, streak),
          };
        }
        if (result === "lose") {
          return { ...s, throws, roundsLost: s.roundsLost + 1, streak: 0 };
        }
        return { ...s, throws, roundsDrawn: s.roundsDrawn + 1 };
      });

      setYouScore(nextYou);
      setHouseScore(nextHouse);

      if (result !== "draw" && (nextYou >= target || nextHouse >= target)) {
        const youWon = nextYou > nextHouse;
        patchStats((s) =>
          youWon
            ? { ...s, matchesWon: s.matchesWon + 1 }
            : { ...s, matchesLost: s.matchesLost + 1 },
        );
        if (youWon) sfxPlay.matchWin();
        else sfxPlay.matchLose();
        addTrauma(youWon ? 0.55 : 0.7);
        setPhase("matchover");
      } else {
        if (result === "win") sfxPlay.win();
        else if (result === "lose") sfxPlay.lose();
        else sfxPlay.draw();
        setPhase("resolve");
      }
    },
    [addTrauma, houseScore, mode, patchStats, youScore],
  );

  const pick = useCallback(
    (id: ThrowId) => {
      if (phase !== "idle") return;
      unlockAudio();
      sfxPlay.select();
      const house = randomThrow();
      setYourThrow(id);
      setHouseThrow(house);
      setOutcome(null);
      setPhase("count");
      setCountWord(null);

      abortRef.current?.abort();
      const ac = new AbortController();
      abortRef.current = ac;
      const reduced = prefersReducedMotion();
      const beat = reduced ? 160 : 420;

      void (async () => {
        for (const word of COUNT_WORDS) {
          if (ac.signal.aborted) return;
          setCountWord(word);
          sfxPlay.tick();
          await delay(beat, ac.signal);
        }
        if (ac.signal.aborted) return;
        setCountWord(null);
        setPhase("reveal");
        sfxPlay.slam();
        addTrauma(0.62);
        setBurst((n) => n + 1);
        const result = resolveThrow(id, house);
        setOutcome(result);
        await delay(reduced ? 280 : 620, ac.signal);
        if (ac.signal.aborted) return;
        finishRound(id, house, result);
      })();
    },
    [addTrauma, finishRound, phase],
  );

  const nextRound = useCallback(() => {
    if (phase !== "resolve") return;
    sfxPlay.select();
    setRound((r) => r + 1);
    setPhase("idle");
    setYourThrow(null);
    setHouseThrow(null);
    setOutcome(null);
    setCountWord(null);
  }, [phase]);

  const toggleMute = useCallback(() => {
    unlockAudio();
    setStats((s) => {
      const muted = !s.muted;
      setMuted(muted);
      return { ...s, muted };
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      const k = e.key.toLowerCase();
      if (k === "m") {
        toggleMute();
        return;
      }
      if (view !== "play") return;
      if (k === "escape") {
        goTitle();
        return;
      }
      if (phase === "idle") {
        if (k === "r" || k === "1") pick("rock");
        if (k === "p" || k === "2") pick("paper");
        if (k === "s" || k === "3") pick("scissors");
      }
      if (phase === "resolve" && (k === "enter" || k === " ")) {
        e.preventDefault();
        nextRound();
      }
      if (phase === "matchover" && (k === "enter" || k === " ")) {
        e.preventDefault();
        resetMatch(mode);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTitle, mode, nextRound, phase, pick, resetMatch, toggleMute, view]);

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-bg text-fg">
      <div
        ref={stageRef}
        className="safe-pad mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 sm:px-6"
      >
        {view === "title" && (
          <TitleScreen
            onPlay={() => {
              unlockAudio();
              sfxPlay.select();
              setView("mode");
            }}
            onRecords={() => {
              sfxPlay.select();
              setView("records");
            }}
            onHow={() => {
              sfxPlay.select();
              setView("how");
            }}
            stats={stats}
          />
        )}
        {view === "mode" && (
          <ModeScreen
            lastMode={mode}
            onBack={goTitle}
            onPick={startMatch}
          />
        )}
        {view === "how" && <HowScreen onBack={goTitle} />}
        {view === "records" && <RecordsScreen stats={stats} onBack={goTitle} />}
        {view === "play" && (
          <PlayScreen
            mode={mode}
            youScore={youScore}
            houseScore={houseScore}
            round={round}
            phase={phase}
            yourThrow={yourThrow}
            houseThrow={houseThrow}
            outcome={outcome}
            countWord={countWord}
            muted={stats.muted}
            burst={burst}
            onBack={goTitle}
            onMute={toggleMute}
            onPick={pick}
            onNext={nextRound}
            onRematch={() => resetMatch(mode)}
            onChangeMode={() => {
              abortRef.current?.abort();
              setView("mode");
            }}
          />
        )}
      </div>
    </main>
  );
}

function TitleScreen({
  onPlay,
  onRecords,
  onHow,
  stats,
}: {
  onPlay: () => void;
  onRecords: () => void;
  onHow: () => void;
  stats: Stats;
}) {
  return (
    <div className="flex flex-1 flex-col justify-between gap-10 py-6">
      <header className="anim-rise flex items-center justify-between text-xs font-medium tracking-[0.22em] text-subtle uppercase">
        <span>You vs the house</span>
        <span className="tabular-nums">
          {stats.matchesWon}–{stats.matchesLost}
        </span>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p
          className="anim-rise mb-4 text-xs font-medium tracking-[0.28em] text-muted uppercase"
          style={{ animationDelay: "40ms" }}
        >
          Rock · Paper · Scissors
        </p>
        <h1
          className="font-display anim-rise text-hero leading-[0.85] text-fg"
          style={{ animationDelay: "80ms" }}
        >
          JANKEN
        </h1>
        <p
          className="anim-rise mx-auto mt-6 max-w-sm text-base leading-relaxed text-muted"
          style={{ animationDelay: "140ms" }}
        >
          Three throws. One count. Read the house and take the series.
        </p>
      </div>

      <div className="anim-rise mx-auto flex w-full max-w-sm flex-col gap-3" style={{ animationDelay: "200ms" }}>
        <Button size="xl" className="w-full font-display tracking-wide text-lg" onClick={onPlay}>
          Play
        </Button>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="ghost" size="lg" className="w-full" onClick={onRecords}>
            <Trophy className="size-4" />
            Records
          </Button>
          <Button variant="ghost" size="lg" className="w-full" onClick={onHow}>
            <BookOpen className="size-4" />
            Rules
          </Button>
        </div>
      </div>
    </div>
  );
}

function ModeScreen({
  lastMode,
  onBack,
  onPick,
}: {
  lastMode: Mode;
  onBack: () => void;
  onPick: (mode: Mode) => void;
}) {
  return (
    <div className="flex flex-1 flex-col gap-8 py-4">
      <TopBar title="Match length" onBack={onBack} />
      <div className="flex flex-1 flex-col justify-center gap-3">
        {(Object.keys(MODE_META) as Mode[]).map((id, i) => {
          const meta = MODE_META[id];
          const featured = id === lastMode;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onPick(id)}
              aria-label={meta.label}
              className={cn(
                "anim-rise flex min-h-20 items-center justify-between rounded-xl border px-5 py-4 text-left transition-[border-color,background-color,transform] duration-150 ease-out active:scale-[0.96]",
                featured
                  ? "border-fg/40 bg-elevated"
                  : "border-border bg-surface hover:border-fg/25",
              )}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span>
                <span className="font-display block text-xl tracking-wide">{meta.label}</span>
                <span className="mt-1 block text-sm text-muted">{meta.blurb}</span>
              </span>
              <span className="font-display text-2xl tabular-nums text-subtle">{meta.target}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function HowScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-1 flex-col gap-8 py-4">
      <TopBar title="Rules" onBack={onBack} />
      <ul className="flex flex-col gap-3">
        {THROWS.map((id, i) => {
          const meta = THROW_META[id];
          return (
            <li
              key={id}
              className="anim-rise flex items-center gap-4 rounded-xl border border-border bg-surface px-4 py-4"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="flex size-14 items-center justify-center rounded-lg bg-elevated text-fg">
                <ThrowMark id={id} className="size-10" />
              </span>
              <span>
                <span className="font-display block text-lg tracking-wide">{meta.label}</span>
                <span className="text-sm text-muted">
                  {meta.verb} {meta.beats}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
      <p className="text-sm leading-relaxed text-muted">
        Draws replay the round. Keys: R, P, S to throw. Enter to continue. M to mute.
      </p>
    </div>
  );
}

function RecordsScreen({ stats, onBack }: { stats: Stats; onBack: () => void }) {
  const totalThrows = stats.throws.rock + stats.throws.paper + stats.throws.scissors;
  return (
    <div className="flex flex-1 flex-col gap-8 py-4">
      <TopBar title="Records" onBack={onBack} />
      <div className="grid grid-cols-2 gap-3">
        <StatCard label="Matches" value={`${stats.matchesWon}–${stats.matchesLost}`} />
        <StatCard label="Best streak" value={String(stats.bestStreak)} />
        <StatCard label="Rounds won" value={String(stats.roundsWon)} />
        <StatCard label="Draws" value={String(stats.roundsDrawn)} />
      </div>
      <div className="rounded-xl border border-border bg-surface p-5">
        <p className="mb-4 text-xs font-medium tracking-[0.18em] text-subtle uppercase">Throws used</p>
        <div className="flex flex-col gap-3">
          {THROWS.map((id) => {
            const n = stats.throws[id];
            const pct = totalThrows === 0 ? 0 : Math.round((n / totalThrows) * 100);
            return (
              <div key={id} className="flex items-center gap-3">
                <ThrowMark id={id} className="size-6 text-fg" />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-elevated">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-10 text-right text-sm tabular-nums text-muted">{n}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-5">
      <p className="text-xs font-medium tracking-[0.18em] text-subtle uppercase">{label}</p>
      <p className="font-display mt-2 text-3xl tabular-nums tracking-wide">{value}</p>
    </div>
  );
}

function TopBar({
  title,
  onBack,
  extra,
}: {
  title: string;
  onBack: () => void;
  extra?: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <Button variant="ghost" size="icon" onClick={onBack} aria-label="Back">
        <ArrowLeft className="size-5" />
      </Button>
      <h2 className="font-display flex-1 text-xl tracking-wide">{title}</h2>
      {extra}
    </div>
  );
}

function PlayScreen({
  mode,
  youScore,
  houseScore,
  round,
  phase,
  yourThrow,
  houseThrow,
  outcome,
  countWord,
  muted,
  burst,
  onBack,
  onMute,
  onPick,
  onNext,
  onRematch,
  onChangeMode,
}: {
  mode: Mode;
  youScore: number;
  houseScore: number;
  round: number;
  phase: Phase;
  yourThrow: ThrowId | null;
  houseThrow: ThrowId | null;
  outcome: Outcome | null;
  countWord: CountWord;
  muted: boolean;
  burst: number;
  onBack: () => void;
  onMute: () => void;
  onPick: (id: ThrowId) => void;
  onNext: () => void;
  onRematch: () => void;
  onChangeMode: () => void;
}) {
  const target = targetFor(mode);
  const picking = phase === "idle";
  const showYours = yourThrow && (phase === "reveal" || phase === "resolve" || phase === "matchover" || phase === "count");
  const showHouse = houseThrow && (phase === "reveal" || phase === "resolve" || phase === "matchover");
  const youWonMatch = phase === "matchover" && youScore > houseScore;

  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onBack} aria-label="Leave match">
          <ArrowLeft className="size-5" />
        </Button>
        <div className="flex-1 text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-subtle uppercase">
            {MODE_META[mode].label} · Round {round}
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onMute} aria-label={muted ? "Unmute" : "Mute"}>
          {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
        </Button>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3 px-1">
        <ScoreCol label="You" score={youScore} target={target} align="left" />
        <span className="font-display pb-1 text-sm tracking-[0.2em] text-subtle">VS</span>
        <ScoreCol label="House" score={houseScore} target={target} align="right" />
      </div>

      <div className="relative flex min-h-56 flex-1 flex-col">
        <div className="relative flex min-h-52 flex-1 items-center justify-center">
          <div
            className="pointer-events-none absolute inset-[8%] rounded-full border border-border"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-[22%] rounded-full border border-border/60"
            aria-hidden="true"
          />
          <ClashBurst burst={burst} />

          <div className="relative z-10 grid w-full grid-cols-2 items-center gap-4 px-2 sm:gap-10">
            <HandCard
              side="you"
              throwId={showYours ? yourThrow : null}
              hiddenFace={phase === "count"}
              slamming={phase === "reveal" || phase === "resolve" || phase === "matchover"}
              winner={outcome === "win"}
              loser={outcome === "lose"}
            />
            <HandCard
              side="house"
              throwId={showHouse ? houseThrow : null}
              hiddenFace={phase === "idle" || phase === "count"}
              slamming={phase === "reveal" || phase === "resolve" || phase === "matchover"}
              winner={outcome === "lose"}
              loser={outcome === "win"}
            />
          </div>

          {countWord && (
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
              <span key={countWord} className="font-display anim-count text-hero text-fg">
                {countWord}
              </span>
            </div>
          )}
        </div>

        <div className="flex h-16 items-center justify-center" aria-live="polite">
          {phase === "idle" && (
            <span className="font-display text-sm tracking-[0.28em] text-subtle uppercase">Choose</span>
          )}
          {(phase === "resolve" || phase === "matchover") && outcome && (
            <ResultStamp
              outcome={phase === "matchover" ? (youWonMatch ? "win" : "lose") : outcome}
              match={phase === "matchover"}
            />
          )}
        </div>
      </div>

      {phase === "matchover" ? (
        <div className="flex flex-col gap-3">
          <Button size="xl" className="w-full font-display text-lg tracking-wide" onClick={onRematch}>
            <RotateCcw className="size-4" />
            Rematch
          </Button>
          <Button variant="ghost" size="lg" className="w-full" onClick={onChangeMode}>
            Change length
          </Button>
        </div>
      ) : phase === "resolve" ? (
        <Button size="xl" className="w-full font-display text-lg tracking-wide" onClick={onNext}>
          Next round
        </Button>
      ) : (
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {THROWS.map((id) => {
            const meta = THROW_META[id];
            const selected = yourThrow === id;
            const dim = !picking && !selected;
            return (
              <button
                key={id}
                type="button"
                disabled={!picking}
                onClick={() => onPick(id)}
                onPointerEnter={() => picking && sfxPlay.hover()}
                className={cn(
                  "flex min-h-30 flex-col items-center justify-center gap-2 rounded-xl border px-2 py-3 transition-[border-color,background-color,opacity,transform] duration-150 ease-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
                  picking && "hover:border-fg/35 active:scale-[0.96]",
                  selected ? "border-fg/50 bg-elevated" : "border-border bg-surface",
                  dim && "opacity-40",
                )}
                aria-label={`${meta.label}, beats ${meta.beats}. Key ${meta.key}`}
              >
                <ThrowMark id={id} className="size-12 text-fg sm:size-14" />
                <span className="font-display text-sm tracking-wide">{meta.label}</span>
                <span className="hidden text-xs tracking-[0.18em] text-subtle uppercase sm:block">
                  {meta.key}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ScoreCol({
  label,
  score,
  target,
  align,
}: {
  label: string;
  score: number;
  target: number;
  align: "left" | "right";
}) {
  return (
    <div className={cn("flex flex-col gap-1", align === "right" && "items-end")}>
      <span className="text-xs font-medium tracking-[0.18em] text-subtle uppercase">{label}</span>
      <span className="font-display text-4xl leading-none tabular-nums sm:text-5xl">{score}</span>
      <span className="flex gap-1" aria-hidden="true">
        {Array.from({ length: target }).map((_, i) => (
          <span
            key={i}
            className={cn("size-1.5 rounded-full", i < score ? "bg-fg" : "bg-border")}
          />
        ))}
      </span>
    </div>
  );
}

function HandCard({
  side,
  throwId,
  hiddenFace,
  slamming,
  winner,
  loser,
}: {
  side: "you" | "house";
  throwId: ThrowId | null;
  hiddenFace: boolean;
  slamming: boolean;
  winner: boolean;
  loser: boolean;
}) {
  const slamClass = slamming
    ? side === "you"
      ? "anim-slam-you"
      : "anim-slam-house"
    : "";
  return (
    <div
      className={cn(
        "relative mx-auto flex aspect-square w-full max-w-44 items-center justify-center rounded-2xl border bg-elevated",
        winner ? "border-win/50" : loser ? "border-lose/40" : "border-border",
        slamClass,
      )}
    >
      {hiddenFace || !throwId ? (
        <span
          className={cn(
            "size-10 rounded-full border-2 border-dashed border-subtle/70",
            hiddenFace && "anim-pulse-back",
          )}
        />
      ) : (
        <ThrowMark id={throwId} className="size-2/3 text-fg" />
      )}
    </div>
  );
}

function ResultStamp({ outcome, match }: { outcome: Outcome; match: boolean }) {
  const label = outcome === "win" ? "Win" : outcome === "lose" ? "Lose" : "Draw";
  const color = outcome === "win" ? "text-win" : outcome === "lose" ? "text-lose" : "text-draw";
  return (
    <div className="anim-stamp text-center">
      {match && (
        <p className="mb-1 text-xs font-medium tracking-[0.22em] text-subtle uppercase">Match</p>
      )}
      <p className={cn("font-display text-stamp leading-none tracking-wide", color)}>{label}</p>
    </div>
  );
}

function ClashBurst({ burst }: { burst: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<{ x: number; y: number; vx: number; vy: number; life: number; max: number; s: number }[]>(
    [],
  );

  useEffect(() => {
    if (burst === 0 || prefersReducedMotion()) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const next = [];
    for (let i = 0; i < 28; i++) {
      const a = (Math.PI * 2 * i) / 28 + Math.random() * 0.2;
      const sp = 80 + Math.random() * 160;
      next.push({
        x: w / 2,
        y: h / 2,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp,
        life: 0,
        max: 0.35 + Math.random() * 0.25,
        s: 1.5 + Math.random() * 2.2,
      });
    }
    particles.current = next;
  }, [burst]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const list = particles.current;
      ctx.fillStyle = getComputedStyle(canvas).getPropertyValue("--color-accent").trim() || "white";
      for (const p of list) {
        p.life += dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 40 * dt;
        const t = p.life / p.max;
        if (t >= 1) continue;
        ctx.globalAlpha = 1 - t;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s * (1 - t * 0.4), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      particles.current = list.filter((p) => p.life < p.max);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      aria-hidden="true"
    />
  );
}
