'use client';
import React from "react";
import "./Banner.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import bannerImage from "../../../assests/images/banner.jpg";
import bannerImage1 from "../../../assests/images/banner-1.jpg";
import homeIcon from "../../../assests/icons/home.png";
import arrowIcon from "../../../assests/icons/to-right.png";
import buttonIcon1 from "../../../assests/icons/icon-1.jpg";
import buttonIcon2 from "../../../assests/icons/icon-2.jpg";
import buttonIcon3 from "../../../assests/icons/icon-3.jpg";
import buttonIcon4 from "../../../assests/icons/icon-4.jpg";

import { fontReddit } from "@/app/config/fontsProvider";

const resources = [
  {
    title: "Blogs",
    description: "Read Our Latest Blogs",
    image: buttonIcon1,
    bg: "bg-purple-100",
  },
  {
    title: "Online Courses",
    description: "Access Our Latest Courses",
    image: buttonIcon2,
    bg: "bg-red-100",
  },
  {
    title: "Test Series",
    description: "Practice with Our Mock Test",
    image: buttonIcon3,
    bg: "bg-green-100",
  },
  {
    title: "Books",
    description: "Find NEET Books",
    image: buttonIcon4,
    bg: "bg-blue-100",
  },
];

const Banner = () => {
  return (
    <div className={` ${fontReddit.weight} `}>
      {/* carousel image section  */}
<div className="">
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image
            src={bannerImage}
            alt="Banner 1"
            className="w-full h-[160px] md:h-full"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={bannerImage1}
            alt="Banner 2"
            className="w-full h-[160px] md:h-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
      {/* information section  */}
      <div className="info-background">
        <div className=" lg:max-w-6xl md:max-w-3xl max-w-sm mx-auto md:px-3 px-2">
          {/* ----------------------------------- */}
          <div className=" py-8 flex items-center gap-2">
            <Image src={homeIcon} alt="home icon" className="w-6" />
            <Image src={arrowIcon} alt="home icon" className="w-3" />
            <h1 className="text-lg">NEET</h1>
          </div>
          {/* ----------------------------------- */}
          <div>
            <h1 className="md:text-4xl text-2xl font-bold mb-5">
              NEET 2026: Syllabus, Exam Pattern, Eligibility, and Courses
            </h1>
            <p className="text-gray-700">
              Preparing for the NEET 2026 exam is a crucial step for students
              aiming to pursue a career in the medical field. This
              national-level exam demands focused preparation and smart
              planning. With proper guidance, online courses, study resources,
              and a clear understanding of the syllabus and pattern, students
              can move forward confidently. Here, we provide a detailed overview
              of NEET UG 2026, including eligibility, syllabus, exam pattern,
              and preparation tips.
            </p>
          </div>
          {/* ------------------------------------  */}
          <div className=" py-7">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 md:gap-6 gap-10 p-6 bg-white">
              {resources.map((res, index) => (
                <div
                  key={index}
                  className= "relative group" 
                >
                <div
                  className={` ${res.bg} rounded-xl p-4 shadow-md overflow-hidden transition-transform duration-200 hover:scale-[1.01]`}
                >
                  
                  {/* Watermark image */}
                  <div className="absolute bottom-0 right-0 opacity-10">
                    <Image
                      src={res.image}
                      alt="Watermark"
                      className="w-24 h-24"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mt-6">{res.title}</h3>
                  <p className="text-sm mt-1">{res.description}</p>

                  {/* Arrow */}
                  <div className="absolute right-4 top-4 text-gray-500 text-3xl group-hover:translate-x-1.5 group-hover:duration-300">
                    <span>&#8250;</span> {/* Right arrow symbol */}
                  </div>
                </div>
                  {/* Icon circle */}
                  <div className="absolute -top-5 left-4 bg-white rounded-full p-2 shadow-md">
                    <Image
                      src={res.image}
                      alt={res.title}
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
