import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";

export const Filter = ({ blok }: any) => {
  const [filterItem, setFilterItem] = useState(blok.filter_fields[0]._uid);

  const handleFilter = (id: any) => {
    setFilterItem(id);
  };
  return (
    <main className="container-section py-20">
      <div className="text-center">
        <h3 className="text-[20px] uppercase mb-8 tracking-[4px]">
          {blok.title}
        </h3>
        <div className="w-[55%] mx-auto">{render(blok.content)}</div>
      </div>
      <ul className="flex gap-6 justify-center mt-10 border-b-[1px] border-[#e6e6e6]  w-[70%] mx-auto mb-20">
        {blok.filter_fields.map((item: any) => (
          <li
            className={`font-semibold text-[#282828] cursor-pointer pb-4 p-4 transition-all ${
              filterItem === item._uid
                ? "border-b-4 border-[#f15a39]"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => handleFilter(item._uid)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div>
        {blok.filter_fields.map(
          (item: any) =>
            filterItem === item._uid && (
              <div
                key={item._uid}
                className="grid grid-cols-2 w-[70%] mx-auto gap-10"
              >
                <div className=" flex flex-col justify-center w-[90%]">
                  <h4 className="text-xl font-bold !text-[34px] mb-6">
                    {item.title}
                  </h4>
                  <div className="mb-10">{render(item.content)}</div>
                  <Link href={item.button.cached_url} className="cta-button ">
                    {item.button_title}
                  </Link>
                </div>
                <div className="relative w-[100%] h-[500px]">
                  <Image
                    src={item.image.filename}
                    alt={item.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )
        )}
      </div>
    </main>
  );
};
