import { Card } from "@/components/ui/blogg/card";
import { CardWrapper } from "@/components/ui/blogg/card-wrapper";
import { getBlogg } from "@/lib/actions/get-blogg";
import { apiPlugin, storyblokInit } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

const page = async () => {
  const data = await getBlogg();
  return (
    <div className="container-section py-44">
      <CardWrapper key={1}>
        {data.map((item: any, i: number) => {
          return (
            <Card
              title={item.name}
              uuid={i}
              link={item.full_slug}
              content={item.content.content}
              image={item.content?.image?.filename}
            />
          );
        })}
      </CardWrapper>
    </div>
  );
};

export default page;
