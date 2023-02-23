type PartType = "construction" | "opposition" | "refutation" | "final argument";

export interface Part {
  side: "self" | "opponent";
  type: PartType;
  duration: number;
}

export const TypeJapanese: { [key in PartType]: string } = {
  construction: "立論",
  opposition: "反論",
  refutation: "反駁",
  "final argument": "最終弁論",
};
