export const FETCH_API = {
  POPULAR: `${process.env.NEXT_PUBLIC_API_URL}/movie/popular?language=pt-BR`,
  POPULAR_MOVIE: `${process.env.NEXT_PUBLIC_API_URL}/movie/popular?language=pt-BR`,
  POPULAR_TV: `${process.env.NEXT_PUBLIC_API_URL}/tv/popular?language=pt-BR`,
};

export const FECTH_POPULAR = (type: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/${type}/popular?language=pt-BR`;
};
