import React from "react";
import "./Testimonial.css";
import img1 from "../../assets/avatar1.jpg";
import img2 from "../../assets/avatar2.jpg";
import img3 from "../../assets/avatar3.jpg";
import img4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: img1,
    name: "Tina Snow",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porr blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi",
  },
  {
    avatar: img2,
    name: "Tina ",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porr blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi",
  },
  {
    avatar: img3,
    name: " Snow",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porr blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi",
  },
  {
    avatar: img4,
    name: "Bla",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porr blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi",
  },
];

function testimonial() {
  return (
    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials_container"
      >
        {data.map(({ avatar, name, review }) => {
          return (
            <SwiperSlide key={avatar} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default testimonial;
