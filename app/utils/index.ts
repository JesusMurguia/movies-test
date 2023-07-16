import { Cast, FetchMovieByIdProps, FetchMoviesByTypeProps, Genre, Keyword, Language, Movie, MovieDetails, MoviesJSON } from "../types/FetchTypes";
const options = {
  method: 'GET',
  headers: {accept: 'application/json'}
};
export async function fetchMoviesByType({page = 1, type }:FetchMoviesByTypeProps){
   
      const response = await fetch(`${process.env.API_URL}movie/${type}?page=${page}&api_key=${process.env.API_KEY}`, options);
      if(!response.ok){
        throw new Error("Could not load movies");
      }

      const data:MoviesJSON = await response.json();

      if(!data.results){
        throw new Error("There are no movies.");
      }

      const results: Movie[] = data.results;

      const allGenres = await fetchGenres();

      const movies:Movie[] = results.map(result => {
          const genres = allGenres.filter(g => result.genre_ids.includes(g.id))
          return {...result, genres};
      })

      return movies;
}

export async function fetchMovieDetails({ id }:FetchMovieByIdProps){
    
    const response = await fetch(`${process.env.API_URL}movie/${id}?api_key=${process.env.API_KEY}`, options);

    if(!response.ok){
      throw new Error("Could not load movie");
    }

    const movie:MovieDetails = await response.json();

    const languages = await fetchLanguages();

    movie.original_language = languages.filter(l => l.iso_639_1 === movie.original_language)[0]?.english_name;

    return movie;
}

export async function fetchMovieCredits({ id }:FetchMovieByIdProps){
    
    const response = await fetch(`${process.env.API_URL}movie/${id}/credits?api_key=${process.env.API_KEY}`, options);

    if(!response.ok){
      throw new Error("Could not load movie credits");
    }

    const data = await response.json();

      if(!data.cast){
        throw new Error("There are no movies.");
      }

      const cast: Cast[] = data.cast;
      return cast;
}

export async function fetchMovieKeywords({ id }:FetchMovieByIdProps){
    
  const response = await fetch(`${process.env.API_URL}movie/${id}/keywords?api_key=${process.env.API_KEY}`, options);

  if(!response.ok){
    throw new Error("Could not load movie keyword");
  }

  const data = await response.json();

    if(!data.keywords){
      throw new Error("There are no keywords.");
    }

    const keywords: Keyword[] = data.keywords;
    return keywords;
}

export async function fetchLanguages(){
    
  const response = await fetch(`${process.env.API_URL}configuration/languages?api_key=${process.env.API_KEY}`, options)

  if(!response.ok){
    throw new Error("Could not load languages");
  }

  const data:Language[] = await response.json();

  return data;
}


export async function fetchGenres(){
  const response = await fetch(`${process.env.API_URL}genre/movie/list?api_key=${process.env.API_KEY}`, options)

  const data = await response.json();
  
  const genres: Genre[] = data.genres

  return genres;
}

export function formatDate(dateString: string):string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function formatRuntime(minutes: number) {
  const hours: number = Math.floor(minutes / 60);

  const remainingMinutes: number = minutes % 60;

  return `${hours}h ${remainingMinutes}m`;
}