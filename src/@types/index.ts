export type YesOrNo = "Yes" | "No";

// if certain commands need certain files you can list them here'
export const requiredFiles = [""] as const;

export type RequiredFiles = (typeof requiredFiles)[number];
