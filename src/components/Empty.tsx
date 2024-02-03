import Image from "next/image";
import React from "react";
import emptyImage from "@public/images/empty.svg";

function Empty() {
  return (
    <div className="flex flex-col items-center content-center  p-6">
      <div className="w-[300px] h-[300px] ">
        <Image
          src={emptyImage}
          className="w-full h-full"
          alt="rocket distroy "
        />
      </div>
      <h3 className="font-grotesk font-semibold">No Company Found</h3>
    </div>
  );
}

export default Empty;
