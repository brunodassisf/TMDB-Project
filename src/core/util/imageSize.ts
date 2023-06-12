type TSize = "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original";

export const imageSizeRender = (size: TSize, path: string) => {
  return `${process.env.NEXT_PUBLIC_API_IMG_URL}/${size}/${path}`;
};
