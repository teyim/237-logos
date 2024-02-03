"use client";
import React from "react";
import Card from "../ui/card";
import { Company } from "@/Types";
import { useSearchContext } from "@/context/searchContext";

type CardsProps = {
  data: Company[] | undefined;
};

function Cards({ data }: CardsProps) {
  const { searchValue } = useSearchContext();

  // filter companies based on search value
  const filteredCompanies = data?.filter((company) =>
    company.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 py-10">
      {filteredCompanies?.map((companyData, index: number) => (
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
