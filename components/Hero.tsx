import { FlickeringGrid } from "./ui/flickering-grid";
import { ReactNode } from "react"


function Hero({
  children,
  title,
  description
}: { 
  children?: ReactNode
  title: string;
  description: string 
}) {
  return (
    <div className="bg-background w-full relative">
      <div className="absolute top-0 left-0 z-0 w-full h-50 mask-[linear-gradient(to_top,transparent_25%,black_95%)]">
        <FlickeringGrid
          className="absolute top-0 left-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.05}
        />
      </div>
      <div className="p-6 border-b border-border flex flex-col gap-6 min-h-62.5 justify-center relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-2">
            {children}
            <h1 className="font-medium text-4xl md:text-5xl tracking-tighter">
              {title}
            </h1>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
