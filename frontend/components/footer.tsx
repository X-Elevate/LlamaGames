import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            className='bg-gradient-to-tr from-gradientFirstColor to-gradientSecondColor text-white py-8 px-4'
            style={{
                borderTopLeftRadius: '5rem',
                borderTopRightRadius: '5rem',
            }}
        >
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
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
                        width={150}
                        height={150}
                    />
                </div>

                <div className='flex space-x-4'>
                    <SocialIcon href='#' icon='linkedin' />
                    <SocialIcon href='#' icon='facebook' />
                    <SocialIcon href='#' icon='twitter' />
                    <SocialIcon href='#' icon='instagram' />
                </div>
            </div>

            <div className='border-t border-purple-800 mt-8 pt-4 text-center text-sm'>
                <p>© Copyright 2024 LLama Games / All rights reserved.</p>
                <div className='mt-2'>
                    <Link href='/terms' className='hover:underline mr-4'>
                        Terms
                    </Link>
                    <Link href='/privacy' className='hover:underline'>
                        Privacy policy
                    </Link>
                </div>
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
