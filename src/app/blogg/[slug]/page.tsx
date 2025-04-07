import { getBloggSlug } from "@/lib/actions/get-blogg-slug";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

type Params = Promise<{ slug: string }>;

const page = async ({ params }: { params: Params }) => {
  const data = await getBloggSlug((await params).slug);
  return (
    <div className="py-24 container-section">
      <div className="flex flex-col gap-14">
        <div className="relative h-[400px]">
          <Image
            src={data.content.image?.filename || ""}
            fill
            alt={data.name}
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="flex gap-14">
          <h1 className="-mt-4">{data.name}</h1>
          <span className="">{render(data?.content?.content)}</span>
        </div>
      </div>

      <Link href={"/blogg"}>
        <ArrowLeft className="fixed bottom-5 left-5 text-4xl w-12 h-12 z-10  rounded-full bg-[white]" />
      </Link>
    </div>
  );
};

export default page;
