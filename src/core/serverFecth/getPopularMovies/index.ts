import { FETCH_API } from "../../constant";
import { IFetchData, IMovie } from "../../helper/interface";

export async function getPopularMovies() {
  return fetch(FETCH_API.POPULAR_MOVIE, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const { results } = data as IFetchData<IMovie>;
      return results;
    });
}
