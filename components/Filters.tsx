import React from "react";
import Accordion from "./Accordion";
import Image from "next/image";

const Filters = () => {
  return (
    <Accordion title="Filters" open={true}>
      <ShowMeFilter />
      <hr />
      <AvailabilitiesFilter />
      <hr />
      <ReleaseDatesFilter />
      <hr />
      <GenresFilter />
      <hr />
      <CertificationFilter />
      <hr />
      <LanguageFilter />
      <hr />
      <UserScoreFilter />
      <hr />
      <MinimumUserVotesFilter />
      <hr />
      <RuntimeFilter />
      <hr />
      <KeywordsFilter />
    </Accordion>
  );
};

const ShowMeFilter = () => {
  return (
    <div className="flex flex-col gap-2 p-3">
      <fieldset className="flex flex-col justify-start gap-2">
        <legend className="mb-2 flex items-center font-thin">
          Countries
          <span className="ml-2">
            <Image
              src="/questionmark.svg"
              height="16"
              width="16"
              alt="more information"
            />
          </span>
        </legend>

        <label>
          <input
            className="accent-cyan-600"
            type="radio"
            defaultChecked
            name="everything"
          />
          <span className="ml-1">Everything</span>
        </label>
        <label>
          <input type="radio" disabled name="haventseen" />
          <span className="ml-1 text-gray-400">Movies I Haven&apos;t Seen</span>
        </label>
        <label>
          <input type="radio" disabled name="haveseen" />
          <span className="ml-1 text-gray-400">Movies I Haven Seen</span>
        </label>
      </fieldset>
    </div>
  );
};
const AvailabilitiesFilter = () => {
  return (
    <div className="flex flex-col gap-2 p-3">
      <span className="font-thin">Availabilities</span>
      <label>
        <input
          className="accent-cyan-600"
          type="checkbox"
          defaultChecked
          name="allavailabilities"
        />
        <span className="ml-1 text-black">Search all availabilities?</span>
      </label>
    </div>
  );
};

const ReleaseDatesFilter = () => {
  return (
    <div className="flex flex-col gap-2 p-3">
      <span className="font-thin">Release Dates</span>
      <label>
        <input
          className="accent-cyan-600"
          type="checkbox"
          defaultChecked
          name="allreleases"
        />
        <span className="ml-1 text-black">Search all releases?</span>
      </label>
      <label className="flex items-center justify-between">
        <span className="mr-4 text-gray-400">from</span>
        <input
          className="rounded border p-1 "
          type="date"
          defaultChecked
          name="datefrom"
        />
      </label>
      <label className="flex items-center justify-between">
        <span className="mr-4 text-gray-400">to</span>
        <input
          className="rounded border p-1"
          type="date"
          defaultValue=""
          defaultChecked
          name="dateto"
        />
      </label>
    </div>
  );
};

const GenresFilter = () => {
  const genres: string[] = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "TV Movie",
    "Thriller",
    "War",
    "Western",
  ];

  return (
    <div className="flex flex-col gap-2 p-3">
      <span className="font-thin">Genres</span>
      <ul className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <li
            key={genre}
            className="hover:border-bg-sky-500 inline-flex cursor-pointer rounded-2xl border border-gray-400 px-2 py-1 text-sm hover:bg-sky-500 hover:text-slate-100"
          >
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CertificationFilter = () => {
  return (
    <div className="flex flex-col gap-2 p-3">
      <span className="font-thin">Certification</span>
    </div>
  );
};

const LanguageFilter = () => {
  return (
    <div className="flex flex-col gap-2 p-3">
      <div className="flex flex-col justify-start gap-2">
        <div className="mb-2 flex items-center font-thin">
          Language
          <span className="ml-2">
            <Image
              src="/questionmark.svg"
              height="16"
              width="16"
              alt="more information"
            />
          </span>
        </div>

        <select
          className="rounded border-r-8 bg-neutral-200 px-2 py-1.5 text-sm font-normal"
          name="languages"
          title="Language"
        >
          <option value="1">English (485,698)</option>
          <option value="2">French (55,727)</option>
          <option value="3">German (47,361)</option>
        </select>
      </div>
    </div>
  );
};

const UserScoreFilter = () => {
  return (
    <div className="flex flex-col gap-2 p-3">
      <span className="font-thin">User Score</span>
      <input
        type="range"
        className="accent-sky-600"
        name="userscore"
        title="user score"
      />
    </div>
  );
};

const MinimumUserVotesFilter = () => {
  return (
    <div className="flex flex-col gap-2 p-3">
      <span className="font-thin">Minimum User Votes</span>
      <input
        type="range"
        className="accent-sky-600"
        name="minimumuservotes"
        title="minimumuservotes"
      />
    </div>
  );
};

const RuntimeFilter = () => {
  return (
    <div className="flex flex-col gap-2 p-3">
      <span className="font-thin">Runtime</span>
      <input
        type="range"
        className="accent-sky-600"
        name="runtime"
        title="runtime"
      />
    </div>
  );
};

const KeywordsFilter = () => {
  return (
    <div className="flex flex-col gap-2 p-3">
      <span className="font-thin">Keywords</span>
      <input
        title="keywords"
        type="text"
        placeholder="Filter by keywords.."
        name="keywords"
        className="rounded border p-1  placeholder:pl-2 placeholder:text-sm"
      />
    </div>
  );
};

export default Filters;
