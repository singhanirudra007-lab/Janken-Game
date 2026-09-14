import type { Mode, ThrowId } from "./rules";

const KEY = "janken.save";
const SAVE_VERSION = 1;

export type Stats = {
  version: number;
  matchesWon: number;
  matchesLost: number;
  roundsWon: number;
  roundsLost: number;
  roundsDrawn: number;
  streak: number;
  bestStreak: number;
  throws: Record<ThrowId, number>;
  lastMode: Mode;
  muted: boolean;
  shake: boolean;
};

export const defaultStats: Stats = {
  version: SAVE_VERSION,
  matchesWon: 0,
  matchesLost: 0,
  roundsWon: 0,
  roundsLost: 0,
  roundsDrawn: 0,
  streak: 0,
  bestStreak: 0,
  throws: { rock: 0, paper: 0, scissors: 0 },
  lastMode: "bo3",
  muted: false,
  shake: true,
};

function migrate(raw: Partial<Stats> & { version?: number }): Stats {
  const s: Stats = { ...defaultStats, ...raw, throws: { ...defaultStats.throws, ...raw.throws } };
  s.version = SAVE_VERSION;
  return s;
}

export function loadStats(): Stats {
  if (typeof window === "undefined") return { ...defaultStats, throws: { ...defaultStats.throws } };
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return { ...defaultStats, throws: { ...defaultStats.throws } };
    const parsed = JSON.parse(raw) as Partial<Stats>;
    return migrate(parsed);
  } catch {
    return { ...defaultStats, throws: { ...defaultStats.throws } };
  }
}

export function saveStats(stats: Stats): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(stats));
  } catch {
    // private mode / quota — keep playing in memory
  }
}
