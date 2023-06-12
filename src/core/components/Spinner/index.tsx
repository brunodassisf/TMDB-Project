function Spinner() {
  return (
    <div className="fixed w-full h-full flex justify-center items-center z-10">
      <div className="w-16 h-16 rounded-full animate-spin z-30 border-8 border-solid border-red-500 border-t-transparent"></div>
      <div className="absolute w-full h-full bg-gray-950/80 z-20" />
    </div>
  );
}

export default Spinner;
