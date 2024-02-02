type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownOptions = DropdownOption[];

export type Company = {
  title: string;
  fileName: string;
  url: string;
  category: string[];
};

export type Companies = Company[];

export type CaseTransformation = "lowercase" | "original";
