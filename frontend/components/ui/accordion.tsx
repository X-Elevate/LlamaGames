"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "h-full transition-all data-[state=open]:bg-[#FFF4D6] rounded-2xl relative",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-col items-start py-8 font-medium transition-all data-[state=open]:bg-[#FFF4D6] group w-full",
        className
      )}
      {...props}
    >
      <span className="flex-1 w-full flex flex-col gap-2">{children}</span>
      <div className="absolute w-4 h-4 self-start bottom-2">
        <Minus className="h-4 w-4 text-cherry shrink-0 absolute top-0 left-0 transition-all duration-300 group-data-[state=closed]:opacity-0 group-data-[state=closed]:rotate-90 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
        <Plus className="h-4 w-4 text-cherry shrink-0 absolute top-0 left-0 transition-all duration-300 group-data-[state=closed]:opacity-100 group-data-[state=closed]:rotate-0 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden rounded-2xl text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=open]:bg-[#FFF4D6] pb-4"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
