import { cardcontent } from "@/data/card-content";
import Image from "next/image";
import Link from "next/link";

function Readmore({ id }: { id: string }) {
  const othersBlogsPage = cardcontent.filter((item) => item.id !== id);

  return (
    <div className=" p-6 border-t border-border">
      <h2 className="text-2xl font-medium mb-8">Leia Mais</h2>
      <div className="flex flex-col gap-8">
        {othersBlogsPage.map((item, index) => (
          <Link
            href={`/${item.id}`}
            key={index}
            className="group grid grid-cols-1 lg:grid-cols-12 items-center gap-4 cursor-pointer"
          >
            <div className="shrink-0 col-span-1 lg:col-span-4">
              <div className="relative w-full aspect-video">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
            <div className="space-y-2 flex-1 col-span-1 lg:col-span-8">
                  <h3 className="text-lg group-hover:underline underline-offset-4 font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 group-hover:underline underline-offset-4">
                    {item.description}
                  </p>
                  <time className="block text-xs font-medium text-muted-foreground">
                    {item.date}
                  </time>
                </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Readmore;
