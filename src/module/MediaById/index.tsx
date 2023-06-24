"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { IMediaDetail } from "@/src/core/helper/interface";
import { FaAngleLeft } from "react-icons/fa";
import { imageLoader, imageLoaderOriginal } from "@/src/core/helper/image";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { convertDate } from "@/src/core/helper/masker";

export default function MediaById({ detail }: { detail: IMediaDetail }) {
  const router = useRouter();
  const params = useParams();

  const redirectHome = () => {
    router.back();
  };

  const renderInfos = (style: string) => {
    return (
      <div className={`col-span-1 ${style}`}>
        <h3 className="text-5xl font-bold my-4">
          {detail.title || detail.name}
        </h3>
        <div className="font-medium mb-2">
          {detail.genres.map((item) => item.name).join(", ")}
        </div>
        <p className="text-justify font-thin leading-4 mb-4">
          {detail.overview}
        </p>
        <div>
          Lançamento
          <span className="ml-2 font-bold">
            {convertDate(detail.first_air_date || detail.release_date)}
          </span>
        </div>
        {detail.last_air_date ? (
          <div>
            Último episódio
            <span className="ml-2 font-bold">
              {convertDate(detail.last_air_date)}
            </span>
          </div>
        ) : null}
        {detail.homepage ? (
          <Link href={detail.homepage} target="_blank">
            Homepage
            <span className="ml-2 font-bold break-words">
              {detail.homepage}
            </span>
          </Link>
        ) : null}
        {detail.seasons ? (
          <>
            <div className="mb-7">
              Total de epsódios
              <span className="ml-2 font-bold">
                {detail.number_of_episodes}
              </span>
            </div>
            <Swiper
              className="mb-10"
              spaceBetween={10}
              slidesPerView={1.3}
              breakpoints={{
                640: {
                  slidesPerView: 2.3,
                },
                768: {
                  slidesPerView: 3.3,
                },
                1024: {
                  slidesPerView: 3.3,
                },
              }}
            >
              {detail.seasons.map((item) => (
                <SwiperSlide key={item.id} className="glass_card h-44 relative">
                  <Image
                    loader={imageLoader}
                    src={item.poster_path || detail.poster_path}
                    alt={detail.name || ""}
                    fill
                    sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
                    priority={true}
                    className="object-cover rounded-lg"
                  />

                  <div className="pr-3 relative z-20 pt-64 pl-2 pb-2 font-light text-white">
                    <div>{item.name}</div>
                    <div>Episódios: {item.episode_count}</div>
                  </div>
                  <div className="backdrop-brightness-50 bg-stone-900/30 absolute top-0 left-0 w-full h-full rounded-lg" />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : null}
      </div>
    );
  };

  const renderPoster = (styleImage?: string, styleTag?: string) => {
    return (
      <>
        <Image
          loader={imageLoaderOriginal}
          src={detail.poster_path}
          alt={detail.title || detail.name}
          width={500}
          height={500}
          priority={true}
          className={`rounded-md col-span-1 ${styleImage}`}
        />
        {detail.tagline ? (
          <div
            className={`italic text-white text-center text-xl mt-2 ${styleTag} `}
          >
            "{detail.tagline}"
          </div>
        ) : null}
      </>
    );
  };

  return (
    <div className="mt-10">
      <div className="flex items-center mb-5 px-4">
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
      <div className="relative">
        <Image
          loader={imageLoaderOriginal}
          src={detail.backdrop_path}
          alt={detail.title || detail.name}
          fill
          priority={true}
          sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
          className="!relative"
        />

        <div className="absolute w-full h-full top-0 left-0">
          <div className="w-full h-full bg-gradient-to-l from-25% from-stone-900 grid grid-cols-2 items-center">
            <div className="col-span-1">
              {renderPoster("hidden lg:block mx-auto")}
            </div>
            <div className="col-span-1 pr-5">
              {renderInfos("text-white hidden lg:block")}
            </div>
          </div>
          <div className="px-4 block lg:hidden">
            <div className="w-48 h-auto mt-4">
              {renderPoster("w-fit", "hidden")}
            </div>
            <div className="">
              {renderInfos("text-stone-900 block lg:hidden")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
