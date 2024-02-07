import { Company, ImageFormats } from "@/Types";
import { downloadImage, transformString } from "@/helpers";
import { ChevronDown, DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./button";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

function Card({ title, fileName, url, category }: Company) {
  const logoDownloadFormats = Object.keys(ImageFormats);

  const showToast = () => {
    toast("🎉 Logo Successfully downloaded", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleDownload = (imageFormat: string, fileName: string) => {
    downloadImage(imageFormat, fileName);
    showToast();
  };

  return (
    <div className="lg:w-[280px] lg:h-[280px]  w-full ring-1 ring-ring p-2 rounded-lg ">
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
        <div
          className={cn(
            "absolute inset-0 bg-primary bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center rounded-lg"
          )}
        >
          <div className="hidden lg:flex flex-col">
            {logoDownloadFormats.map((imageFormat, index) => (
              <Button
                key={index}
                className="flex items-center space-x-2 space-y-3 hover:text-purple"
                onClick={() => handleDownload(imageFormat, fileName)}
              >
                <DownloadIcon />
                <span>{imageFormat}</span>
              </Button>
            ))}
          </div>

          <div className="block lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className=" border-r outline-none flex items-center text-sm bg-white p-2">
                Download logo
                <span className="ml-2">
                  <ChevronDown size={20} />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="h-[100px] overflow-y-scroll p-3 text-sm">
                {logoDownloadFormats.map((format, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => handleDownload(format, fileName)}
                  >
                    {format}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
        <p className="text-sm">
          {category
            .map((category) => transformString(category, "original"))
            .join(", ")}
        </p>
      </div>
    </div>
  );
}

export default Card;
