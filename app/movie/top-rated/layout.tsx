import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Rated Movies — The Movie Database",
  description:
    "Search through our top rated movies list — The Movie Database is a demo web application by Jesus Murguia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
