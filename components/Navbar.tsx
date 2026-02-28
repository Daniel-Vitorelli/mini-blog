import Link from "next/link";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

function Navbar() {
  return ( 
    <nav className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 box-border">
      <div className="max-w-7xl mx-auto w-full flex h-14 items-center justify-between px-6">
        <Link
          href='/'
        >
          BlogSimples
        </Link>
        <AnimatedThemeToggler />
      </div>
    </nav>
   );
}

export default Navbar;