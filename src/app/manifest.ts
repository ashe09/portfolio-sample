import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "My Portfolio",
    short_name: "My Portfolio",
    description: "ポートフォリオサイトです。Webサイト、アプリケーション、グラフィックデザイン作品を掲載しています。",
    start_url: "/",
    display: "standalone",
    background_color: "#4a4a4a",
    theme_color: "#faeba0",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
