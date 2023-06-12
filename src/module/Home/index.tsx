"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMovie, ISeries } from "@/src/core/helper/interface";
import { imageSizeRender } from "@/src/core/util/imageSize";
import moment from "moment";
import "swiper/css";

interface IMidiaChange {
  arr: IMovie[] | ISeries[];
  active: boolean;
}

const formatData = (data: string) => {
  return moment(data, "YYYY-MM-DD").format("DD/MM/YYYY");
};

export default function Home({
  movies,
  series,
}: {
  movies: IMovie[];
  series: ISeries[];
}) {
  const [midiaChange, setMidiaChange] = useState<IMidiaChange>({
    active: true,
    arr: series,
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
            onClick={() => setMidiaChange({ active: true, arr: series })}
          >
            Series TV
          </div>
          <div
            className={`rounded-full font-medium px-3 py-1 ${
              !midiaChange.active ? "bg-blue-600 text-white" : undefined
            }`}
            onClick={() => setMidiaChange({ active: false, arr: movies })}
          >
            Filmes
          </div>
        </div>
      </div>
      <Swiper spaceBetween={20} slidesPerView={1.2}>
        {midiaChange.arr.map((item) => (
          <SwiperSlide
            key={item.id}
            className="bg-white rounded-md !flex shadow-md"
          >
            <Image
              src={imageSizeRender("w185", item.poster_path)}
              alt={item.title || item.name}
              width={185}
              height={0}
              className=" w-fit p-2 rounded-md"
            />
            <div className="flex flex-col justify-between py-2 pr-3 break-words">
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
    </div>
  );
}
