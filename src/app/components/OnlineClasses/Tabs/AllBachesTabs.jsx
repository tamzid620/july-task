import React from "react";
import Image from "next/image";
import onlineBadgeIcon from "../../../../assests/icons/online.webp";
import arrowLogo from "../../../../assests/icons/to-right.png";
import cartimage1 from "../../../../assests/images/cart1-image.jpg";
import cartimage2 from "../../../../assests/images/cart2-image.jpg";
import cartimage3 from "../../../../assests/images/cart3-image.jpg";
import whatsAppIcon from "../../../../assests/icons/whatsapp.png";
import morePlanImage from "../../../../assests/images/more plans.png";
import { fontReddit } from "@/app/config/fontsProvider";
import { BsPeople, BsCalendar } from "react-icons/bs";

const cartData = [
  {
    title: "Arjuna NEET 3.0 2026",
    image: cartimage1,
    badge1: "NEW",
    badge2: "Hinglish",
    price: "₹4,299",
    originalPrice: "₹5,000",
    discount: "Discount of 14% applied",
    startDate: "14 Jul, 2025",
    endDate: "1 Jul, 2027",
    userType: "For Neet Aspirants",
    themeColor: "violet",
  },
  {
    title: "Arjuna NEET Hindi 2.0 2026",
    image: cartimage2,
    badge1: "NEW",
    badge2: "Hindi",
    price: "₹2,499",
    originalPrice: "₹4,800",
    discount: "Discount of 48% applied",
    startDate: "22 Jul, 2025",
    endDate: "1 Jul, 2027",
    userType: "For NEET Aspirants only",
    themeColor: "yellow",
  },
  {
    title: "",
    image: cartimage3,
    badge1: "",
    badge2: "",
    price: "",
    originalPrice: "",
    discount: "",
    startDate: "",
    endDate: "",
    userType: "",
    themeColor: "",
  },
];

const AllBachesTabs = () => {
  return (
    <div
      className={` ${fontReddit.weight} lg:max-w-6xl md:max-w-3xl max-w-sm mx-auto lg:px-0 md:px-3 px-2 `}
    >
      <h1 className="text-3xl font-bold py-5">Class 11 NEET Courses</h1>

      {/* Cart Slider */}
      <div className="flex gap-5 pb-6 hide-scrollbar">
        {cartData.map((item, i) => {
          const isLast = i === cartData.length - 1;

          return (
            <div
              key={i}
              className="relative w-[350px] h-[460px] shrink-0 rounded-xl border-gray-300 shadow-lg p-2"
            >
              {isLast ? (
                <div className="relative w-full h-full">
                  {/* Orange Hinglish Ribbon */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-orange-500 text-white text-xs px-3 py-1 rounded-b-md shadow-md">
                      Hinglish
                    </div>
                  </div>

                  {/* Banner Image */}
                  <Image
                    src={item.image}
                    alt="course banner"
                    className="w-full h-[380px] rounded-sm"
                  />

                  {/* Buttons at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <button className="flex-1 bg-black text-white text-lg font-semibold rounded py-2 hover:bg-opacity-80 transition">
                      Explore Now
                    </button>
                    <button className="flex-1 bg-white text-black text-lg font-semibold rounded py-2 hover:bg-gray-200 transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Image
                    src={item.image}
                    alt="course banner"
                    className="w-full h-[150px]  rounded-t-xl"
                  />

                  <div className="p-4 h-[280px] flex flex-col justify-between">
                    {/* Title + Badges */}
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="font-semibold text-base">{item.title}</h2>
                      {item.badge1 && (
                        <span className="text-[11px] font-semibold bg-yellow-400 px-1.5 py-0.5 rounded">
                          {item.badge1}
                        </span>
                      )}
                      {item.badge2 && (
                        <span className="text-[11px] font-semibold bg-gray-200 px-1.5 py-0.5 rounded">
                          {item.badge2}
                        </span>
                      )}
                      <Image
                        src={whatsAppIcon}
                        alt="whatsapp logo"
                        className="w-5"
                      />
                    </div>

                    {/* Info rows */}
                    <div>
                      <div className="flex items-center text-sm text-gray-600 mb-1 mt-2">
                        <BsPeople className="mr-2" /> {item.userType}
                      </div>
                      {item.startDate && (
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <BsCalendar className="mr-2" />
                          Starts on {item.startDate} &nbsp; Ends on{" "}
                          {item.endDate}
                        </div>
                      )}
                      <Image
                        src={morePlanImage}
                        alt="more Plan image"
                        className="w-full"
                      />
                      <hr className="border-gray-300 my-3" />
                    </div>

                    {/* Price & Discount */}
                    <div className="mb-3 flex justify-between items-start">
                      <div className="text-[18px] text-violet-700 font-bold">
                        {item.price}
                        {item.originalPrice && (
                          <span className="text-gray-500 line-through text-sm ml-2">
                            {item.originalPrice}
                          </span>
                        )}
                        <br />
                        <p className="uppercase text-xs text-gray-600 font-normal">
                          (For Full Batch)
                        </p>
                      </div>
                      {item.discount && (
                        <div className="text-green-700 text-xs bg-green-100 px-2 py-2 font-bold rounded w-fit mt-1">
                          {item.discount}
                        </div>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <button className="flex-1 border border-violet-600 text-violet-600 text-lg font-semibold rounded py-1">
                        EXPLORE
                      </button>
                      <button className="flex-1 bg-violet-700 text-white text-lg font-semibold rounded py-1">
                        BUY NOW
                      </button>
                    </div>
                  </div>

                  {/* ONLINE Badge */}
                  <Image
                    src={onlineBadgeIcon}
                    alt="online"
                    className="absolute -top-4 -left-2 w-24"
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-100 hover:bg-blue-200 flex items-center px-5 py-3 rounded-sm font-semibold">
          View All Batches{" "}
          <Image src={arrowLogo} alt="arrow logo" className="w-3 ms-1" />{" "}
        </button>
      </div>
    </div>
  );
};

export default AllBachesTabs;
