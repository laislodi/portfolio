export const Level = {
  BASIC:          "basic",
  INTERMEDIATE:   "intermediate",
  CONVERSATIONAL: "conversational",
  PROFICIENT:     "proficient",
  FLUENT:         "fluent",
  NATIVE:         "native",
} as const;

export type LevelKey = typeof Level[keyof typeof Level];
