import React from "react";
import { Movie } from "@/app/types/FetchTypes";
import Image from "next/image";
import RadialProgressBar from "./RadialProgressBar";
import { formatDate } from "@/app/utils";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div
      key={movie.id}
      className="flex flex-col overflow-hidden rounded-lg border shadow-xl"
    >
      <div className="relative">
        <Link href={`/movie/${movie.id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
            width={180}
            height={300}
            className="h-auto w-full object-cover"
          />
          <button className="absolute right-1 top-1" title="more options">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-slate-300 opacity-80 hover:fill-sky-400"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
        <div className="absolute bottom-[-5%] left-1 grid  place-items-center">
          <RadialProgressBar
            percentage={movie.vote_average * 10}
            size={"small"}
          />
        </div>
      </div>
      <div className="mt-3 p-2.5">
        <Link href={`/movie/${movie.id}`}>
          <div className="mb-0.5 text-sm font-bold hover:text-sky-600">
            {movie.title}
          </div>
        </Link>
        <p className="text-sm text-gray-400">
          {formatDate(movie.release_date)}
        </p>
      </div>
      <ul className="flex flex-wrap gap-2 p-2">
        {!!movie.genres &&
          movie.genres.map((genre) => (
            <li
              key={genre.id}
              className="cursor-pointer rounded-lg bg-gray-200 p-1 text-xs text-gray-600"
            >
              {genre.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
