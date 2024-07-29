'use client';

import WhoWeAre from '@/components/sections/WhoWeAre';
import ProudBulgarians from '../components/sections/ProudBulgarians';
import HeroVideo from '@/components/sections/HeroVideo';
import Sertificates from '@/components/sections/Sertificates';
import Slogan from '@/components/sections/Slogan';
import LatestGames from '@/components/sections/LatestGames';
import FAQ from '@/components/sections/FAQ';
import OurPartners from '@/components/sections/OurPartners';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>
            <div className='flex flex-col items-center gap-24 pb-10 w-full'>
                <HeroVideo />
                <WhoWeAre />
                <ProudBulgarians />
                <LatestGames />
                <Sertificates />
                <Slogan />
                <OurPartners />
                <FAQ />
            </div>
        </main>
    );
}
