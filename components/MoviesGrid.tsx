"use client";
import Movie from "@/app/types/SimpleMovie";
import React from "react";
import MovieCard from "./MovieCard";
import Link from "next/link";
import { usePathname } from "next/navigation";
type MovieGridProps = {
  movies: Movie[];
  page: number;
};

const MoviesGrid = ({ movies, page }: MovieGridProps) => {
  const pathname = usePathname();

  if (!movies) return <p>There are no movies.</p>;
  return (
    <div className="flex flex-col gap-8">
      <section className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </section>

      <Link
        href={`${pathname}?page=${++page}`}
        className="w-full rounded-lg bg-sky-500 p-3 text-center text-2xl font-bold text-white"
      >
        Next Page
      </Link>
    </div>
  );
};

export default MoviesGrid;
