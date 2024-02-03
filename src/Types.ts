export type DropdownOption = {
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

export type CaseTransformation = "lowercase" | "original";

export enum ImageFormats {
  PNG = "png",
  SVG = "svg",
}
