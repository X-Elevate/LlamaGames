"use client";

export default function ProudBulgarians() {
  return (
    <section className="w-3/4 flex items-center justify-between pt-0 relative">
      <div className="w-1/2 relative z-10">
        <div className="absolute inset-0 ">
          <div className='before:content-[""] before:absolute before:bg-[#FFBF40] before:opacity-[12%] before:rounded-full before:blur-lg before:w-[300px] before:h-[300px] before:top-[50px] before:left-[-50px] md:before:w-[400px] md:before:h-[400px] md:before:top-[30px] md:before:left-[-50px] '></div>
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
