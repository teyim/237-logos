import { Company } from "@/Types";
import { transformString } from "@/helpers";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

function Card({ title, fileName, url, category }: Company) {
  const logoDownloadFormats = ["PNG", "SVG"];
  return (
    <div className="w-[280px] h-[280px] ring-1 ring-ring p-2 rounded-lg ">
      <div className="relative group">
        <div className="h-[180px] flex justify-center items-center ">
          <Image
            src={`/logos/${fileName}/${fileName}.svg`}
            alt={title}
            width={150} // Adjust the width as per your design
            height={150}
            prefix="false"
            // Adjust the height as per your design
          />
        </div>
        <div className="absolute inset-0 bg-primary bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center rounded-lg">
          <div className="flex flex-col">
            {logoDownloadFormats.map((downloadFormat, index) => (
              <Button
                key={index}
                className="flex items-center space-x-2 space-y-3 hover:text-purple"
              >
                <DownloadIcon />
                <span>{downloadFormat}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-2">
        <Link
          href={url}
          className="font-grotesk font-semibold hover:underline hover:text-purple hover:font-bold"
        >
          {title}
        </Link>
        <p>{transformString(category.join(", "), "original")}</p>
      </div>
    </div>
  );
}

export default Card;
