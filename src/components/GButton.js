import gButtonData from "../data/g_button_data.js";

function GButton() {
  return (
    <section class="flex gap-y-20 flex-col items-center justify-center h-screen bg-gray-800">
      <h1 className="font-bold text-3xl text-stone-300">
        Button Testing: Property Specifications
      </h1>
      <div className="bg-white max-w-[1048px] rounded-md">
        <div className="grid grid-cols-2 gap-6 p-5">
          {gButtonData.map((item) => (
            <button className="border-[1px] border-zinc-200 rounded-md p-4 text-left hover:bg-neutral-900 hover:text-stone-300 max-w-[300px]">
              <span className="text-neutral-500">{item.type}</span>
              <p>{item.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GButton;
