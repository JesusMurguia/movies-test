import React from "react";
import SortFilter from "./SortFilter";
import WhereToWatchFilter from "./WhereToWatchFilter";
import Filters from "./Filters";

function MovieFilter() {
  return (
    <section className="flex w-full flex-col gap-4 md:w-60">
      <SortFilter />
      <WhereToWatchFilter />
      <Filters />
      <button
        disabled
        className="w-full rounded-3xl bg-gray-200 p-2 font-semibold text-gray-500"
      >
        Search
      </button>
    </section>
  );
}

export default MovieFilter;
