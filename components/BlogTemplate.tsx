import { ReactNode } from "react";
import Hero from "./Hero";
import { cardcontent, CardContent } from "@/data/card-content";
import { Button } from "./ui/button";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";
import Readmore from "./Readmore";
import { Home } from "lucide-react";

function BlogTemplate({ children, id }: { children: ReactNode; id: string }) {
  const data = cardcontent.find((item) => item.id === id);

  return (
    <div>
      <Hero title={data!.title} description={data!.description}>
        <div className="max-w-7xl mx-auto w-full p-6 flex flex-wrap items-center gap-3 gap-y-5 text-sm text-muted-foreground">
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outline" size="icon-sm" asChild>
                <Link href="/">
                  <Home />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Voltar a pagina principal</p>
            </TooltipContent>
          </Tooltip>
          <p>{data!.date}</p>
        </div>
      </Hero>
      <div className="flex flex-col border-x border-border relative max-w-7xl mx-auto px-4 md:px-0 z-10">
        <div className="relative w-full h-125 overflow-hidden">
          <Image
            src={data!.thumbnail}
            alt={data!.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <section className="p-6 blog-content">{children}</section>
        <div>
          <Readmore id={id} />
        </div>
      </div>
    </div>
  );
}

export default BlogTemplate;
