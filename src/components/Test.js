import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/swiper-custom.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import jobDetails from "../data/jobDetails";

function Thumbnails() {
  return (
    <section className="py-[140px] px-[120px] bg-gray-50 font-poppins">
      <div>
        <h1 className="relative z-20 w-fit text-[#183B56] font-bold text-[40px] leading-[125%] mb-8">
          Some Popular <br /> Job for You!
        </h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10} // Gap/Space between slides
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          className="max-w-[990px] overflow-scroll"
        >
          {jobDetails.map((job, index) => (
            <SwiperSlide
              key={index}
              className="bg-white min-w-[355px] min-h-[292px] rounded-[16.84px] px-6 py-[30px]  shadow-[5px_0px_56.1276px_rgba(55,55,55,0.1098)]"
            >
              <div className="flex items-center justify-between">
                <div className="bg-[#fceeea] w-[140px] h-[30px] rounded-[5px] flex items-center justify-center">
                  <span className="text-[#E95432] font-poppins font-medium text-[14px] leading-[20px]">
                    {job.category}
                  </span>
                </div>
                <span className="text-[#5A7184] font-dmSans leading-[26px] text-base">
                  {job.createdTime}
                </span>
              </div>
              <p className="text-[#183B56] max-h-[72px] truncate whitespace-normal mt-[24px] mb-[16px] font-semibold text-[22px] leading-[36px] tracking-[-1px]">
                {job.position}
              </p>
              {/* Time & Location */}
              <div className="flex font-dmSans text-[#5A7184] justify-between mb-6">
                <div className="flex items-center gap-x-2">
                  <img alt="clock" src="images/icons/time.svg" />
                  <span>{job.workingDay}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <img alt="location" src="images/icons/location2.svg" />
                  <span>{job.location}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <img src={job.logo} />
                  <span>{job.company}</span>
                </div>
                <button className="text-[#7BC678]">Apply now</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Thumbnails;
