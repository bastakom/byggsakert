"use client";

import Image from "next/image";
import Link from "next/link";

export const CardColumns = ({ blok }: any) => {
  return (
    <div className="container-section mx-auto">
      <div
        className={`grid xl:max-w-[80%] mx-auto gap-10 py-6 ${
          blok.columns === "4"
            ? "lg:grid-cols-4"
            : blok.columns === "3"
            ? "lg:grid-cols-3"
            : blok.columns === "2"
            ? "lg:grid-cols-2"
            : "lg:grid-cols-1"
        }`}
      >
        {blok.fields.map((item: any) => (
          <Link
            href="/"
            key={item._uid}
            className={`${
              blok.columns === "1"
                ? "flex flex-col gap-14 lg:gap-0 lg:flex-row-reverse items-center"
                : "flex flex-col gap-14"
            } border p-5 lg:p-14 transition-all duration-300 hover:shadow-lg`}
          >
            <div className="w-full h-[300px] relative">
              <Image
                src={item.image.filename || ""}
                fill
                alt={item.title}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">{item.title}</h3>
              <p className={`${blok.columns === "1" && "lg:max-w-[80%]"}`}>
                {item.content}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
