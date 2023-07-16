import type { Cast as CastType } from "@/app/types/FetchTypes";
import React from "react";
import Cast from "./Cast";

function CreditsCarousel({ title, cast }: { title: string; cast: CastType[] }) {
  return (
    <section className="mx-auto p-5 lg:max-w-7xl">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="hide-scroll-bar flex overflow-x-scroll py-5">
        <div className="flex flex-nowrap gap-4">
          {cast.map((c) => (
            <Cast key={c.cast_id} cast={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CreditsCarousel;
