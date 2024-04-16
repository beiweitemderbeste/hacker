const SortingBar = ({ setSorting }) => {
  return (
    <div className="flex justify-evenly items-center bg-gray-800 p-2 border-t-2 border-gray-200">
      <button
        onClick={() => setSorting("top")}
        className="px-4 py-2 rounded-sm text-white border border-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white"
      >
        top
      </button>
      <button
        onClick={() => setSorting("best")}
        className="px-4 py-2 rounded-sm text-white border border-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white"
      >
        best
      </button>
      <button
        onClick={() => setSorting("new")}
        className="px-4 py-2 rounded-sm text-white border border-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white"
      >
        new
      </button>
    </div>
  );
};

export default SortingBar;
