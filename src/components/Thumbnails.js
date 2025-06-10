function Thumbnails() {
  function handleOnClickLeft() {
    console.log("Left button clicked");
  }

  function handleOnClickRight() {
    console.log("Right button clicked");
  }

  return (
    <section className="flex flex-col items-center pt-10 gap-y-5">
      <h1 className="font-bold text-2xl">Thumbnails</h1>
      <div className="flex w-full justify-evenly items-center bg-purple-300 px-4">
        <button
          className="font-bold text-4xl"
          onClick={() => handleOnClickLeft()}
        >
          ←
        </button>
        <ul className="flex gap-x-3 overflow-scroll max-w-[1048px] mx-4">
          <li className="bg-red-300 min-w-[200px] min-h-[200px] flex items-center justify-center">
            🖤
          </li>
          <li className="bg-red-300 min-w-[200px] min-h-[200px] flex items-center justify-center">
            🖤
          </li>
          <li className="bg-red-300 min-w-[200px] min-h-[200px] flex items-center justify-center">
            🖤
          </li>
          <li className="bg-red-300 min-w-[200px] min-h-[200px] flex items-center justify-center">
            🖤
          </li>
          <li className="bg-red-300 min-w-[200px] min-h-[200px] flex items-center justify-center">
            🖤
          </li>
          <li className="bg-red-300 min-w-[200px] min-h-[200px] flex items-center justify-center">
            🖤
          </li>
          <li className="bg-red-300 min-w-[200px] min-h-[200px] flex items-center justify-center">
            🖤
          </li>
          <li className="bg-red-300 min-w-[200px] min-h-[200px] flex items-center justify-center">
            🖤
          </li>
        </ul>
        <button
          className="font-bold text-4xl"
          onClick={() => handleOnClickRight()}
        >
          →
        </button>
      </div>
    </section>
  );
}

export default Thumbnails;
