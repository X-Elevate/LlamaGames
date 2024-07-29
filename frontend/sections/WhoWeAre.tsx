import { useRef, useEffect } from 'react';

export default function WhoWeAre() {
    const videoRef = useRef<HTMLVideoElement>(null);


    return (
        <section className='relative w-full overflow-hidden'>
            <div className='flex w-full'>
                <img src="/WhoWeAre_lamas.svg" alt="lamas baner" />

                <div>
                    <h2>Who we are</h2>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                </div>
            </div>
        </section>
    );
}
