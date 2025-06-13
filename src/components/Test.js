import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/swiper-custom.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  { id: 1, title: "Slide 1" },
  { id: 2, title: "Slide 2" },
  { id: 3, title: "Slide 3" },
  { id: 4, title: "Slide 4" },
  { id: 5, title: "Slide 1" },
  { id: 6, title: "Slide 2" },
  { id: 7, title: "Slide 3" },
  { id: 8, title: "Slide 4" },
];

function Thumbnails() {
  return (
    <section>
      <h1 className="font-bold text-2xl text-center">
        Testing Library for Graph Navigator
      </h1>
      <Swiper
        className="h-[200px] overflow-scroll"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="h-[200px] bg-blue-300 flex items-center justify-center"
          >
            <span className="text-center m-0 p-0">{item.title}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Thumbnails;
