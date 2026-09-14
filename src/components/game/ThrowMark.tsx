import type { ThrowId } from "@/lib/game/rules";
import { cn } from "@/lib/utils";

type Props = {
  id: ThrowId;
  className?: string;
};

export function ThrowMark({ id, className }: Props) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={cn("block", className)}
      aria-hidden="true"
      fill="none"
    >
      {id === "rock" ? <RockGlyph /> : id === "paper" ? <PaperGlyph /> : <ScissorsGlyph />}
    </svg>
  );
}

function RockGlyph() {
  return (
    <g fill="currentColor">
      <ellipse cx="48" cy="66" rx="30" ry="16" opacity="0.22" />
      <path
        d="M22 58c0-6 6-12 14-16 3-8 12-14 20-14 11 0 20 8 22 18 8 3 12 10 12 16 0 10-14 18-32 18s-36-8-36-22z"
        opacity="0.95"
      />
      <path
        d="M38 42c4-8 12-12 20-10 6 2 10 8 11 14-8-2-16-1-24 2-3-2-5-4-7-6z"
        opacity="0.35"
      />
      <path d="M30 60c8 4 18 6 30 4" stroke="currentColor" strokeWidth="2" opacity="0.25" fill="none" />
    </g>
  );
}

function PaperGlyph() {
  return (
    <g fill="currentColor">
      <path d="M28 16h32l12 12v52H28V16z" opacity="0.95" />
      <path d="M60 16v12h12" opacity="0.35" />
      <path d="M38 40h24M38 52h24M38 64h16" stroke="var(--color-bg)" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
    </g>
  );
}

function ScissorsGlyph() {
  return (
    <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none">
      <circle cx="28" cy="70" r="10" fill="currentColor" opacity="0.18" />
      <circle cx="52" cy="70" r="10" fill="currentColor" opacity="0.18" />
      <circle cx="28" cy="70" r="8" />
      <circle cx="52" cy="70" r="8" />
      <path d="M34 64 L70 22" />
      <path d="M46 64 L26 22" />
      <path d="M70 22 L78 18" />
      <path d="M26 22 L18 18" />
      <circle cx="40" cy="58" r="3.5" fill="currentColor" stroke="none" />
    </g>
  );
}
