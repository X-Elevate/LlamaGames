"use client"
import HeroVideo from '@/app/sections/HeroVideo';

import WhoWeAre from '@/app/sections/WhoWeAre';
import ProudBulgarians from './sections/ProudBulgarians';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>
            <div className='flex flex-col items-center gap-[10%] py-10'>
              
                <WhoWeAre />
                <ProudBulgarians />
            </div>
        </main>
    );
}
