"use client";

export default function Slogan() {
  return (
    <section className="w-[80%] flex flex-row gap-4 items-center justify-between">
      <div className="w-1/2 relative">

        <h2 className="relative text-[32px] font-medium text-cherry pb-6 w-[85%]">
          Bringing the casino to your screen
        </h2>
        <p className="relative text-sm text-darkCherry w-full">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </p>
      </div>

      <div className="w-[30%] h-full">
        <img
          src="slogan.svg"
          alt="lamas banner"
          className="w-full aspect-square "
        />
      </div>
    </section>
  );
}
