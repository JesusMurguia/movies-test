import React from "react";

const MovieDetailsNavBar = () => {
  return (
    <header className="mx-auto flex justify-center pt-2 lg:max-w-7xl">
      <nav>
        <ul className="inline-flex  gap-4 md:gap-12">
          <li className="group relative inline-flex cursor-pointer border-b-4 border-sky-400">
            Overview <span className="mb-2 ml-1 mt-1 text-xs">▼</span>
            <ul className="absolute top-8 z-10 w-52 origin-top scale-0 transform rounded bg-white p-2 text-lg text-black shadow-lg transition duration-150 ease-in-out group-hover:scale-100">
              <li className="mx-2 cursor-pointer rounded-sm text-base leading-8 hover:bg-slate-50">
                Main
              </li>
              <li className="mx-2 cursor-pointer rounded-sm text-base leading-8 hover:bg-slate-50">
                Alternative Titles
              </li>
              <li className="mx-2 cursor-pointer rounded-sm text-base leading-8 hover:bg-slate-50">
                Cast & Crew
              </li>
              <li className="mx-2 cursor-pointer rounded-sm text-base leading-8 hover:bg-slate-50">
                Release Dates
              </li>
              <li className="mx-1 mb-6 cursor-pointer rounded-sm leading-8 hover:bg-slate-50">
                Translations
              </li>
              <li className="mx-2 cursor-pointer rounded-sm text-base leading-8 hover:bg-slate-50">
                Changes
              </li>
              <li className="mx-2 cursor-pointer rounded-sm text-base leading-8 hover:bg-slate-50">
                Report
              </li>
              <li className="mx-2 cursor-pointer rounded-sm text-base leading-8 hover:bg-slate-50">
                Edit
              </li>
            </ul>
          </li>
          <li className="group relative inline-flex cursor-pointer">
            Media <span className="mb-2 ml-1 mt-1 text-xs">▼</span>
            <ul className="absolute top-8 z-10 w-52  origin-top scale-0 transform rounded bg-white p-2 text-lg text-black shadow-lg transition duration-150 ease-in-out group-hover:scale-100">
              <li className="mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                Backdrops
                <span className="pr-2 text-sm text-gray-500">18</span>
              </li>
              <li className="mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                Logos
                <span className="pr-2 text-sm text-gray-500">19</span>
              </li>
              <li className="mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                Posters
                <span className="pr-2 text-sm text-gray-500">213</span>
              </li>
              <li className="group/inside relative mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                Videos
                <span className="ml-1 pr-2">🞂</span>
                <ul className="absolute right-[-119%] top-[-.5rem] z-10 w-52 origin-right scale-0 transform rounded bg-white p-2 text-lg text-black shadow-lg transition duration-150 ease-in-out group-hover/inside:scale-100">
                  <li className="mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                    Trailers
                    <span className="pr-2 text-sm text-gray-500">3</span>
                  </li>
                  <li className="mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                    Teasers
                    <span className="pr-2 text-sm text-gray-500">21</span>
                  </li>
                  <li className="mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                    Clips
                    <span className="pr-2 text-sm text-gray-500">5</span>
                  </li>
                  <li className="mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                    Behind the Scenes
                    <span className="pr-2 text-sm text-gray-500">2</span>
                  </li>
                  <li className="mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                    Featurettes
                    <span className="pr-2 text-sm text-gray-500">13</span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="group relative inline-flex cursor-pointer">
            Fandom <span className="mb-2 ml-1 mt-1 text-xs">▼</span>
            <ul className="absolute top-8 z-10 w-52  origin-top scale-0 transform rounded bg-white p-2 text-lg text-black shadow-lg transition duration-150 ease-in-out group-hover:scale-100">
              <li className="group/inside relative mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                Discussion
                <span className="ml-1 pr-2">🞂</span>
                <ul className="absolute right-[-119%] top-[-.5rem] z-10 w-52 origin-right scale-0 transform rounded bg-white p-2 text-lg text-black shadow-lg transition duration-150 ease-in-out group-hover/inside:scale-100">
                  <li className="mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                    Overview
                  </li>
                  <li className="mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                    General
                    <span className="pr-2 text-sm text-gray-500">5</span>
                  </li>
                  <li className="mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                    Content issues
                    <span className="pr-2 text-sm text-gray-500">0</span>
                  </li>
                </ul>
              </li>
              <li className="mx-2 flex cursor-pointer items-center justify-between rounded-sm text-base leading-8 hover:bg-slate-50">
                Reviews
              </li>
            </ul>
          </li>
          <li className="group relative inline-flex cursor-pointer">
            Share <span className="mb-2 ml-1 mt-1 text-xs">▼</span>
            <ul className="absolute top-8 z-10 w-52 origin-top scale-0 transform rounded bg-white p-2 text-lg text-black shadow-lg transition duration-150 ease-in-out group-hover:scale-100">
              <li className="mx-2 cursor-pointer rounded-sm text-base leading-8 hover:bg-slate-50">
                Share Link
              </li>
              <li className="mx-2 cursor-pointer rounded-sm text-base leading-8 hover:bg-slate-50">
                Facebook
              </li>
              <li className="mx-2 cursor-pointer rounded-sm text-base leading-8 hover:bg-slate-50">
                Tweet
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MovieDetailsNavBar;
