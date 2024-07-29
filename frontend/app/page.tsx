"use client"
import HeroVideo from '@/sections/HeroVideo';
import WhoWeAre from '@/sections/WhoWeAre';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div className='flex flex-col items-center'>
                <HeroVideo />
                <WhoWeAre />
            </div>
        </main>
    );
}
