"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQ() {
  return (
    <section className="w-[80%] flex flex-row gap-4 items-center justify-between">
      <div className="w-1/3 relative">
        <h2 className="relative text-[32px] font-medium text-cherry pb-6 w-[85%]">
          Frequently asked questions
        </h2>
        <p className="relative text-sm text-darkCherry w-[95%]">
          Can’t find the answer you are looking for? Reach out to our{" "}
          <span className="text-orange underline underline-offset-2">
            customer support
          </span>{" "}
          team.
        </p>
      </div>

      <ul className="w-[60%]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ul>
    </section>
  );
}
