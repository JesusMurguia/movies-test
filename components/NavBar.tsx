"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="z-10 w-full bg-bg-blue text-slate-200">
      <div className="mx-auto flex justify-between p-5 lg:max-w-7xl">
        {/* hamburger button */}
        <button
          onClick={() => setNavbar(!navbar)}
          className="md:hidden"
          title="menu button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <nav className="items-center md:flex">
          {/* logo */}
          <div className="flex items-center justify-between md:pr-8">
            <Link href="/">
              <Image
                src="/logo.png"
                width={100}
                height={0}
                alt="logo"
                className="hidden h-auto w-full md:flex"
              />
              <Image
                src="/logo_mobile.png"
                width={50}
                height={50}
                priority
                alt="logo"
                className="flex h-auto w-full md:hidden"
              />
            </Link>
          </div>
          {/* nav links */}
          <ul className="hidden md:flex md:gap-4 lg:gap-8">
            <li className="group relative flex">
              <span className="cursor-pointer font-semibold">Movies</span>
              <ul className="absolute top-6 z-10 w-52 origin-top scale-0 transform rounded bg-white p-2 text-lg text-black shadow-lg transition duration-150 ease-in-out group-hover:scale-100">
                <li className="mx-1 rounded-sm leading-8 hover:bg-slate-50">
                  <Link href="/movie">Popular</Link>
                </li>
                <li className="mx-1 rounded-sm leading-8 hover:bg-slate-50">
                  <Link href="/movie/now-playing">Now Playing</Link>
                </li>
                <li className="mx-1 rounded-sm leading-8 hover:bg-slate-50">
                  <Link href="/movie/upcoming">Upcoming</Link>
                </li>
                <li className="mx-1 rounded-sm leading-8 hover:bg-slate-50">
                  <Link href="/movie/top-rated">Top rated</Link>
                </li>
              </ul>
            </li>
            <li className="group relative flex">
              <span className="cursor-pointer font-semibold">TV Shows</span>
              <ul className="absolute top-6 z-10 w-52 origin-top scale-0 transform rounded bg-white p-2 text-lg text-black shadow-lg transition duration-150 ease-in-out group-hover:scale-100">
                <li className="mx-1 rounded-sm leading-8 hover:bg-slate-50">
                  <Link href="/">Popular</Link>
                </li>
                <li className="mx-1 rounded-sm leading-8 hover:bg-slate-50">
                  <Link href="/">Airing Today</Link>
                </li>
                <li className="mx-1 rounded-sm leading-8 hover:bg-slate-50">
                  <Link href="/">On TV</Link>
                </li>
                <li className="mx-1 rounded-sm leading-8 hover:bg-slate-50">
                  <Link href="/">Top rated</Link>
                </li>
              </ul>
            </li>
            <li className="group relative flex">
              <span className="cursor-pointer font-semibold">People</span>
              <ul className="absolute top-6 z-10 w-52 origin-top scale-0 transform rounded bg-white p-2 text-lg text-black shadow-lg transition duration-150 ease-in-out group-hover:scale-100">
                <li className="mx-1 rounded-sm leading-8 hover:bg-slate-50">
                  <Link href="/">Popular people</Link>
                </li>
              </ul>
            </li>
            <li className="group relative flex">
              <span className="cursor-pointer font-semibold">More</span>
              <ul className="absolute top-6 z-10 w-52 origin-top scale-0 transform rounded bg-white p-2 text-lg text-black shadow-lg transition duration-150 ease-in-out group-hover:scale-100">
                <li className="mx-1 rounded-sm leading-8 hover:bg-slate-50">
                  <Link href="/">Discussions</Link>
                </li>
                <li className="mx-1 rounded-sm leading-8 hover:bg-slate-50">
                  <Link href="/">Leaderboard</Link>
                </li>
                <li className="mx-1 rounded-sm leading-8 hover:bg-slate-50">
                  <Link href="/">Support</Link>
                </li>
                <li className="mx-1 rounded-sm leading-8 hover:bg-slate-50">
                  <Link href="/">API</Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* mobile menu */}
          {navbar && (
            <div className="flex w-full justify-center transition md:hidden">
              <div className="absolute top-20 w-full backdrop-blur-lg">
                <ul className="h-screen bg-bg-blue pt-4 font-bold leading-9">
                  <li className="group mb-2">
                    <span className="block pl-11 text-xl">Movies</span>
                    <ul className="hidden w-full bg-bg-blue text-slate-200 group-hover:block">
                      <li className="text-sm font-normal leading-8">
                        <Link
                          href="/movie"
                          className="block pl-16"
                          onClick={() => setNavbar(!navbar)}
                        >
                          Popular
                        </Link>
                      </li>
                      <li className="text-sm font-normal leading-8">
                        <Link
                          href="/movie/now-playing"
                          onClick={() => setNavbar(!navbar)}
                          className="block pl-16"
                        >
                          Now Playing
                        </Link>
                      </li>
                      <li className="text-sm font-normal leading-8">
                        <Link
                          href="/movie/upcoming"
                          onClick={() => setNavbar(!navbar)}
                          className="block pl-16"
                        >
                          Upcoming
                        </Link>
                      </li>
                      <li className="text-sm font-normal leading-8">
                        <Link
                          href="/movie/top-rated"
                          onClick={() => setNavbar(!navbar)}
                          className="block pl-16"
                        >
                          Top Rated
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group mb-2">
                    <span className="block pl-11 text-xl">TV Shows</span>
                    <ul className="z-10 hidden w-full bg-bg-blue text-slate-200 group-hover:block">
                      <li className="text-sm font-normal leading-8">
                        <Link href="/" className="block pl-16">
                          Popular
                        </Link>
                      </li>
                      <li className="text-sm font-normal leading-8">
                        <Link href="/" className="block pl-16">
                          Top Rated
                        </Link>
                      </li>
                      <li className="text-sm font-normal leading-8">
                        <Link href="/" className="block pl-16">
                          On TV
                        </Link>
                      </li>
                      <li className="text-sm font-normal leading-8">
                        <Link href="/" className="block pl-16">
                          Airing Today
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group mb-2">
                    <span className="block pl-11 text-xl">People</span>
                    <ul className="hidden w-full bg-bg-blue text-slate-200 group-hover:block">
                      <li className="text-sm font-normal leading-8">
                        <Link href="/" className="block pl-16">
                          Popular People
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2 block pl-11 text-sm font-bold text-gray-400">
                    Contribution Bible
                  </li>
                  <li className="mt-1 block pl-11 text-sm font-bold text-gray-400">
                    Discussions
                  </li>
                  <li className="mt-1 block pl-11 text-sm font-bold text-gray-400">
                    Leaderboard
                  </li>
                  <li className="mt-1 block pl-11 text-sm font-bold text-gray-400">
                    API
                  </li>
                  <li className="mt-1 block pl-11 text-sm font-bold text-gray-400">
                    Support
                  </li>
                  <li className="mt-1 block pl-11 text-sm font-bold text-gray-400">
                    About
                  </li>
                  <li className="mt-1 block pl-11 text-sm font-bold text-gray-400">
                    Login
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>

        {/* menu */}
        <section className="flex items-center gap-8 md:gap-4">
          <button className="hidden md:block">
            <Image src="/plusIcon.svg" alt="add" width={20} height={20} />
          </button>
          <button className="hidden md:block">
            <span className="rounded border px-1 py-0.5 text-sm transition-colors hover:bg-slate-200 hover:text-black">
              EN
            </span>
          </button>
          <button className="hidden font-semibold md:block">Login</button>
          <button className="hidden font-semibold md:block">Join TMDB</button>
          <button className="block md:hidden">
            <Image src="/user.svg" alt="search" width={20} height={20} />
          </button>
          <button className="block">
            <Image src="/search.svg" alt="search" width={25} height={25} />
          </button>
        </section>
      </div>
    </header>
  );
};

export default NavBar;
