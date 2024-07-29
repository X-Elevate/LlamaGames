"use client";

export default function ProudBulgarians() {
  return (
    <section className="w-3/4 flex items-center justify-between">
      <div className="w-1/2">
        <h2 className="text-[32px] text-cherry">Proud Bulgarians</h2>
        <p className="text-[16px] text-darkCherry w-full">
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
