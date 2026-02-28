import Image from "next/image";
import Link from "next/link";

function ArticleSection({
  title,
  description,
  ImageUrl,
  ArticleUrl,
}: {
  title: string;
  description: string;
  ImageUrl: string;
  ArticleUrl: string;
}) {
  return (
    <article className="w-full bg-[#1c1a2e] p-8">
      <Link
        className="container mx-auto py-8 grid grid-cols-1 gap-4 relative items-center sm:grid-cols-2 group cursor-pointer"
        href={ArticleUrl}
      >
        <div className="flex flex-col gap-4 items-center">
          <h2 className="w-full text-center text-[#f5f5f5] text-xl font-medium group-hover:underline underline-offset-4  transition-colors line-clamp-2 group-hover:text-[#fafafa]">
            {title}
          </h2>
          <h3 className="w-full text-center text-[#f5f5f5] text-md font-normal col-span-1 sm:col-span-2 hidden lg:block">
            {description}
          </h3>
        </div>
        <div className="shrink-0 col-span-1">
          <div className="relative w-full aspect-video">
            <Image
              src={ImageUrl}
              alt={title}
              fill
              className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
        <h3 className="w-full text-center text-[#f5f5f5] text-md font-normal col-span-1 sm:col-span-2 lg:hidden">
          {description}
        </h3>
      </Link>
    </article>
  );
}

export default ArticleSection;
