"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Link from 'next/link';

export default function Header() {
    // State to manage the visibility of the sheet
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    // Function to handle closing the sheet
    const closeSheet = () => setIsSheetOpen(false);

    return (
        <header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/50 px-[9%] flex items-center justify-between rounded-bl-[32px] w-full overflow-hidden'>
            <div className='flex items-center'>
                <div className='h-full pt-4'>
                    <img
                        src='/header-logo.svg'
                        alt='Logo'
                        className='h-full w-full object-cover'
                    />
                </div>
                <div className='ml-2'>
                    <h1 className='text-lg md:text-xl'>
                        <span className='font-extrabold text-xl'>LLAMA</span>
                        <span className='font-medium'>GAMES</span>
                    </h1>

                    <p className='text-xs md:text-sm text-yellow-600'>
                        Technology
                    </p>
                </div>
            </div>
            <nav className='hidden md:flex gap-4 text-cherry text-base font-medium'>
                <a href='#about-us' className='hover:underline'>
                    About us
                </a>
                <a href='#games' className='hover:underline'>
                    Games
                </a>
                <a href='#licensing' className='hover:underline'>
                    Licensing
                </a>
                <a href='#milestones' className='hover:underline'>
                    Milestones
                </a>
                <a href='#mission' className='hover:underline'>
                    Mission
                </a>
            </nav>
            <div className='md:hidden'>
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant='ghost' size='icon'>
                            <MenuIcon className='h-6 w-6' />
                            <span className='sr-only'>
                                Toggle navigation menu
                            </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='left'>
                        <nav className='grid gap-4 py-6'>
                            <Link
                                href='#about-us'
                                className='flex w-full items-center py-2 text-lg font-semibold'
                                prefetch={false}
                                onClick={closeSheet}
                            >
                                About us
                            </Link>
                            <Link
                                href='#games'
                                className='flex w-full items-center py-2 text-lg font-semibold'
                                prefetch={false}
                                onClick={closeSheet}
                            >
                                Games
                            </Link>
                            <Link
                                href='#licensing'
                                className='flex w-full items-center py-2 text-lg font-semibold'
                                prefetch={false}
                                onClick={closeSheet}
                            >
                                Licensing
                            </Link>
                            <Link
                                href='#milestones'
                                className='flex w-full items-center py-2 text-lg font-semibold'
                                prefetch={false}
                                onClick={closeSheet}
                            >
                                Milestones
                            </Link>
                            <Link
                                href='#mission'
                                className='flex w-full items-center py-2 text-lg font-semibold'
                                prefetch={false}
                                onClick={closeSheet}
                            >
                                Mission
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}

function MenuIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <line x1='4' x2='20' y1='12' y2='12' />
            <line x1='4' x2='20' y1='6' y2='6' />
            <line x1='4' x2='20' y1='18' y2='18' />
        </svg>
    );
}
