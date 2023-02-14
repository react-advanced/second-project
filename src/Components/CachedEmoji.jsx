const CachedEmoji = ({ isCached = false }) => {
  return (
    <>
      {isCached ? (
        <span className="text-green-900 text-base border border-green-400 p-1 mt-2 inline-block rounded-xl bg-green-300 font-bold">Cached ⚡</span>
      ) : (
        <span className="text-red-900 text-base border border-red-400 p-1 mt-2 inline-block rounded-xl bg-pink-50 font-bold">Not Cached 🐌</span>
      )}
    </>
  );
};

export default CachedEmoji;
