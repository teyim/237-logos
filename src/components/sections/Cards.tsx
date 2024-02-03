"use client";
import React from "react";
import Card from "../ui/card";
import { Company } from "@/Types";
import { useSearchContext } from "@/context/searchContext";
import { createDropdownOptions } from "@/helpers/category";
import { filterCompaniesByCategory } from "@/helpers";

type CardsProps = {
  data: Company[] | undefined;
};

function Cards({ data }: CardsProps) {
  const { searchValue, filterCategory } = useSearchContext();

  // search companies based on search value
  const searchedCompanies = filterCompaniesByCategory(
    data,
    filterCategory
  )?.filter((company) =>
    company.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  // sort companies in alpahbetic order based on name
  const sortedCompanies = searchedCompanies
    ?.slice()
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 py-10">
      {sortedCompanies?.map((companyData, index: number) => (
        <Card
          key={index}
          title={companyData.title}
          category={companyData.category}
          fileName={companyData.fileName}
          url={companyData.url}
        />
      ))}
    </div>
  );
}

export default Cards;
