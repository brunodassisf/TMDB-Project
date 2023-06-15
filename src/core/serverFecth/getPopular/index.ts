import { FECTH_POPULAR } from "../../constant";
import { IFetchData } from "../../helper/interface";

export async function getPopular<T>({
  type,
  page,
}: {
  type: string;
  page?: number;
}) {
  const countPage = page ? `&page=${page}` : "";

  return fetch(`${FECTH_POPULAR(type)}${countPage}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const { results, page, total_pages, total_results } =
        data as IFetchData<T>;
      return { results, page, total_pages, total_results };
    });
}
