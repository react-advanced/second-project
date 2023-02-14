const CachedEmoji = ({ isCached = false }) => {
  return (
    <>
      {isCached ? (
        <span className="text-green-900 text-lg border p-1 mt-2 inline-block rounded-xl bg-green-200">Cached ⚡⚡⚡</span>
      ) : (
        <span className="text-red-900 text-lg border p-1 mt-2 inline-block rounded-xl bg-pink-200">Not Cached 🐌🐌🐌</span>
      )}
    </>
  );
};

export default CachedEmoji;
