import { DropdownOptions } from "@/Types";
import categories from "@/constants/categories";
import { transformString } from ".";

// Function to create label-value pairs for dropdown options
export const createDropdownOptions = (): { label: string; value: string }[] => {
  const categoryOptions: DropdownOptions = [];

  // Iterate over each category and create label-value pair
  categories.forEach((category) => {
    categoryOptions.push({
      label: category,
      value: transformString(category, "lowercase"),
    });
  });

  return categoryOptions;
};
