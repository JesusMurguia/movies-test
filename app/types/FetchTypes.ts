export type FetchMoviesByTypeProps = {
    page?: number,
    type: Routes
}

export type FetchMovieByIdProps = {
  id: number,
}

export enum Routes {
    POPULAR = "popular",
    NOW_PLAYING = "now_playing",
    TOP_RATED = "top_rated",
    UPCOMING = "upcoming"
}

export type MoviesJSON = {
    page: number,
    results: Movie[]
    total_pages: number,
    total_results: number
  }

  export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genres?: Genre[];
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: "Released";
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: number;
  order: number;
}

export interface Language {
  iso_639_1: string,
  english_name: string,
  name: string
}

export interface Genre {
  id: number,
  name: string
}

export interface Keyword {
  id: number,
  name: string
}