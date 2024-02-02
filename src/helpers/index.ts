import { CaseTransformation } from "@/Types";

export const transformString = (
  value: string,
  transformation: CaseTransformation
): string => {
  switch (transformation) {
    case "lowercase":
      return value.toLowerCase().replace(/\s+/g, "-");
    case "original":
      // Revert back to the original string (remove hyphens)
      return value.replace(/-/g, " ");
    default:
      return value; // No transformation
  }
};
