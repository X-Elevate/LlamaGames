"use client";
import Image from 'next/image';

export default function Certificates() {
  return (
    <section className="w-full px-4 sm:px-8 md:w-[90%] lg:w-[80%] mx-auto flex flex-col gap-4 items-center justify-between">
      <h2 className="text-cherry text-2xl sm:text-3xl md:text-[32px] text-center sm:text-left w-full font-bold pb-6 sm:pb-10">
        You're in good company
      </h2>
      <ul className="flex flex-col sm:flex-row w-full justify-evenly gap-8 sm:gap-4">
        {[1, 2, 3].map((item) => (
          <li key={item} className="w-full sm:w-[30%] flex flex-col gap-4">
            <div className="w-[40%] sm:w-[60%] md:w-[45%] lg:w-[30%] pb-4 sm:pb-8 mx-auto sm:mx-0">
              <div className="aspect-square relative">
                <Image 
                  src="/sertificateImage.svg" 
                  alt={`Certificate ${item}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-8">
              <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold text-orange text-center sm:text-left">
                ISO/IEC 27001:2022
              </h3>
              <p className="flex flex-col gap-4">
                <span className="text-darkCherry text-sm sm:text-base">
                  Llama Game Technology is accredited with the ISO/IEC 27001:2013,
                  which specifies the requirements for establishing, implementing,
                  maintaining, and continually improving an information security
                  management system within the context of the organization.
                </span>
                <span className="text-cherry font-semibold hover:underline cursor-pointer text-center sm:text-left">
                  Learn more
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}