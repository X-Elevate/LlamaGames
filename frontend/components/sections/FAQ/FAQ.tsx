
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqData } from './FAQData';

export default function FAQ() {
    return (
        <section className='w-[80%] flex flex-row gap-4 items-start justify-between mb-28 mx-36'>
            <div className='w-96 relative top-0'>
                <h2 className='relative text-[32px] font-semibold text-cherry pb-6 w-[85%]'>
                    Frequently asked questions
                </h2>
                <p className='relative text-base font-medium text-darkCherry w-[95%]'>
                    Can’t find the answer you are looking for? Reach out to our{' '}
                    <span className='text-orange underline underline-offset-2 hover:cursor-pointer'>
                        customer support
                    </span>{' '}
                    team.
                </p>
            </div>

            <ul className='w-[60%] flex flex-col gap-4'>
                {faqData.map((faq, index) => (
                  
                    <Accordion className='h-full rounded-2xl border-[1px] border-[#F0CDB7]   shadow-none' type='single' collapsible key={index}>
                        <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger className='mx-4 text-left text-cherry'>
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className='mx-4 text-darkCherry text-base font-normal'>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                  
                ))}
                <span className='text-orange underline underline-offset-2 text-base font-medium hover:cursor-pointer'>
                    Learn more
                </span>
            </ul>
        </section>
    );
}
