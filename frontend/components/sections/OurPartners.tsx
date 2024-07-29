import React from "react";
import Image from "next/image";
import Partner from "@/public/partner.svg";
type Props = {};

function OurPartners({}: Props) {
return (
    <div className="bg-gradient-to-tr to-gradientSecondColor from-gradientFirstColor w-full flex items-center justify-center pt-[4rem] pb-[4rem] rounded-b-[80px]">
        <div className="w-3/4">
            <h1 className="text-4xl text-orange">Our Partners</h1>
            <div className="flex gap-4 pt-[4.5rem]">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="w-1/4">
                        <Image src={Partner} alt="partner" />
                    </div>
                ))}
            </div>
        </div>
    </div>
);
}

export default OurPartners;
