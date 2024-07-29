import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm bg-white/80 px-[9%] flex items-center justify-between rounded-bl-3xl">
      <div className="flex items-center">
        <div className="h-full pt-4">
          <img
            src="/logo.svg"
            alt="Logo"
            width={38}
            height={38}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ml-2">
          <h1 className="text-lg md:text-xl font-bold">LLAMAGAMES</h1>
          <p className="text-xs md:text-sm text-yellow-600">Technology</p>
        </div>
      </div>
      <nav className="hidden md:flex gap-4 text-pink-700">
        <a href="#" className="hover:underline">
          About us
        </a>
        <a href="#" className="hover:underline">
          Games
        </a>
        <a href="#" className="hover:underline">
          Licensing
        </a>
        <a href="#" className="hover:underline">
          Milestones
        </a>
        <a href="#" className="hover:underline">
          Mission
        </a>
      </nav>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-4 py-6">
              <Link
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                About us
              </Link>
              <Link
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Games
              </Link>
              <Link
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Licensing
              </Link>
              <Link
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Milestones
              </Link>
              <Link
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
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
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
