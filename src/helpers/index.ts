import { CaseTransformation, Company, ImageFormats } from "@/Types";
import { createDropdownOptions } from "./category";

export const transformString = (
  value: string,
  transformation: CaseTransformation
): string => {
  switch (transformation) {
    case "lowercase":
      return value.toLowerCase().replace(/\s+/g, "-");
    case "original":
      // Revert back to the original string (remove hyphens)
      // Capitalize the first letter of each word
      return value
        .replace(/-/g, " ")
        .replace(/\b\w/g, (match) => match.toUpperCase());
    default:
      return value; // No transformation
  }
};

// Download image based on selected format and company name
export const downloadImage = (selectedFormat: string, fileName: string) => {
  const imageUrl = `/logos/${fileName}/${fileName}.${selectedFormat.toLocaleLowerCase()}`;
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = `${fileName}.${selectedFormat.toLocaleLowerCase()}`;
  link.click();
};

// returns filter companies based on category
export const filterCompaniesByCategory = (
  companies: Company[] | undefined,
  category: string
) => {
  const comapanyCategories = createDropdownOptions();
  if (companies) {
    if (category === comapanyCategories[0].value) {
      return companies;
    }
    return companies.filter((company) => company.category.includes(category));
  }
};
