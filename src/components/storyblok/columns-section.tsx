"use client";

import { render } from "storyblok-rich-text-react-renderer";

export const Columns = ({ blok }: any) => {
  return (
    <div className="container-section p-container my-14">
      <div
        className={`grid gap-10 py-6 ${
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
          <div
            className={`flex flex-col gap-5 ${
              blok?.text_center && "text-center"
            }`}
            key={item._uid}
          >
            <h2>{item.title}</h2>
            <span
              className={`${blok.half_width && "lg:max-w-[50%]"} ${
                blok?.text_center && "mx-auto"
              }`}
            >
              {render(item.content)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
