import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const textColor = '#FFF4D6';
    return (
        <footer
            className='bg-gradient-to-tr from-gradientFirstColor to-gradientSecondColor py-8 px-4 h-[5%]'
            style={{
                borderTopLeftRadius: '5rem',
                borderTopRightRadius: '5rem',
                color: textColor,
            }}
        >
            <div className='container ml-32 flex flex-col md:flex-row justify-between items-center'>
                <div className='grid grid-cols-2 gap-x-16 gap-y-2 mb-6 md:mb-0'>
                    <Link href='/about' className='hover:underline '>
                        About us
                    </Link>
                    <Link href='/milestones' className='hover:underline'>
                        Milestones
                    </Link>
                    <Link href='/games' className='hover:underline'>
                        Games
                    </Link>
                    <Link href='/mission' className='hover:underline'>
                        Mission
                    </Link>
                    <Link href='/licensing' className='hover:underline'>
                        Licensing
                    </Link>
                    <Link href='/careers' className='hover:underline'>
                        Careers
                    </Link>
                </div>

                <div className='mb-6 md:mb-0'>
                    <Image
                        src='/footer-logo.svg'
                        alt='LlamaGames Logo'
                        width={120}
                        height={120}
                    />
                </div>

                <div className='flex space-x-4'>
                    <SocialIcon href='#' icon='linkedin' />
                    <SocialIcon href='#' icon='facebook' />
                    <SocialIcon href='#' icon='twitter' />
                    <SocialIcon href='#' icon='instagram' />
                </div>
            </div>

            <div className='border-t border-purple-800 mt-8 pt-4 text-center text-xs'>
                <p>© Copyright 2024 LLama Games / All rights reserved.</p>
                <Link href='/terms' className='hover:underline mr-4'>
                    Terms
                </Link>
                <Link href='/privacy' className='hover:underline'>
                    Privacy policy
                </Link>
            </div>
        </footer>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
    return (
        <Link href={href}>
            <Image
                src={`/${icon}-icon.svg`}
                alt={`${icon} icon`}
                width={48}
                height={48}
            />
        </Link>
    );
}
