import { NavBar } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popular Movies — The Movie Database",
  description:
    "Search through our popular movies list — The Movie Database is a demo web application by Jesus Murguia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
