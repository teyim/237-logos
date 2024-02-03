"use client";
import { useSearchContext } from "@/context/searchContext";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

function Searchbox() {
  const { setSearchValue } = useSearchContext();

  return (
    <div className="flex items-center space-x-2 ring-1 ring-ring py-2  rounded-xl bg-white">
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
