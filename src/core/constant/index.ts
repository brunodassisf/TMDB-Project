export const FETCH_API = {
  POPULAR: `${process.env.NEXT_PUBLIC_API_URL}/movie/popular?language=pt-BR`,
  POPULAR_MOVIE: `${process.env.NEXT_PUBLIC_API_URL}/movie/popular?language=pt-BR`,
  POPULAR_TV: `${process.env.NEXT_PUBLIC_API_URL}/tv/popular?language=pt-BR`,
};

export const FECTH_POPULAR = (type: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/${type}/popular?language=pt-BR`;
};

export const FETCH_DETAIL = (type: string, id: number) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/${type}/${id}?language=pt-BR`;
};

export const FECTH_GENRES = (type: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/genre/${type}/list?language=pt-BR`;
};

export const genreColor = {
  28: "bg-red-500",
  12: "bg-esmerald-500",
  16: "bg-yellow-500",
  35: "bg-rose-500",
  80: "bg-stone-500",
  99: "bg-green-600",
  18: "bg-blue-500",
  10751: "bg-yellow-600",
  10759: "bg-red-500",
  10767: "bg-orange-600",
  10765: "bg-sky-400",
  14: "bg-orange-600",
  36: "bg-sky-500",
  27: "bg-gray-600",
  10402: "bg-green-600",
  9648: "bg-slate-500",
  10749: "bg-rose-600",
  878: "bg-sky-500",
  10770: "bg-yellow-500",
  53: "bg-stone-600",
  10752: "bg-slate-600",
  37: "bg-amber-500",
  10766: "bg-orange-500",
};
