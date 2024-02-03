"use client";
import { useSearchContext } from "@/context/searchContext";
import {
  ArrowBigDown,
  ArrowDown,
  ArrowDownIcon,
  ChevronDown,
  LucideArrowDown,
  Search,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createDropdownOptions } from "@/helpers/category";
import { useState } from "react";
import categories from "@/constants/categories";
import { cn } from "@/lib/utils";
import { DropdownOption } from "@/Types";

function Searchbox() {
  const { setSearchValue, setFilterCategory } = useSearchContext();
  const comapanyCategories = createDropdownOptions();
  const [selectedCategory, setSelectedCategory] = useState(
    comapanyCategories[0]
  );

  const filterSelectHandler = (option: DropdownOption) => {
    setSelectedCategory(option);
    setFilterCategory(option.value);
  };

  return (
    <div className="flex items-center space-x-2 ring-1 ring-ring py-2  rounded-xl bg-white">
      <DropdownMenu>
        <DropdownMenuTrigger className="px-2 border-r outline-none flex items-center text-sm ">
          {selectedCategory.label}
          <span className="ml-2">
            <ChevronDown size={20} />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="h-[200px] overflow-y-scroll p-3 text-sm">
          {comapanyCategories.map((category, index) => (
            <DropdownMenuItem
              key={index}
              className={cn(
                "cursor-pointer",
                selectedCategory.value === category.value && "font-semibold"
              )}
              onClick={() => filterSelectHandler(category)}
            >
              {category.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <input
        type="text"
        className="w-80 px-3 ring-0 border-0 outline-none active:border-none"
        placeholder="Search Company by name"
        onChange={(results) => setSearchValue(results?.currentTarget?.value)}
      />
      <button className="px-3 py-2 ">
        <Search strokeWidth={1.75} />
      </button>
    </div>
  );
}

export default Searchbox;
