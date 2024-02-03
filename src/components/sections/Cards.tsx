"use client";
import React from "react";
import Card from "../ui/card";
import { Company } from "@/Types";

type CardsProps = {
  data: Company[] | undefined;
};

function Cards({ data }: CardsProps) {
  return (
    <div className=" relative grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 py-10">
      {data?.map((companyData, index: number) => (
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
