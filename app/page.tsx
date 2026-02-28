import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero";
import { AuroraText } from "@/components/ui/aurora-text";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Separator } from "@/components/ui/separator";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cardcontent } from "@/data/card-content";
import Link from "next/link";

function Home() {
  return (
    <>
      <Hero
        title="Blog Simples"
        description="Um modelo simples para um blog de tecnologia!"
      />
      <div className="max-w-7xl mx-auto w-full border-x border-border">
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative overflow-hidden"
          }
        >
          {cardcontent.map((item, index) => (
            <BlogCard cardContent={item} key={index} />
          ))}
        </div>
        <Separator />
        <div className="w-full p-6 relative">
          <div className="absolute top-0 left-0 z-0 w-full h-50 max-h-full mask-[linear-gradient(to_top,transparent_25%,black_95%)]">
            <FlickeringGrid
              className="absolute top-0 left-0 size-full"
              squareSize={4}
              gridGap={6}
              color="#6B7280"
              maxOpacity={0.2}
              flickerChance={0.05}
            />
          </div>
          <div className="flex flex-col gap-8 items-start">
            <h1 className="text-2xl font-medium">Conheça mais sobre o blog</h1>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/landing-page">
                  <ShinyButton>
                    <AuroraText>Landing Page</AuroraText>
                  </ShinyButton>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Você continuará neste site.</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
