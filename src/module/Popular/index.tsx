"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getPopular } from "@/src/core/serverFecth/getPopular";
import Pagination from "@/src/core/components/Pagination";
import Spinner from "@/src/core/components/Spinner";
import { IMovie, ISeries } from "@/src/core/helper/interface";
import { FaAngleLeft } from "react-icons/fa";

export default function Popular() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [populars, setPopulars] = useState({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  useEffect(() => {
    setLoading(true);
    const fetchPopular = async () => {
      const popularArr = await getPopular<IMovie | ISeries>({
        type: params.slug,
        page: populars.page,
      });
      setPopulars(popularArr);
      setLoading(false);
    };
    fetchPopular();
  }, [populars.page]);

  const redirectHome = () => {
    router.push("/");
  };

  const imageLoader = ({ src, width, quality }) => {
    return `${process.env.NEXT_PUBLIC_API_IMG_URL}/w${width}${src}`;
  };

  return (
    <>
      {loading ? <Spinner /> : null}
      <div className="mt-10">
        <div className="flex items-center mb-5">
          <div
            className="bg-blue-400 shadow-md text-white rounded-full cursor-pointer p-1 mr-3"
            onClick={redirectHome}
          >
            <FaAngleLeft size={20} />
          </div>
          <h3 className="font-semibold text-xl">
            {params.slug === "tv" ? "Series" : "Filmes"} Populares
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {populars.results.map((item) => (
            <>
              {item.title !== "" && item.name !== "" && item.overview !== "" ? (
                <div
                  key={item.id}
                  className="bg-white  rounded-lg shadow-md cursor-pointer"
                >
                  <div className="flex">
                    <Image
                      loader={imageLoader}
                      src={item.poster_path}
                      alt={item.title || item.name}
                      width={300}
                      height={300}
                      priority={true}
                      className="w-32 rounded-tl-lg rounded-bl-lg"
                    />
                    <div className="py-3 px-2 flex flex-col justify-between">
                      <h6 className="font-medium text-slate-600">
                        {item.name || item.title}
                      </h6>
                      <p className="paragrafy-limit">{item.overview}</p>
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          ))}
        </div>
        <Pagination
          currentPage={populars.page}
          totalPages={populars.total_pages}
          onPageChange={(num) => setPopulars({ ...populars, page: num })}
        />
      </div>
    </>
  );
}
