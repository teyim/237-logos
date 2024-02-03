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
      return value.replace(/-/g, " ");
    default:
      return value; // No transformation
  }
};

// Download image based on selected format and company name
export const downloadImage = (selectedFormat: string, companyName: string) => {
  const imageUrl = `/logos/${companyName}/${companyName}.${selectedFormat.toLocaleLowerCase()}`;
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = `${companyName}.${selectedFormat.toLocaleLowerCase()}`;
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
