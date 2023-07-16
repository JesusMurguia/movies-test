import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now Playing Rated Movies — The Movie Database",
  description:
    "Search through our now playing movies list — The Movie Database is a demo web application by Jesus Murguia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
