import React from 'react';

const TimelineEvent = ({
    year,
    text,
    position,
}: {
    year: number;
    text: string;
    position: string;
}) => (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center'>
            {position === 'top' && (
                <div className='mb-2 text-center max-w-xs text-sm text-pink-600'>
                    {text}
                </div>
            )}
            <div className='relative flex flex-col items-center'>
                {position === 'bottom' && (
                    <div className='text-pink-600 font-bold mb-2'>{year}</div>
                )}

                <div className='w-4 h-4 bg-pink-600 rounded-full relative z-10'>
                    <div className='w-4 h-4 border-4 border-orange-100 rounded-full absolute top-[1/2] left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                    <div
                        className={`absolute w-0.5 bg-pink-600 h-16 left-1/2 transform -translate-x-1/2`}
                    ></div>
                </div>
                {position === 'top' && (
                    <div className='text-pink-600 font-bold mt-2'>{year}</div>
                )}
            </div>
            {position === 'bottom' && (
                <div className='mt-2 text-center max-w-xs text-sm text-pink-600'>
                    {text}
                </div>
            )}
        </div>
    </div>
);

const Timeline = () => {
    const events = [
        { year: 2019, text: 'Sunt nostrud amet sint do', position: 'bottom' },
        { year: 2020, text: 'Exercitation veniam consequat', position: 'top' },
        {
            year: 2021,
            text: 'Velit officia consequat duis',
            position: 'bottom',
        },
        { year: 2022, text: 'Ullamco est sit aliqua dolor', position: 'top' },
        {
            year: 2023,
            text: 'Amet minim mollit non deserunt',
            position: 'bottom',
        },
    ];

    return (
        <section className='bg-[#F0CDB7] p-8 rounded-b-[80px] w-full h-[32rem] flex items-center justify-center'>
            <div className='relative py-8 w-full'>
                <div className='absolute top-1/2 left-0 right-0 h-0.5 bg-darkCherry transform -translate-y-1/2'></div>
                <div className='flex justify-between relative z-10'>
                    {events.map((event, index) => (
                        <TimelineEvent
                            text={event.text}
                            year={event.year}
                            position={event.position}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
