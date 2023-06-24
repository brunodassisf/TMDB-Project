import { FECTH_GENRES } from "../../constant";
import { IFetchData } from "../../helper/interface";

interface IGenre {
  id: number;
  name: string;
}

export async function getGenres<T>({ type }: { type: string }) {
  return fetch(FECTH_GENRES(type), {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const { genres } = data as IFetchData<IGenre>;
      return genres;
    });
}
