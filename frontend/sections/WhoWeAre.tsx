export default function WhoWeAre() {
  return (
    <section className="w-full flex justify-between items-center ">
    
        <div className="w-2/5"> 
          <img
            src="/WhoWeAre_lamas.svg"
            alt="lamas banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-2/5">
          <h2 className="text-2xl text-cherry">Who we are</h2>
          <p className="text-sm text-darkCherry w-full"> 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
        </div>
 
    </section>
  );
}
