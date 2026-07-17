import type {
  BlueprintOrientation,
  BlueprintState,
} from "./types";

export const blueprintNodeTokens: Record<
  BlueprintState,
  {
    outer: string;
    inner: string;
  }
> = {
  inactive: {
    outer:
      "border-white/20 bg-[#05070d] shadow-none",

    inner:
      "bg-white/20",
  },

  active: {
    outer:
      "border-blue-400 bg-blue-500/15 shadow-[0_0_20px_rgba(59,130,246,0.45)]",

    inner:
      "bg-blue-400",
  },

  completed: {
    outer:
      "border-blue-500 bg-blue-500 shadow-[0_0_16px_rgba(59,130,246,0.35)]",

    inner:
      "bg-[#05070d]",
  },
};

export const blueprintConnectorTokens: Record<
  BlueprintOrientation,
  string
> = {
  vertical:
    "bg-gradient-to-b from-blue-400/40 via-white/20 to-white/10",

  horizontal:
    "bg-gradient-to-r from-blue-400/40 via-white/20 to-white/10",
};