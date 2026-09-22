const BLOCKED_NAME_PATTERNS = [
  /\b(n[i1]gg|fag|kike)\b/i,
  /\b(hitler|nazi|terrorist)\b/i,
  /\b(admin|support|official|mod)\b.*\b(coin|token)\b/i,
];

const RESERVED_NAMES = new Set(["stuffed", "stuffedcoin", "base", "solana", "omni", "omnicoin", "omnistor age", "omnistable", "omnigames", "omnihub"]);

export type NameCheck =
  | { allowed: true; normalized: string }
  | { allowed: false; reason: string };

/** Lightweight UX screening only; this is not a complete moderation or legal review. */
export function checkTokenName(input: string): NameCheck {
  const normalized = input.trim().replace(/\s+/g, " ");
  if (normalized.length < 2 || normalized.length > 40) return { allowed: false, reason: "Use a name between 2 and 40 characters." };
  if (RESERVED_NAMES.has(normalized.toLowerCase())) return { allowed: false, reason: "This name is reserved by OmniEcosystem or a supported network." };
  if (BLOCKED_NAME_PATTERNS.some((pattern) => pattern.test(normalized))) return { allowed: false, reason: "This name cannot be used because it may be hateful, deceptive, or impersonating." };
  return { allowed: true, normalized };
}
