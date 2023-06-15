"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

import { Swiper, SwiperSlide } from "swiper/react";
import { IMovie, ISeries } from "@/src/core/helper/interface";

import "swiper/css";

interface IMidiaChange {
  arr: IMovie[] | ISeries[];
  active: boolean;
}

const formatData = (data: string) => {
  return moment(data, "YYYY-MM-DD").format("DD/MM/YYYY");
};

const imageLoader = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_API_IMG_URL}/w${width}${src}`;
};

export default function Home({
  moviesArr,
  seriesArr,
}: {
  moviesArr: IMovie[];
  seriesArr: ISeries[];
}) {
  const [midiaChange, setMidiaChange] = useState<IMidiaChange>({
    active: true,
    arr: seriesArr,
  });

  return (
    <div className="mt-10 px-4">
      <div>
        <h3 className="text-lg font-bold mb-3">Mais populares</h3>
        <div className="flex gap-2 mb-7 border-2 rounded-full w-fit bg-blue-300 border-blue-400 cursor-pointer">
          <div
            className={`rounded-full font-medium px-3 py-1 ${
              midiaChange.active ? "bg-blue-600 text-white" : undefined
            }`}
            onClick={() => setMidiaChange({ active: true, arr: seriesArr })}
          >
            Series TV
          </div>
          <div
            className={`rounded-full font-medium px-3 py-1 ${
              !midiaChange.active ? "bg-blue-600 text-white" : undefined
            }`}
            onClick={() => setMidiaChange({ active: false, arr: moviesArr })}
          >
            Filmes
          </div>
        </div>
      </div>
      <Swiper
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
            slidesPerView: 4.3,
          },
        }}
      >
        {midiaChange.arr.map((item) => (
          <SwiperSlide
            key={item.id}
            className="bg-white rounded-md !flex shadow-md"
          >
            <div className="w-32">
              <Image
                loader={imageLoader}
                src={item.poster_path}
                alt={item.title || item.name}
                width={300}
                height={300}
                priority={true}
                className="w-fit p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col justify-between py-2 pr-3 break-words w-32">
              <div className="font-medium leading-4">
                {item.title || item.name}
              </div>
              <div className="text-xs">
                {formatData(item.first_air_date || item.release_date)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-3 float-right">
        <Link
          href={`/populares/${midiaChange.active ? "tv" : "movie"}`}
          className="font-medium cursor-pointer bg-blue-500 text-white rounded-full py-1 px-3"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
}
