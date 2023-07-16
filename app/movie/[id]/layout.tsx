import type { Metadata, ResolvingMetadata } from "next";
import { Movie, MovieDetails } from "@/app/types/FetchTypes";
import { fetchMovieDetails } from "@/app/utils";
import { MovieDetailsNavBar, NavBar } from "@/components";

type Props = {
  params: { id: number };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  try {
    const movie: MovieDetails = await fetchMovieDetails({ id: params.id });
    return {
      title: movie.title + " — The Movie Database",
      description: movie.overview,
    };
  } catch (error) {
    return { title: "404 — The Movie Database" };
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MovieDetailsNavBar />
      {children}
    </>
  );
}
