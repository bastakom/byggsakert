"use client";

import { LinkTypes } from "@/types/IfLinkInterface";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { Socials } from "../socials/socials";

export const FooterSection = ({ props }: any) => {
  return (
    <footer style={{ background: `${props.bg_footer?.color}` }}>
      <div className=" flex justify-center lg:block lg:w-[90%] lg:ml-auto pt-20">
        <Image
          src={props.logo.filename}
          alt={props.site_title}
          width={250}
          height={150}
          className="lg:-mt-4"
        />
      </div>
      <div
        className={`flex justify-center mx-auto text-center lg:text-left pb-10 lg:pb-20  pt-4 relative ${
          props.footer_full_width ? "w-full" : "container-section"
        }`}
        style={{ background: `${props.bg_footer?.color}` }}
      >
        <div className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-4 gap-0 lg:gap-16 w-full lg:w-[90%] lg: ml-auto lg:pt-14 ">
          <div>
            {/* <Image
            src={props.logo.filename}
            alt={props.site_title}
            width={250}
            height={150}
            className="lg:-mt-4"
          /> */}
            <div className="flex flex-col gap-5 mt-10 lg:mt-0">
              <span className="render-content">{render(props.adress)}</span>
              <div className="flex flex-col">
                <Link href={`mailto:${props.mail}`}>{props.mail}</Link>
                <Link href={`tel:${props.phone}`}>{props.phone}</Link>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative w-[140px] h-[140px]">
              <Image
                src={props.footer_logo.filename}
                alt={props.footer_logo.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col mt-4 lg:mt-0">
            <div>{render(props.info_text)}</div>
          </div>

          <div className="flex flex-col gap-4 items-center mt-10 lg:mt-0">
            {props.footer_menu.map((item: LinkTypes) => (
              <Link key={item._uid} href={item.link.cached_url}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-10 lg:mt-0">
            <Socials props={props.fields} color={props.header_text_color} />
          </div>
        </div>
      </div>
    </footer>
  );
};
