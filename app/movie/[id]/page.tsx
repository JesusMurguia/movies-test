export const runtime = 'nodejs';
import { fetchMovieCredits, fetchMovieDetails } from "@/app/utils";
import { CreditsCarousel, ExtraMovieInfo, MovieDetails } from "@/components";
import { Suspense } from "react";
export default async function Page({ params }: { params: { id: number } }) {
  const movieData = fetchMovieDetails({ id: params.id });
  const creditsData = fetchMovieCredits({ id: params.id });

  const [movie, credits] = await Promise.all([movieData, creditsData]);

  const topCredits = credits.slice(0, Math.min(6, credits.length));

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MovieDetails movie={movie} credits={topCredits} />
      <div className="mx-auto grid grid-cols-6 lg:max-w-7xl">
        <div className="col-span-6 w-full md:col-span-5">
          <CreditsCarousel title={"Top Billed Cast"} cast={credits} />
        </div>
        <div className="col-span-6 w-full  md:col-span-1">
          <ExtraMovieInfo movie={movie} />
        </div>
      </div>
    </Suspense>
  );
}
