import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
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
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
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
