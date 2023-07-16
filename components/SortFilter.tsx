import React from "react";
import Accordion from "./Accordion";

const SortFilter = () => {
  return (
    <Accordion title="Sort">
      <div className="flex flex-col gap-2 p-3">
        <span className="font-thin">Sort Results By</span>
        <select
          title="Sort Results By"
          className="rounded border-r-8 bg-neutral-200 px-2 py-1.5 text-sm font-normal"
          name="sort"
        >
          <option value="1">Popularity Descending</option>
          <option value="2">Popularity Ascending</option>
          <option value="3">Rating Descending</option>
          <option value="4">Rating Ascending</option>
          <option value="5">Release Date Descending</option>
          <option value="6">Release Date Ascending</option>
          <option value="7">Title (A-Z)</option>
          <option value="8">Title (Z-A)</option>
        </select>
      </div>
    </Accordion>
  );
};

export default SortFilter;
