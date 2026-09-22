"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Head Boy",
    role: "Student Leadership",
    image: "/images/headboy.png",
    quote:
      "Chegato High School has taught me leadership, discipline and the courage to pursue excellence.",
  },
  {
    id: 2,
    name: "Head Girl",
    role: "Student Leadership",
    image: "/images/headboy.png",
    quote:
      "The supportive learning environment and dedicated teachers have inspired me to achieve my goals.",
  },
  {
    id: 3,
    name: "Parent Representative",
    role: "Parents Association",
    image: "/images/principal.png",
    quote:
      "The school provides a safe and academically focused environment where learners can thrive.",
  },
  {
    id: 4,
    name: "Outstanding Alumni",
    role: "University Graduate",
    image: "/images/principal1.png",
    quote:
      "The values and work ethic I developed at Chegato continue to guide my success today.",
  },
  {
    id: 5,
    name: "Student Representative",
    role: "Student Council",
    image: "/images/headboy.png",
    quote:
      "Chegato offers opportunities in academics, sports and leadership that help students grow holistically.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-900 to-green-700">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Our Community Says
          </h2>

          <p className="text-green-100 mt-4">
            Voices from students, parents and alumni.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          className="pb-16 [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet-active]:bg-yellow-400"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-3xl p-10 max-w-4xl mx-auto shadow-2xl text-center">
                <div className="relative w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full border-4 border-green-800 shadow-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-lg text-gray-700 italic mb-8">
                  "{item.quote}"
                </p>

                <h3 className="font-bold text-xl text-green-900">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}