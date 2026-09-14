let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let sfx: GainNode | null = null;
let muted = false;

function ensure() {
  if (ctx) return;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  ctx = new AC({ latencyHint: "interactive" });
  master = ctx.createGain();
  sfx = ctx.createGain();
  sfx.connect(master);
  master.connect(ctx.destination);
  master.gain.value = muted ? 0 : 1;
}

export function unlockAudio() {
  ensure();
  if (ctx && ctx.state === "suspended") {
    void ctx.resume();
  }
}

export function setMuted(next: boolean) {
  muted = next;
  if (master && ctx) {
    master.gain.setTargetAtTime(next ? 0 : 1, ctx.currentTime, 0.02);
  }
}

export function resumeAudio() {
  if (ctx && ctx.state === "suspended") void ctx.resume();
}

function tone(
  freq: number,
  dur: number,
  type: OscillatorType,
  gain = 0.07,
  slide?: number,
  when = 0,
) {
  if (!ctx || !sfx || muted) return;
  const t = ctx.currentTime + when;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (slide) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(40, slide), t + dur);
  }
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g);
  g.connect(sfx);
  osc.start(t);
  osc.stop(t + dur + 0.03);
  osc.onended = () => {
    osc.disconnect();
    g.disconnect();
  };
}

function noiseThud(dur = 0.14, cutoff = 220, gain = 0.28) {
  if (!ctx || !sfx || muted) return;
  const t = ctx.currentTime;
  const frames = Math.floor(ctx.sampleRate * dur);
  const buffer = ctx.createBuffer(1, frames, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < frames; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
  }
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(cutoff, t);
  const g = ctx.createGain();
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
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

export const sfxPlay = {
  hover() {
    tone(740, 0.04, "triangle", 0.03);
  },
  select() {
    tone(220, 0.08, "square", 0.05);
    tone(440, 0.1, "triangle", 0.04);
  },
  tick() {
    const rate = 0.94 + Math.random() * 0.12;
    tone(880 * rate, 0.07, "square", 0.045);
  },
  slam() {
    noiseThud(0.16, 180, 0.32);
    tone(90, 0.18, "sine", 0.12, 48);
  },
  win() {
    tone(392, 0.16, "triangle", 0.07);
    tone(523, 0.22, "triangle", 0.06, undefined, 0.05);
    tone(659, 0.28, "triangle", 0.07, undefined, 0.09);
  },
  lose() {
    noiseThud(0.2, 140, 0.22);
    tone(196, 0.28, "sine", 0.08, 90);
  },
  draw() {
    tone(330, 0.12, "triangle", 0.05);
    tone(247, 0.18, "sine", 0.05);
  },
  matchWin() {
    tone(392, 0.14, "triangle", 0.06, undefined, 0);
    tone(523, 0.16, "triangle", 0.06, undefined, 0.08);
    tone(659, 0.22, "triangle", 0.07, undefined, 0.16);
    tone(784, 0.32, "triangle", 0.08, undefined, 0.26);
  },
  matchLose() {
    noiseThud(0.24, 120, 0.26);
    tone(174, 0.4, "sine", 0.1, 70);
  },
};
