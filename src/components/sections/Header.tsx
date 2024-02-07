import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Header() {
  return (
    <section className="text-center py-[60px]">
      <div className="md:w-[60%] mx-auto leading-relaxed">
        <h1 className="font-grotesk font-bold">
          <strong className="text-purple">237 Logos</strong>, an open source
          collection of high quality, optimised logos of Cameroonian companies
        </h1>

        <h4 className="my-4">
          Search and download logos in <strong>PNG</strong> and{" "}
          <strong>SVG</strong> formats
        </h4>
        <div className=" ">
          <Link href="https://github.com/teyim/237-logos">
            <Button size="lg" className="font-grotesk">
              Contribute on Github
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
