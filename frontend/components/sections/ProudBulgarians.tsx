"use client";

export default function ProudBulgarians() {
  return (
    <section className="w-3/4 flex items-center justify-between pt-0 relative">
      <div className="w-1/2 relative z-10">
        <div className="absolute inset-0 ">
          <div className='before:content-[""] before:absolute before:bg-[#FFBF40] before:opacity-[12%] before:rounded-full before:blur-lg before:w-[150px] before:h-[150px] before:top-[-20px] before:left-[-30px] sm:before:w-[200px] sm:before:h-[200px] sm:before:top-[-30px] sm:before:left-[-45px] md:before:w-[250px] md:before:h-[250px] md:before:top-[-40px] md:before:left-[-55px] lg:before:w-[470px] lg:before:h-[470px] lg:before:top-[0px] lg:before:left-[-60px]'></div>
        </div>
        <h2 className="relative text-2xl font-bold text-cherry pb-6">Proud Bulgarians</h2>
        <p className="relative text-sm text-darkCherry w-full">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </p>
      </div>

      <div className="w-[30%] h-full">
        <img
          src="ProudBulgariansGlobe.svg"
          alt="lamas banner"
          className="w-full aspect-square object-cover"
        />
      </div>
    </section>
  );
}
