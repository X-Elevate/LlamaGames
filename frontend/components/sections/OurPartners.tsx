import React from "react";
import Image from "next/image";
import Partner from "@/public/partner.svg";

type Props = {};

function OurPartners({}: Props) {
  return (
    <div className="bg-gradient-to-tr to-gradientSecondColor from-gradientFirstColor w-full flex items-center justify-center py-8 sm:py-16 rounded-b-[40px] sm:rounded-b-[80px]">
      <div className="w-11/12 sm:w-3/4">
        <h1 className="text-2xl sm:text-4xl text-orange text-center sm:text-left mb-8 sm:mb-12">Our Partners</h1>
        <div className="flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-1/3 sm:w-1/5 max-w-[120px]">
              <div className="aspect-square relative">
                <Image 
                  src={Partner} 
                  alt={`Partner ${index + 1}`} 
                  layout="fill" 
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurPartners;