"use client";

export default function Sertificates() {
  return (
    <section className="w-[80%] flex flex-col gap-4 items-center justify-between">
      <h2 className="text-cherry text-[32px] text-left w-full pl-6">
        You’re in good company
      </h2>

      <ul className="flex w-full justify-evenly">
        <li className="w-[30%] flex flex-col gap-4">
          <div className="w-[30%]">
            <img src="sertificateImage.svg" className="w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-[24px] text-orange">ISO/IEC 27001:2022</h3>
            <p className="flex flex-col gap-4">
              <span className="text-darkCherry">
                Llama Game Technology is accredited with the ISO/IEC 27001:2013,
                which specifies the requirements for establishing, implementing,
                maintaining, and continually improving an information security
                management system within the context of the organization.
              </span>
              <span className="text-cherry font-medium hover:underline">Learn more</span>
            </p>
          </div>
        </li>
        <li className="w-[30%] flex flex-col gap-4">
          <div className="w-[30%]">
            <img src="sertificateImage.svg" className="w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-[24px] text-orange">ISO/IEC 27001:2022</h3>
            <p className="flex flex-col gap-4">
              <span className="text-darkCherry">
                Llama Game Technology is accredited with the ISO/IEC 27001:2013,
                which specifies the requirements for establishing, implementing,
                maintaining, and continually improving an information security
                management system within the context of the organization.
              </span>
              <span className="text-cherry font-medium hover:underline">Learn more</span>
            </p>
          </div>
        </li>
        <li className="w-[30%] flex flex-col gap-4">
          <div className="w-[30%]">
            <img src="sertificateImage.svg" className="w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-[24px] text-orange">ISO/IEC 27001:2022</h3>
            <p className="flex flex-col gap-4">
              <span className="text-darkCherry">
                Llama Game Technology is accredited with the ISO/IEC 27001:2013,
                which specifies the requirements for establishing, implementing,
                maintaining, and continually improving an information security
                management system within the context of the organization.
              </span>
              <span className="text-cherry font-medium hover:underline">Learn more</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
