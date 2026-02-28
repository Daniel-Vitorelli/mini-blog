import { CardContent } from "@/data/card-content";
import Image from "next/image";
import Link from "next/link";

function BlogCard({cardContent}: {cardContent: CardContent}) {
  return (
    <Link href={`/${cardContent.id}`} className={"group block relative border-r border-border"}>
      <div className="flex flex-col">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={cardContent.thumbnail}
            alt={cardContent.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-6 flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-card-foreground group-hover:underline underline-offset-4">
            {cardContent.title}
          </h3>
          <p className="text-muted-foreground text-sm">{cardContent.description}</p>
          <time className="block text-sm font-medium text-muted-foreground">
            {cardContent.date}
          </time>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
