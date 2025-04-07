import type { Metadata } from "next";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { Header } from "@/components/ui/header/header";
import "./globals.scss";
import "./theme.scss";
import "./fonts.scss";
import { Footer } from "@/components/ui/footer/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: "no-cache",
  });
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="sv">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
