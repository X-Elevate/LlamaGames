"use client";

export default function ProudBulgarians() {
  return (
    <section className="w-3/4 flex">
      <div className="w-5/12">
        <h2 className="text-2xl text-cherry">Proud Bulgarians</h2>
        <p className="text-sm text-darkCherry w-full">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </p>
      </div>

      <div className="w-2/5 h-full">
        <img
          src="ProudBulgariansGlobe.svg"
          alt="lamas banner"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
