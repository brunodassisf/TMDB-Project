"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { getPopular } from "@/src/core/serverFecth/getPopular";
import Spinner from "@/src/core/components/Spinner";
import { IMedia } from "@/src/core/helper/interface";
import { FaAngleLeft } from "react-icons/fa";
import useScrollInfinity from "@/src/core/hook/useInfiniteScroll";
import Skeleton from "@/src/core/components/Skeleton";
import { imageLoader } from "@/src/core/helper/image";

export default function Popular() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const callNextPage = useScrollInfinity(targetRef.current);
  const [loading, setLoading] = useState<boolean>(false);

  const [isStartFetchResults, setIsStartFetchResults] = useState<boolean>(true);
  const [populars, setPopulars] = useState({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const fetchPopular = async (page?: number) => {
    const popularArr = await getPopular<IMedia>({
      type: params.slug,
      page,
    });
    setPopulars((prev) => ({
      ...popularArr,
      page,
      results: prev.results.concat(popularArr.results),
    }));
    setLoading(false);
  };

  useEffect(() => {
    if (!callNextPage && isStartFetchResults) {
      setLoading(true);
      fetchPopular(populars.page);
      setIsStartFetchResults(false);
    }
  }, []);

  useEffect(() => {
    if (callNextPage && !isStartFetchResults) {
      setLoading(true);
      fetchPopular(populars.page + 1);
      console.log("buscando pagina: " + populars.page);
    }
  }, [callNextPage]);

  const redirectHome = () => {
    router.push("/");
  };

  const renderSkeletons = () => {
    return new Array(40)
      .fill(<Skeleton width="h-full" height="h-48" />)
      .map((item, index) => <div key={index}>{item}</div>);
  };

  const handleRedirectById = (id: string) => {
    router.push(`${pathname}/${id}`);
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {populars.results.length > 0 ? (
            populars.results
              .filter(
                (item) =>
                  item.title !== "" &&
                  item.name !== "" &&
                  item.overview !== "" &&
                  item.backdrop_path !== null
              )
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white  rounded-lg shadow-md cursor-pointer"
                  onClick={() => handleRedirectById(item.id)}
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
              ))
          ) : (
            <>{renderSkeletons()}</>
          )}
          <div ref={targetRef} />
        </div>
      </div>
    </>
  );
}
