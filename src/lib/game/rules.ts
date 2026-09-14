export const THROWS = ["rock", "paper", "scissors"] as const;
export type ThrowId = (typeof THROWS)[number];

export type Mode = "quick" | "bo3" | "bo5";
export type Outcome = "win" | "lose" | "draw";

export const BEATS: Record<ThrowId, ThrowId> = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

export const LOSES_TO: Record<ThrowId, ThrowId> = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
};

export const THROW_META: Record<
  ThrowId,
  { label: string; verb: string; key: string; beats: string }
> = {
  rock: { label: "Rock", verb: "crushes", key: "R", beats: "scissors" },
  paper: { label: "Paper", verb: "covers", key: "P", beats: "rock" },
  scissors: { label: "Scissors", verb: "cut", key: "S", beats: "paper" },
};

export const MODE_META: Record<Mode, { label: string; blurb: string; target: number }> = {
  quick: { label: "Quick match", blurb: "First point takes it.", target: 1 },
  bo3: { label: "Best of three", blurb: "First to two.", target: 2 },
  bo5: { label: "Best of five", blurb: "First to three.", target: 3 },
};

export function resolveThrow(you: ThrowId, house: ThrowId): Outcome {
  if (you === house) return "draw";
  return BEATS[you] === house ? "win" : "lose";
}

export function randomThrow(): ThrowId {
  const i = Math.floor(Math.random() * THROWS.length);
  return THROWS[i] ?? "rock";
}

export function targetFor(mode: Mode): number {
  return MODE_META[mode].target;
}
