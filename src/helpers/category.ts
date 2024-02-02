import categories from "@/constants/categories";

// Function to create label-value pairs for dropdown options
export const createDropdownOptions = (): { label: string; value: string }[] => {
  const categoryOptions: DropdownOptions = [];

  // Iterate over each category and create label-value pair
  categories.forEach((category) => {
    const formattedValue = category.toLowerCase().replace(/\s+/g, "-");
    categoryOptions.push({
      label: category,
      value: formattedValue,
    });
  });

  return categoryOptions;
};
