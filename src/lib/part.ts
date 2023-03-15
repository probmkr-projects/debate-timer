type PartType =
  | "construction"
  | "question"
  | "opposition"
  | "refutation"
  | "final argument"
  | "rest"
  | "prepare";
type SideType = "affirmative" | "negative" | "both";

export interface Part {
  side: SideType;
  type: PartType;
  duration: number;
}

export const TypeJapanese: { [key in PartType]: string } = {
  construction: "立論",
  question: "質疑",
  opposition: "反論",
  refutation: "反駁",
  "final argument": "最終弁論",
  rest: "休憩",
  prepare: "準備",
};

export const SideJapanese: { [key in SideType]: string } = {
  affirmative: "肯定",
  negative: "否定",
  both: "両方",
};
