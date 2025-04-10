import { getThemeSettings } from "@/lib/actions/get-theme-settings";
import { getTjansterSlug } from "@/lib/actions/get-tjanster-slug";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

type Params = Promise<{ slug: string }>;

const page = async ({ params }: { params: Params }) => {
  const data = await getTjansterSlug((await params).slug);
  const settings = await getThemeSettings();

  return (
    <>    <div className="py-24 max-w-[70%] mx-auto my-14">
      <div className="flex flex-col">
        <div className="flex gap-[5px] my-2 items-center">
          <Link href={"/"}>Hem</Link>
          /
          <Link href={"/tjanster"}>Tjänster</Link>
          /
          <Link href="">{data.name}</Link>
        </div>
        <div className="relative h-[50vh] mb-20">
          <Image
            src={data.content.image?.filename || ""}
            fill
            alt={data.name}
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center text-center gap-14">
          <h1 className="-mt-4">{data.name}</h1>
          <span className="flex flex-col gap-5">{render(data?.content?.content)}</span>
        </div>
      </div>

      <Link href={"/tjanster"}>
        <ArrowLeft className="fixed bottom-5 left-5 text-4xl w-12 h-12 z-10  rounded-full bg-[white]" />
      </Link>
    </div>

      <div className="relative h-[60vh] w-full my-10">
        <Image
          src={settings?.content?.image_tjanster?.filename || ""}
          fill
          alt={"Image"}
          quality={100}
          className="object-cover object-bottom"
        />
        <div className="text-white absolute h-full w-full flex flex-col justify-center items-center text-center bg-black/50">
          <div className="mx-auto text-center flex flex-col gap-5 max-w-[40%]">
            <h2 className="lg:max-w-[55%] mx-auto text-[37px]">{settings.content.cta_title}</h2>
            <span>{render(settings.content.cta_content)}</span>
            <div className="mt-5">
              <Link href={"/kontakt"} className="button-hover px-5 py-2 bg-[#f15a39] text-white rounded-full">{settings.content.cta_title_link}</Link>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default page;
