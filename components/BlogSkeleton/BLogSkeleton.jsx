export default function () {
  return (
    <>

      <div className="w-12 h-12 border-4 mx-auto border-purple-600 border-t-transparent rounded-full animate-spin">
      </div>
      <p className="text-lg font-medium text-white text-center">Yükleniyor...</p>
      <p className='text-center'>Lütfen Bekleyin ..</p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-lg backdrop-blur-lg border border-white/20 shadow-md p-6 animate-pulse"
            >
              <div className="h-6 bg-gray-400/30 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-400/20 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-400/20 rounded w-5/6 mb-6"></div>
              <div className="h-4 bg-gray-400/40 rounded w-1/3"></div>
            </div>
          ))}
        <div className="mx-auto mt-12 flex flex-col items-center justify-center">



        </div>

      </div>
    </>

  );
};
