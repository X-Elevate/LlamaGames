

import Image from 'next/image';

export default function WhoWeAre() {
    return (
        <section className='relative flex flex-col md:flex-row items-center justify-center py-16 pl-0 pr-4 md:pl-0 md:pr-32'>
            <div className='flex-1 pr-4 md:pr-36'>
                <Image
                    src='/WhoWeAre_lamas.svg'
                    alt='Llama Characters'
                    width={591} // Adjust the width and height according to your needs
                    height={591}
                    layout='responsive'
                    objectFit='contain'
                />
            </div>
            <div className='relative flex-1 pt-20 pb-20 md:pt-56 md:pb-60 md:mt-0 md:ml-8 text-left'>
                <div className='absolute inset-0'>
                    <div className='before:content-[""] before:absolute before:bg-[#FFBF40] before:opacity-[0.10] before:rounded-full before:blur-lg before:w-[200px] before:h-[200px] before:top-[-40px] before:left-[-30px] sm:before:w-[300px] sm:before:h-[300px] sm:before:top-[-60px] sm:before:left-[-45px] md:before:w-[400px] md:before:h-[400px] md:before:top-[-70px] md:before:left-[-55px] lg:before:w-[470px] lg:before:h-[470px] lg:before:top-[-80px] lg:before:left-[-60px]'></div>
                </div>
                <h2 className='relative text-2xl text-cherry text-pink-500 mb-4 font-bold'>
                    Who we are
                </h2>
                <p className='relative text-sm text-darkCherry'>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem.
                </p>
            </div>
        </section>
    );
}
