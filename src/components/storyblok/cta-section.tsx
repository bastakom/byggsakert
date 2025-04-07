import { LinkTypes } from "@/types/IfLinkInterface";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const CTA = ({ blok }: any) => {
  return (
    <div className={`${blok.full_width ? "mt-10" : "container-section"}`}>
      <div className="h-[500px] w-full relative">
        <Image
          src={blok.image?.filename || ""}
          alt={blok.title}
          fill
          className="object-cover"
        />
        {blok.opacity_color.color && (
          <div
            className="absolute w-full h-full opacity-20"
            style={{ background: `${blok.opacity_color.color}` }}
          />
        )}
        <div
          className={`absolute w-full h-full flex justify-center items-center z-10 gap-5`}
          style={{
            color: `${
              blok.text_color.color ? blok.text_color.color : "primary"
            }`,
          }}
        >
          <div className="flex flex-col gap-5 text-center lg:max-w-[50%]">
            <h4>{blok.sub_title}</h4>
            <h2>{blok.title}</h2>
            <div>
              {blok.buttons.map((item: LinkTypes) => (
                <Button
                  key={item._uid}
                  variant={`${item.secondary_color ? "secondary" : "default"}`}
                >
                  <Link href={item.link.cached_url}>{item.title}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
