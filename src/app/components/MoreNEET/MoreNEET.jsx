import { fontReddit } from "@/app/config/fontsProvider";
import React from "react";
import Image from "next/image";
import buttonIcon1 from "../../../assests/icons/icon-1.jpg";
import buttonIcon2 from "../../../assests/icons/icon-2.jpg";
import buttonIcon3 from "../../../assests/icons/icon-3.jpg";
import buttonIcon4 from "../../../assests/icons/icon-4.jpg";

const cards = [
  {
    image: buttonIcon1,
    title: "PW AI GURU",
    bg: "bg-blue-100",
    iconBg: "bg-white",
  },
  {
    image: buttonIcon2,
    title: "PW NCERT App",
    bg: "bg-red-100",
    iconBg: "bg-white",
  },
  {
    image: buttonIcon3,
    title: "NEET Mentorship",
    bg: "bg-green-100",
    iconBg: "bg-white",
  },
  {
    image: buttonIcon4,
    title: "NEET Power Batch",
    bg: "bg-blue-100",
    iconBg: "bg-white",
  },
];


 const examData = {
    "Exam Name": "NEET UG 2026",
    "Conducting Body": "National Testing Agency (NTA)",
    "Exam Level": "National-level",
    "Exam Mode": "Offline (Pen and Paper)",
    "Courses Offered": "MBBS, BDS, AYUSH, B.V.Sc, BSc Nursing",
    "Subjects": "Physics, Chemistry, Biology (Botany + Zoology)",
    "Total Questions": "180",
    "Total Marks": "720",
    "Exam Duration": "3 hours",
    "Marking Scheme": "+4 for correct, -1 for incorrect",
    "Exam Frequency": "Once a year",
    "Official Website": "The official NEET 2026 website has not been announced yet."
  };

const MoreNEET = () => {
  return (
    <div
      className={` ${fontReddit.weight} lg:max-w-6xl md:max-w-3xl max-w-sm mx-auto md:px-3 px-2 `}
    >
      <h1 className="text-3xl font-bold text-center py-5">More in NEET</h1>
      {/* ---------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-10 my-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className={` group flex items-center justify-between p-4 rounded-xl shadow-md ${card.bg}`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${card.iconBg}`}
              >
                <Image src={card.image} alt="icon" className="w-6 h-6" />
              </div>
              <h2 className="font-semibold text-sm sm:text-base">
                {card.title}
              </h2>
            </div>
            {/* <div className="text-xl text-gray-500">{">"}</div> */}
            {/* Arrow */}
            <div className=" text-gray-500 text-3xl group-hover:translate-x-1.5 group-hover:duration-300">
              <span>&#8250;</span> {/* Right arrow symbol */}
            </div>
          </div>
        ))}
      </div>
      
      <div>
        <h1 className="font-bold text-3xl mb-4">NEET Exam 2026 Overview</h1>
        <p className="text-gray-700">
          The National Eligibility cum Entrance Test (NEET) 2026 is a
          national-level entrance exam conducted by the National Testing Agency
          (NTA) for admission to undergraduate medical, dental, and AYUSH
          courses like MBBS, BDS, BAMS, BHMS, etc. It is mandatory for students
          who wish to take admission in government and private medical colleges
          across India. The NEET exam is held once a year in offline
          (pen-and-paper) mode and includes questions from Physics, Chemistry,
          and Biology based on the Class 11 and 12 NCERT syllabus. The NEET 2026
          exam will be conducted in May 2026, and candidates must qualify it to
          participate in All India Quota (AIQ) and State Quota counselling
          rounds
        </p>
      </div>
      {/* ----------------table section ------------------------ */}
      <div className="overflow-x-auto p-4 mt-5">
      <table className="w-full mx-auto border-collapse border-2 border-black text-sm">
        <thead>
          <tr className="bg-[#a5cfdb] text-center font-semibold">
            <th colSpan="2" className="border-2 border-black p-2">
              NEET Exam 2026 Highlights
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(examData).map(([key, value], index) => (
            <tr key={index} className=" text-center">
              <td className="border-2 border-black font-medium w-1/3">{key}</td>
              <td className="border-2 border-black p-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* -------------------------- */}
    <div>
 <h1 className="font-bold text-3xl mb-4">NEET 2026 Syllabus</h1>
        <p className="text-gray-700">
         The National Medical Commission (NMC) has not officially announced the NEET 2026 Syllabus yet. Currently, the syllabus for NEET 2025 is being followed, which is the same as the syllabus used in NEET 2024 with no major changes. Students preparing for NEET 2026 can start their preparation based on the NEET 2025 syllabus until the official 2026 syllabus is released. The syllabus includes topics from Class 11 and Class 12 Physics, Chemistry, and Biology, aligned with the standard NEET exam format. Understanding the detailed syllabus provided by the NMC is crucial for thorough preparation. 
        </p>
    </div>
    </div>
  );
};

export default MoreNEET;
