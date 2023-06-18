import React from "react";

interface SkeletonProps {
  width: string;
  height: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ width, height }) => {
  return (
    <div className={`bg-gray-50 animate-pulse rounded-lg ${width} ${height}`} />
  );
};

export default Skeleton;
