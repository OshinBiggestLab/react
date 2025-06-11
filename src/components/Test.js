import { useState } from "react";

const images = ["🖤", "🖤", "🖤", "🖤", "🖤", "🖤", "🖤", "🖤", "🖤", "🖤"];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const goLeft = () => {
    if (index > 0) setIndex(index - 1);
  };

  const goRight = () => {
    if (index < images.length - 1) setIndex(index + 1);
  };

  return (
    <div className="w-[200px] h-[200px] relative overflow-hidden mx-auto">
      {/* Image row */}
      <div
        className="flex transition-transform duration-500 min-w-[1200px] bg-black"
        style={{ transform: `translateX(-${index * 200}px)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            // src={src}
            // alt={`Slide ${i}`}
            className="w-[200px] h-[200px] object-cover flex-shrink-0 bg-purple-400"
          >
            {src}
          </div>
        ))}
      </div>

      {/* Left button */}
      <button
        onClick={goLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 px-2 py-1"
      >
        ◀
      </button>

      {/* Right button */}
      <button
        onClick={goRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 px-2 py-1"
      >
        ▶
      </button>
    </div>
  );
}
