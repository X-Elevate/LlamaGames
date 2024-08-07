

export default function WhoWeAre() {
    return (
        <section id="about-us" className='section-offset w-[90%] md:ml-0 md:mr-auto m-auto flex  gap-4 md:gap-10 items-center md:items-center justify-between'>
            <div className='w-[45%]'>
                <img
                    src='/WhoWeAre_lamas.svg'
                    alt='Llama Characters'
                    className="h-full w-full "
                />
            </div>
            <div className='w-full md:w-[45%] relative text-left'>
                <div className='absolute inset-0'>
                    <div className='before:content-[""] before:absolute before:bg-[#FFBF40] before:opacity-[12%] before:rounded-full before:blur-lg before:w-[200px] before:h-[200px] before:top-[-40px] before:left-[-30px] sm:before:w-[250px] sm:before:h-[250px] sm:before:top-[-140px] sm:before:left-[30px] md:before:w-[320px] md:before:h-[320px] md:before:top-[-200px] md:before:left-[30px] lg:before:w-[470px] lg:before:h-[470px] lg:before:top-[-350px] lg:before:left-[30px]'></div>
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
