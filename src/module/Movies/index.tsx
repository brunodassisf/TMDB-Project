"use client";
import { FETCH_API } from "@/src/core/constant";
import { useEffect, useState } from "react";
import Spinner from "@/src/core/components/Spinner";
import { FaAngleLeft, FaVideo } from "react-icons/fa";
import { useRouter } from "next/navigation";

export interface ISearch {
  description: string;
  id: string;
  image: string;
  resultType: string;
  title: string;
}

function Search() {
  const router = useRouter();
  const [results, setResults] = useState<ISearch[]>([]);
  const [queryParams, setQueryParams] = useState({ page: 1 });
  const [loading, setLoading] = useState<boolean>(false);
  const [countDown, setCountDown] = useState(0);

  // ?page=1&language=pt-BR&with_original_language=pt

  const formatarQueryString = (objeto) => {
    const parametros = [];
    for (let chave in objeto) {
      if (objeto[chave] !== "") {
        parametros.push(`${chave}=${encodeURIComponent(objeto[chave])}`);
      }
    }
    return parametros.join("&");
  };

  useEffect(() => {
    const searchSlug = async () => {
      setLoading(true);
      const query = formatarQueryString(queryParams);
      await fetch(`${FETCH_API.POPULAR_MOVIE}/${query}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
        },
      })
        .then(async (res) => {
          if (res.ok) {
            const data = await res.json();
            setResults(data.results);
          }
        })
        .finally(() => setLoading(false));
    };

    searchSlug();
  }, []);

  return (
    <>
      {loading ? <Spinner /> : null}
      <div className="mt-10 mx-5">
        {results.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
}

export default Search;
