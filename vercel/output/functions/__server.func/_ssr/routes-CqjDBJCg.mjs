import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RotateCcw, n as Volume2, o as BookOpen, r as Trophy, s as ArrowLeft, t as VolumeX } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CqjDBJCg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] select-none", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:opacity-90 border border-transparent",
			ghost: "bg-transparent text-fg border border-border hover:bg-elevated",
			subtle: "bg-elevated text-fg border border-border hover:border-fg/30"
		},
		size: {
			md: "h-11 px-5 text-sm rounded-md",
			lg: "h-12 px-6 text-base rounded-lg",
			xl: "h-14 px-8 text-base rounded-xl",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function ThrowMark({ id, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 96 96",
		className: cn("block", className),
		"aria-hidden": "true",
		fill: "none",
		children: id === "rock" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RockGlyph, {}) : id === "paper" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperGlyph, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScissorsGlyph, {})
	});
}
function RockGlyph() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "currentColor",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "48",
				cy: "66",
				rx: "30",
				ry: "16",
				opacity: "0.22"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22 58c0-6 6-12 14-16 3-8 12-14 20-14 11 0 20 8 22 18 8 3 12 10 12 16 0 10-14 18-32 18s-36-8-36-22z",
				opacity: "0.95"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M38 42c4-8 12-12 20-10 6 2 10 8 11 14-8-2-16-1-24 2-3-2-5-4-7-6z",
				opacity: "0.35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M30 60c8 4 18 6 30 4",
				stroke: "currentColor",
				strokeWidth: "2",
				opacity: "0.25",
				fill: "none"
			})
		]
	});
}
function PaperGlyph() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "currentColor",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M28 16h32l12 12v52H28V16z",
				opacity: "0.95"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 16v12h12",
				opacity: "0.35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M38 40h24M38 52h24M38 64h16",
				stroke: "var(--color-bg)",
				strokeWidth: "3",
				strokeLinecap: "round",
				opacity: "0.55"
			})
		]
	});
}
function ScissorsGlyph() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		stroke: "currentColor",
		strokeWidth: "4",
		strokeLinecap: "round",
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "28",
				cy: "70",
				r: "10",
				fill: "currentColor",
				opacity: "0.18"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "52",
				cy: "70",
				r: "10",
				fill: "currentColor",
				opacity: "0.18"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "28",
				cy: "70",
				r: "8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "52",
				cy: "70",
				r: "8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M34 64 L70 22" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M46 64 L26 22" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M70 22 L78 18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M26 22 L18 18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "58",
				r: "3.5",
				fill: "currentColor",
				stroke: "none"
			})
		]
	});
}
var ctx = null;
var master = null;
var sfx = null;
var muted = false;
function ensure() {
	if (ctx) return;
	ctx = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: "interactive" });
	master = ctx.createGain();
	sfx = ctx.createGain();
	sfx.connect(master);
	master.connect(ctx.destination);
	master.gain.value = muted ? 0 : 1;
}
function unlockAudio() {
	ensure();
	if (ctx && ctx.state === "suspended") ctx.resume();
}
function setMuted(next) {
	muted = next;
	if (master && ctx) master.gain.setTargetAtTime(next ? 0 : 1, ctx.currentTime, .02);
}
function resumeAudio() {
	if (ctx && ctx.state === "suspended") ctx.resume();
}
function tone(freq, dur, type, gain = .07, slide, when = 0) {
	if (!ctx || !sfx || muted) return;
	const t = ctx.currentTime + when;
	const osc = ctx.createOscillator();
	const g = ctx.createGain();
	osc.type = type;
	osc.frequency.setValueAtTime(freq, t);
	if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, slide), t + dur);
	g.gain.setValueAtTime(1e-4, t);
	g.gain.exponentialRampToValueAtTime(gain, t + .01);
	g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
	osc.connect(g);
	g.connect(sfx);
	osc.start(t);
	osc.stop(t + dur + .03);
	osc.onended = () => {
		osc.disconnect();
		g.disconnect();
	};
}
function noiseThud(dur = .14, cutoff = 220, gain = .28) {
	if (!ctx || !sfx || muted) return;
	const t = ctx.currentTime;
	const frames = Math.floor(ctx.sampleRate * dur);
	const buffer = ctx.createBuffer(1, frames, ctx.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < frames; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
	const src = ctx.createBufferSource();
	src.buffer = buffer;
	const filter = ctx.createBiquadFilter();
	filter.type = "lowpass";
	filter.frequency.setValueAtTime(cutoff, t);
	const g = ctx.createGain();
	g.gain.setValueAtTime(gain, t);
	g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
	src.connect(filter);
	filter.connect(g);
	g.connect(sfx);
	src.start(t);
	src.onended = () => {
		src.disconnect();
		filter.disconnect();
		g.disconnect();
	};
}
var sfxPlay = {
	hover() {
		tone(740, .04, "triangle", .03);
	},
	select() {
		tone(220, .08, "square", .05);
		tone(440, .1, "triangle", .04);
	},
	tick() {
		tone(880 * (.94 + Math.random() * .12), .07, "square", .045);
	},
	slam() {
		noiseThud(.16, 180, .32);
		tone(90, .18, "sine", .12, 48);
	},
	win() {
		tone(392, .16, "triangle", .07);
		tone(523, .22, "triangle", .06, void 0, .05);
		tone(659, .28, "triangle", .07, void 0, .09);
	},
	lose() {
		noiseThud(.2, 140, .22);
		tone(196, .28, "sine", .08, 90);
	},
	draw() {
		tone(330, .12, "triangle", .05);
		tone(247, .18, "sine", .05);
	},
	matchWin() {
		tone(392, .14, "triangle", .06, void 0, 0);
		tone(523, .16, "triangle", .06, void 0, .08);
		tone(659, .22, "triangle", .07, void 0, .16);
		tone(784, .32, "triangle", .08, void 0, .26);
	},
	matchLose() {
		noiseThud(.24, 120, .26);
		tone(174, .4, "sine", .1, 70);
	}
};
var THROWS = [
	"rock",
	"paper",
	"scissors"
];
var BEATS = {
	rock: "scissors",
	paper: "rock",
	scissors: "paper"
};
var THROW_META = {
	rock: {
		label: "Rock",
		verb: "crushes",
		key: "R",
		beats: "scissors"
	},
	paper: {
		label: "Paper",
		verb: "covers",
		key: "P",
		beats: "rock"
	},
	scissors: {
		label: "Scissors",
		verb: "cut",
		key: "S",
		beats: "paper"
	}
};
var MODE_META = {
	quick: {
		label: "Quick match",
		blurb: "First point takes it.",
		target: 1
	},
	bo3: {
		label: "Best of three",
		blurb: "First to two.",
		target: 2
	},
	bo5: {
		label: "Best of five",
		blurb: "First to three.",
		target: 3
	}
};
function resolveThrow(you, house) {
	if (you === house) return "draw";
	return BEATS[you] === house ? "win" : "lose";
}
function randomThrow() {
	return THROWS[Math.floor(Math.random() * THROWS.length)] ?? "rock";
}
function targetFor(mode) {
	return MODE_META[mode].target;
}
var KEY = "janken.save";
var SAVE_VERSION = 1;
var defaultStats = {
	version: SAVE_VERSION,
	matchesWon: 0,
	matchesLost: 0,
	roundsWon: 0,
	roundsLost: 0,
	roundsDrawn: 0,
	streak: 0,
	bestStreak: 0,
	throws: {
		rock: 0,
		paper: 0,
		scissors: 0
	},
	lastMode: "bo3",
	muted: false,
	shake: true
};
function migrate(raw) {
	const s = {
		...defaultStats,
		...raw,
		throws: {
			...defaultStats.throws,
			...raw.throws
		}
	};
	s.version = SAVE_VERSION;
	return s;
}
function loadStats() {
	if (typeof window === "undefined") return {
		...defaultStats,
		throws: { ...defaultStats.throws }
	};
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return {
			...defaultStats,
			throws: { ...defaultStats.throws }
		};
		return migrate(JSON.parse(raw));
	} catch {
		return {
			...defaultStats,
			throws: { ...defaultStats.throws }
		};
	}
}
function saveStats(stats) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(KEY, JSON.stringify(stats));
	} catch {}
}
var COUNT_WORDS = [
	"JAN",
	"KEN",
	"PON"
];
function prefersReducedMotion() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function delay(ms, signal) {
	return new Promise((resolve) => {
		if (signal.aborted) {
			resolve();
			return;
		}
		const start = performance.now();
		const tick = (now) => {
			if (signal.aborted || now - start >= ms) {
				resolve();
				return;
			}
			requestAnimationFrame(tick);
		};
		requestAnimationFrame(tick);
	});
}
function Game() {
	const [view, setView] = (0, import_react.useState)("title");
	const [stats, setStats] = (0, import_react.useState)(defaultStats);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [mode, setMode] = (0, import_react.useState)("bo3");
	const [youScore, setYouScore] = (0, import_react.useState)(0);
	const [houseScore, setHouseScore] = (0, import_react.useState)(0);
	const [round, setRound] = (0, import_react.useState)(1);
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [yourThrow, setYourThrow] = (0, import_react.useState)(null);
	const [houseThrow, setHouseThrow] = (0, import_react.useState)(null);
	const [outcome, setOutcome] = (0, import_react.useState)(null);
	const [countWord, setCountWord] = (0, import_react.useState)(null);
	const [burst, setBurst] = (0, import_react.useState)(0);
	const stageRef = (0, import_react.useRef)(null);
	const traumaRef = (0, import_react.useRef)(0);
	const abortRef = (0, import_react.useRef)(null);
	const statsRef = (0, import_react.useRef)(stats);
	statsRef.current = stats;
	(0, import_react.useEffect)(() => {
		const loaded = loadStats();
		setStats(loaded);
		setMode(loaded.lastMode);
		setMuted(loaded.muted);
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		saveStats(stats);
	}, [stats, hydrated]);
	(0, import_react.useEffect)(() => {
		const onVis = () => {
			if (document.visibilityState === "visible") resumeAudio();
		};
		document.addEventListener("visibilitychange", onVis);
		return () => document.removeEventListener("visibilitychange", onVis);
	}, []);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		let last = performance.now();
		const loop = (now) => {
			const dt = Math.min((now - last) / 1e3, .1);
			last = now;
			if (traumaRef.current > 0) {
				traumaRef.current = Math.max(0, traumaRef.current - dt * 3.2);
				const shake = traumaRef.current * traumaRef.current;
				const t = now / 1e3;
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
	const addTrauma = (0, import_react.useCallback)((amount) => {
		if (!statsRef.current.shake || prefersReducedMotion()) return;
		traumaRef.current = Math.min(1, traumaRef.current + amount);
	}, []);
	const patchStats = (0, import_react.useCallback)((fn) => {
		setStats((s) => fn(s));
	}, []);
	const resetMatch = (0, import_react.useCallback)((nextMode) => {
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
		patchStats((s) => ({
			...s,
			lastMode: nextMode
		}));
	}, [patchStats]);
	const goTitle = (0, import_react.useCallback)(() => {
		abortRef.current?.abort();
		setView("title");
		setPhase("idle");
		setYourThrow(null);
		setHouseThrow(null);
		setOutcome(null);
		setCountWord(null);
	}, []);
	const startMatch = (0, import_react.useCallback)((nextMode) => {
		unlockAudio();
		sfxPlay.select();
		resetMatch(nextMode);
		setView("play");
	}, [resetMatch]);
	const finishRound = (0, import_react.useCallback)((you, house, result) => {
		const target = targetFor(mode);
		let nextYou = youScore;
		let nextHouse = houseScore;
		if (result === "win") nextYou += 1;
		if (result === "lose") nextHouse += 1;
		patchStats((s) => {
			const throws = {
				...s.throws,
				[you]: s.throws[you] + 1
			};
			if (result === "win") {
				const streak = s.streak + 1;
				return {
					...s,
					throws,
					roundsWon: s.roundsWon + 1,
					streak,
					bestStreak: Math.max(s.bestStreak, streak)
				};
			}
			if (result === "lose") return {
				...s,
				throws,
				roundsLost: s.roundsLost + 1,
				streak: 0
			};
			return {
				...s,
				throws,
				roundsDrawn: s.roundsDrawn + 1
			};
		});
		setYouScore(nextYou);
		setHouseScore(nextHouse);
		if (result !== "draw" && (nextYou >= target || nextHouse >= target)) {
			const youWon = nextYou > nextHouse;
			patchStats((s) => youWon ? {
				...s,
				matchesWon: s.matchesWon + 1
			} : {
				...s,
				matchesLost: s.matchesLost + 1
			});
			if (youWon) sfxPlay.matchWin();
			else sfxPlay.matchLose();
			addTrauma(youWon ? .55 : .7);
			setPhase("matchover");
		} else {
			if (result === "win") sfxPlay.win();
			else if (result === "lose") sfxPlay.lose();
			else sfxPlay.draw();
			setPhase("resolve");
		}
	}, [
		addTrauma,
		houseScore,
		mode,
		patchStats,
		youScore
	]);
	const pick = (0, import_react.useCallback)((id) => {
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
		(async () => {
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
			addTrauma(.62);
			setBurst((n) => n + 1);
			const result = resolveThrow(id, house);
			setOutcome(result);
			await delay(reduced ? 280 : 620, ac.signal);
			if (ac.signal.aborted) return;
			finishRound(id, house, result);
		})();
	}, [
		addTrauma,
		finishRound,
		phase
	]);
	const nextRound = (0, import_react.useCallback)(() => {
		if (phase !== "resolve") return;
		sfxPlay.select();
		setRound((r) => r + 1);
		setPhase("idle");
		setYourThrow(null);
		setHouseThrow(null);
		setOutcome(null);
		setCountWord(null);
	}, [phase]);
	const toggleMute = (0, import_react.useCallback)(() => {
		unlockAudio();
		setStats((s) => {
			const muted = !s.muted;
			setMuted(muted);
			return {
				...s,
				muted
			};
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.repeat) return;
			const target = e.target;
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
	}, [
		goTitle,
		mode,
		nextRound,
		phase,
		pick,
		resetMatch,
		toggleMute,
		view
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "relative min-h-dvh overflow-x-hidden bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: stageRef,
			className: "safe-pad mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 sm:px-6",
			children: [
				view === "title" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleScreen, {
					onPlay: () => {
						unlockAudio();
						sfxPlay.select();
						setView("mode");
					},
					onRecords: () => {
						sfxPlay.select();
						setView("records");
					},
					onHow: () => {
						sfxPlay.select();
						setView("how");
					},
					stats
				}),
				view === "mode" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeScreen, {
					lastMode: mode,
					onBack: goTitle,
					onPick: startMatch
				}),
				view === "how" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowScreen, { onBack: goTitle }),
				view === "records" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordsScreen, {
					stats,
					onBack: goTitle
				}),
				view === "play" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayScreen, {
					mode,
					youScore,
					houseScore,
					round,
					phase,
					yourThrow,
					houseThrow,
					outcome,
					countWord,
					muted: stats.muted,
					burst,
					onBack: goTitle,
					onMute: toggleMute,
					onPick: pick,
					onNext: nextRound,
					onRematch: () => resetMatch(mode),
					onChangeMode: () => {
						abortRef.current?.abort();
						setView("mode");
					}
				})
			]
		})
	});
}
function TitleScreen({ onPlay, onRecords, onHow, stats }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col justify-between gap-10 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "anim-rise flex items-center justify-between text-xs font-medium tracking-[0.22em] text-subtle uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "You vs the house" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums",
					children: [
						stats.matchesWon,
						"–",
						stats.matchesLost
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "anim-rise mb-4 text-xs font-medium tracking-[0.28em] text-muted uppercase",
						style: { animationDelay: "40ms" },
						children: "Rock · Paper · Scissors"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display anim-rise text-hero leading-[0.85] text-fg",
						style: { animationDelay: "80ms" },
						children: "JANKEN"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "anim-rise mx-auto mt-6 max-w-sm text-base leading-relaxed text-muted",
						style: { animationDelay: "140ms" },
						children: "Three throws. One count. Read the house and take the series."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "anim-rise mx-auto flex w-full max-w-sm flex-col gap-3",
				style: { animationDelay: "200ms" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "xl",
					className: "w-full font-display tracking-wide text-lg",
					onClick: onPlay,
					children: "Play"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "lg",
						className: "w-full",
						onClick: onRecords,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-4" }), "Records"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "lg",
						className: "w-full",
						onClick: onHow,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4" }), "Rules"]
					})]
				})]
			})
		]
	});
}
function ModeScreen({ lastMode, onBack, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-8 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			title: "Match length",
			onBack
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-1 flex-col justify-center gap-3",
			children: Object.keys(MODE_META).map((id, i) => {
				const meta = MODE_META[id];
				const featured = id === lastMode;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPick(id),
					"aria-label": meta.label,
					className: cn("anim-rise flex min-h-20 items-center justify-between rounded-xl border px-5 py-4 text-left transition-[border-color,background-color,transform] duration-150 ease-out active:scale-[0.96]", featured ? "border-fg/40 bg-elevated" : "border-border bg-surface hover:border-fg/25"),
					style: { animationDelay: `${i * 40}ms` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display block text-xl tracking-wide",
						children: meta.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-muted",
						children: meta.blurb
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl tabular-nums text-subtle",
						children: meta.target
					})]
				}, id);
			})
		})]
	});
}
function HowScreen({ onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-8 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				title: "Rules",
				onBack
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-3",
				children: THROWS.map((id, i) => {
					const meta = THROW_META[id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "anim-rise flex items-center gap-4 rounded-xl border border-border bg-surface px-4 py-4",
						style: { animationDelay: `${i * 40}ms` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-14 items-center justify-center rounded-lg bg-elevated text-fg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThrowMark, {
								id,
								className: "size-10"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display block text-lg tracking-wide",
							children: meta.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted",
							children: [
								meta.verb,
								" ",
								meta.beats
							]
						})] })]
					}, id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "Draws replay the round. Keys: R, P, S to throw. Enter to continue. M to mute."
			})
		]
	});
}
function RecordsScreen({ stats, onBack }) {
	const totalThrows = stats.throws.rock + stats.throws.paper + stats.throws.scissors;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-8 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				title: "Records",
				onBack
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Matches",
						value: `${stats.matchesWon}–${stats.matchesLost}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Best streak",
						value: String(stats.bestStreak)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Rounds won",
						value: String(stats.roundsWon)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Draws",
						value: String(stats.roundsDrawn)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs font-medium tracking-[0.18em] text-subtle uppercase",
					children: "Throws used"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3",
					children: THROWS.map((id) => {
						const n = stats.throws[id];
						const pct = totalThrows === 0 ? 0 : Math.round(n / totalThrows * 100);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThrowMark, {
									id,
									className: "size-6 text-fg"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 flex-1 overflow-hidden rounded-full bg-elevated",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-accent",
										style: { width: `${pct}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-10 text-right text-sm tabular-nums text-muted",
									children: n
								})
							]
						}, id);
					})
				})]
			})
		]
	});
}
function StatCard({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface px-4 py-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-[0.18em] text-subtle uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display mt-2 text-3xl tabular-nums tracking-wide",
			children: value
		})]
	});
}
function TopBar({ title, onBack, extra }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				onClick: onBack,
				"aria-label": "Back",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display flex-1 text-xl tracking-wide",
				children: title
			}),
			extra
		]
	});
}
function PlayScreen({ mode, youScore, houseScore, round, phase, yourThrow, houseThrow, outcome, countWord, muted, burst, onBack, onMute, onPick, onNext, onRematch, onChangeMode }) {
	const target = targetFor(mode);
	const picking = phase === "idle";
	const showYours = yourThrow && (phase === "reveal" || phase === "resolve" || phase === "matchover" || phase === "count");
	const showHouse = houseThrow && (phase === "reveal" || phase === "resolve" || phase === "matchover");
	const youWonMatch = phase === "matchover" && youScore > houseScore;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: onBack,
						"aria-label": "Leave match",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-medium tracking-[0.2em] text-subtle uppercase",
							children: [
								MODE_META[mode].label,
								" · Round ",
								round
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: onMute,
						"aria-label": muted ? "Unmute" : "Mute",
						children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[1fr_auto_1fr] items-end gap-3 px-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreCol, {
						label: "You",
						score: youScore,
						target,
						align: "left"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display pb-1 text-sm tracking-[0.2em] text-subtle",
						children: "VS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreCol, {
						label: "House",
						score: houseScore,
						target,
						align: "right"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-h-56 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex min-h-52 flex-1 items-center justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-[8%] rounded-full border border-border",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-[22%] rounded-full border border-border/60",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClashBurst, { burst }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 grid w-full grid-cols-2 items-center gap-4 px-2 sm:gap-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandCard, {
								side: "you",
								throwId: showYours ? yourThrow : null,
								hiddenFace: phase === "count",
								slamming: phase === "reveal" || phase === "resolve" || phase === "matchover",
								winner: outcome === "win",
								loser: outcome === "lose"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandCard, {
								side: "house",
								throwId: showHouse ? houseThrow : null,
								hiddenFace: phase === "idle" || phase === "count",
								slamming: phase === "reveal" || phase === "resolve" || phase === "matchover",
								winner: outcome === "lose",
								loser: outcome === "win"
							})]
						}),
						countWord && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-0 z-20 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display anim-count text-hero text-fg",
								children: countWord
							}, countWord)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-16 items-center justify-center",
					"aria-live": "polite",
					children: [phase === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm tracking-[0.28em] text-subtle uppercase",
						children: "Choose"
					}), (phase === "resolve" || phase === "matchover") && outcome && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultStamp, {
						outcome: phase === "matchover" ? youWonMatch ? "win" : "lose" : outcome,
						match: phase === "matchover"
					})]
				})]
			}),
			phase === "matchover" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "xl",
					className: "w-full font-display text-lg tracking-wide",
					onClick: onRematch,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Rematch"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "lg",
					className: "w-full",
					onClick: onChangeMode,
					children: "Change length"
				})]
			}) : phase === "resolve" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "xl",
				className: "w-full font-display text-lg tracking-wide",
				onClick: onNext,
				children: "Next round"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2 sm:gap-3",
				children: THROWS.map((id) => {
					const meta = THROW_META[id];
					const selected = yourThrow === id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: !picking,
						onClick: () => onPick(id),
						onPointerEnter: () => picking && sfxPlay.hover(),
						className: cn("flex min-h-30 flex-col items-center justify-center gap-2 rounded-xl border px-2 py-3 transition-[border-color,background-color,opacity,transform] duration-150 ease-out", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50", picking && "hover:border-fg/35 active:scale-[0.96]", selected ? "border-fg/50 bg-elevated" : "border-border bg-surface", !picking && !selected && "opacity-40"),
						"aria-label": `${meta.label}, beats ${meta.beats}. Key ${meta.key}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThrowMark, {
								id,
								className: "size-12 text-fg sm:size-14"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm tracking-wide",
								children: meta.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-xs tracking-[0.18em] text-subtle uppercase sm:block",
								children: meta.key
							})
						]
					}, id);
				})
			})
		]
	});
}
function ScoreCol({ label, score, target, align }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-1", align === "right" && "items-end"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium tracking-[0.18em] text-subtle uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-4xl leading-none tabular-nums sm:text-5xl",
				children: score
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex gap-1",
				"aria-hidden": "true",
				children: Array.from({ length: target }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", i < score ? "bg-fg" : "bg-border") }, i))
			})
		]
	});
}
function HandCard({ side, throwId, hiddenFace, slamming, winner, loser }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative mx-auto flex aspect-square w-full max-w-44 items-center justify-center rounded-2xl border bg-elevated", winner ? "border-win/50" : loser ? "border-lose/40" : "border-border", slamming ? side === "you" ? "anim-slam-you" : "anim-slam-house" : ""),
		children: hiddenFace || !throwId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-10 rounded-full border-2 border-dashed border-subtle/70", hiddenFace && "anim-pulse-back") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThrowMark, {
			id: throwId,
			className: "size-2/3 text-fg"
		})
	});
}
function ResultStamp({ outcome, match }) {
	const label = outcome === "win" ? "Win" : outcome === "lose" ? "Lose" : "Draw";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "anim-stamp text-center",
		children: [match && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1 text-xs font-medium tracking-[0.22em] text-subtle uppercase",
			children: "Match"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("font-display text-stamp leading-none tracking-wide", outcome === "win" ? "text-win" : outcome === "lose" ? "text-lose" : "text-draw"),
			children: label
		})]
	});
}
function ClashBurst({ burst }) {
	const canvasRef = (0, import_react.useRef)(null);
	const particles = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		if (burst === 0 || prefersReducedMotion()) return;
		const canvas = canvasRef.current;
		if (!canvas) return;
		const w = canvas.clientWidth;
		const h = canvas.clientHeight;
		const next = [];
		for (let i = 0; i < 28; i++) {
			const a = Math.PI * 2 * i / 28 + Math.random() * .2;
			const sp = 80 + Math.random() * 160;
			next.push({
				x: w / 2,
				y: h / 2,
				vx: Math.cos(a) * sp,
				vy: Math.sin(a) * sp,
				life: 0,
				max: .35 + Math.random() * .25,
				s: 1.5 + Math.random() * 2.2
			});
		}
		particles.current = next;
	}, [burst]);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let last = performance.now();
		const loop = (now) => {
			const dt = Math.min((now - last) / 1e3, .1);
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
				ctx.arc(p.x, p.y, p.s * (1 - t * .4), 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			particles.current = list.filter((p) => p.life < p.max);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(raf);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "pointer-events-none absolute inset-0 z-10 h-full w-full",
		"aria-hidden": "true"
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Game, {});
}
//#endregion
export { Home as component };
