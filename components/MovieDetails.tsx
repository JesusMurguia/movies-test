import React from "react";
import Image from "next/image";
import RadialProgressBar from "./RadialProgressBar";
import { Cast, MovieDetails } from "@/app/types/FetchTypes";
import { formatRuntime } from "@/app/utils";

const MovieDetails = ({
  movie,
  credits,
}: {
  movie: MovieDetails;
  credits: Cast[];
}) => {
  return (
    <section
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
      className="bg-bottom-left flex items-center justify-center bg-cover bg-center  bg-no-repeat bg-blend-darken"
    >
      <div className="w-full bg-neutral-950 bg-opacity-80">
        <div className="z-10 mx-auto p-5 lg:max-w-7xl">
          <div className=" grid grid-cols-8 gap-8 py-5">
            <div className="relative col-span-8 mx-auto md:col-span-2">
              <Image
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt="movie poster"
                width={342}
                height={500}
                className="rounded-md "
              ></Image>
            </div>
            <div className="col-span-8 flex flex-col text-white  md:col-span-6">
              <h1 className="text-2xl font-bold">
                {movie.title}
                <span className="ml-2 font-normal">
                  ({new Date(movie.release_date).getFullYear()})
                </span>
              </h1>
              <p className="text-sm font-normal">
                {new Date(movie.release_date).toLocaleDateString("en-GB")} (US)
                <span className="px-2 text-lg font-bold">·</span>
                <span>
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </span>
                <span className="px-2 text-lg font-bold">·</span>
                <span>{formatRuntime(movie.runtime)}</span>
              </p>
              <div className="hidden items-center gap-4 py-4 md:flex ">
                <RadialProgressBar
                  percentage={Math.floor(movie.vote_average * 10)}
                  size="big"
                />
                <p className="w-min font-bold leading-5 text-white">
                  User Score
                </p>
                <div className="flex gap-4">
                  <button className="rounded-full bg-sky-950 p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="h-5 w-5  p-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="rounded-full bg-sky-950 p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="h-5 w-5 p-1"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </button>
                  <button className="rounded-full bg-sky-950 p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="h-5 w-5 p-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="rounded-full bg-sky-950 p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="h-5 w-5 p-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center font-bold text-white">
                    <span className="pr-2 text-xl">🞂</span>Play Trailer
                  </button>
                </div>
              </div>
              <p className="text-base italic text-gray-300">{movie.tagline}</p>
              <h2 className="py-2 text-lg font-semibold">Overview</h2>
              <p>{movie.overview}</p>
              <ul className="grid grid-cols-3 gap-8 pt-8">
                {credits.map((credit) => (
                  <li key={credit.credit_id}>
                    <p className="font-bold">{credit.name}</p>
                    <p>{credit.character}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
