"use client"
import HeroVideo from '@/sections/HeroVideo';
import WhoWeAre from '@/sections/WhoWeAre';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>
            <div className='flex flex-col items-center gap-[10%] py-10'>
                <HeroVideo />
                <WhoWeAre />
            </div>
        </main>
    );
}
