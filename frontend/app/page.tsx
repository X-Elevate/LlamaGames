'use client';

import WhoWeAre from '@/components/sections/WhoWeAre';
import ProudBulgarians from '../components/sections/ProudBulgarians';

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
