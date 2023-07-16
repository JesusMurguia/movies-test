import { Cast } from "@/app/types/FetchTypes";
import Image from "next/image";
import React from "react";

const Cast = ({ cast }: { cast: Cast }) => {
  return (
    <div className="w-40 max-w-xs cursor-pointer overflow-hidden rounded-lg border bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <div className="flex flex-col">
        <Image
          src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
          alt={cast.name}
          height={0}
          width={192}
          className="h-48 w-full object-cover"
        />
        <div className="bg-white p-2 text-black">
          <p className="font-bold">{cast.name}</p>
          <p>{cast.character}</p>
        </div>
      </div>
    </div>
  );
};

export default Cast;
