import type { Metadata } from 'next';
import { DM_Mono as FontMono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';


const fontMono = FontMono({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-mono',
});

export const metadata: Metadata = {
    title: 'Llama Games',
    description: 'Llama Games is a game development studio.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={cn(
                    'min-h-screen bg-background font-mono antialiased',
                    fontMono.variable
                )}
            >
                <Header />
                <main className='flex min-h-screen flex-col pt-[64px] md:pt-[72px]'>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
