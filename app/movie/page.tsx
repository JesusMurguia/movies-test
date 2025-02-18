export const runtime = 'edge';
import { MovieFilter, MoviesGrid } from "@/components";
import React, { Suspense } from "react";
import { fetchMoviesByType } from "../utils";
import { Routes, Movie } from "../types/FetchTypes";

export default async function page({
  searchParams,
}: {
  searchParams: { page?: number };
}) {
  const type = Routes.POPULAR;
  const page: number = searchParams.page ? searchParams.page : 1;
  const movies = (await fetchMoviesByType({ type, page })) as Movie[];
  return (
    <section className="mx-auto flex flex-col gap-6 p-5 lg:max-w-7xl">
      <h1 className="text-bold text-center text-3xl md:text-start">
        Popular Movies
      </h1>
      <div className="flex flex-col gap-8 max-md:items-center md:flex-row">
        <MovieFilter />
        <MoviesGrid movies={movies} page={page} />
      </div>
    </section>
  );
}
