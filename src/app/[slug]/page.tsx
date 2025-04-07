import { getData } from "@/lib/actions/get-data";
import { getThemeSettings } from "@/lib/actions/get-theme-settings";
import { StoryblokStory } from "@storyblok/react/rsc";

type Params = Promise<{ slug: string }>;
const Page = async ({ params }: { params: Params }) => {
  const pathname = (await params).slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await getData(slugName);
  const settings = await getThemeSettings();

  return <StoryblokStory story={story} settings={settings} />;
};

export default Page;
