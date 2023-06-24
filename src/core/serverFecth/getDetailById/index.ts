import { FETCH_DETAIL } from "../../constant";

export async function getDetailById<T>({
  type,
  id,
}: {
  type: string;
  id: number;
}) {
  return fetch(FETCH_DETAIL(type, id), {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const detail = data as T;
      return detail;
    });
}
