import Home from "@/src/module/Home";
import { getPopularMovies } from "../core/serverFecth/getPopularMovies";
import { getPopularTV } from "../core/serverFecth/getPopularTV";

export default async function HomeScree() {
  const movies = await getPopularMovies();
  const tvSeries = await getPopularTV();
  return (
    <main className="container h-full mx-auto">
      <Home movies={movies} series={tvSeries} />
    </main>
  );
}
