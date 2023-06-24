export const imageLoader = ({ src, width }) => {
  return `${process.env.NEXT_PUBLIC_API_IMG_URL}/w${width}${src}`;
};

export const imageLoaderOriginal = ({ src }) => {
  return `${process.env.NEXT_PUBLIC_API_IMG_URL}/w1920_and_h800_multi_faces${src}`;
};
