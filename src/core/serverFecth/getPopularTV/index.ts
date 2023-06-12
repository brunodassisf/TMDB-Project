import { FETCH_API } from "../../constant";
import { IFetchData, ISeries } from "../../helper/interface";

export async function getPopularTV() {
  return fetch(FETCH_API.POPULAR_TV, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const { results } = data as IFetchData<ISeries>;
      return results;
    });
}
