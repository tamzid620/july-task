import React from 'react';
import Image from 'next/image';
import verifiedIcon from "../../../assests/icons/verified.png"
import googlePlayImage from "../../../assests/images/google-play.jpg"
import applePayImage from "../../../assests/images/apple-pay.jpg"
import thumbsImage from "../../../assests/images/thumbs.jpg"
import { fontReddit } from '@/app/config/fontsProvider';

const JoinToday = () => {
    return (
     <div className={` ${fontReddit.weight}  bg-[#ece6fd] rounded-xl lg:max-w-6xl md:max-w-3xl max-w-sm mx-auto md:px-3 px-2 my-10`}>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 lg:px-8 py-10  md:pb-10 pb-56">
                {/* Left Section */}
                <div className="flex-1 space-y-5">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Join <span className="text-[#4a1fb8]">15 Million</span> students on the app today!
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <Image src={verifiedIcon} alt="Verified" width={20} height={20} />
                            <span className="text-gray-800">Live & recorded classes available at ease</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Image src={verifiedIcon} alt="Verified" width={20} height={20} />
                            <span className="text-gray-800">Dashboard for progress tracking</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Image src={verifiedIcon} alt="Verified" width={20} height={20} />
                            <span className="text-gray-800">Millions of practice questions at your fingertips</span>
                        </li>
                    </ul>
                    <div className="flex gap-4 pt-4">
                        <Image src={googlePlayImage} alt="Google Play" width={140} height={45} className="rounded-md cursor-pointer" />
                        <Image src={applePayImage} alt="App Store" width={140} height={45} className="rounded-md cursor-pointer" />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-shrink-0">
                    <Image src={thumbsImage} alt="App with person" width={220} height={320} 
                    className="object-contain absolute bottom-0 lg:right-8 md:right-1 right-12" />
                </div>
            </div>
        </div>
    );
};

export default JoinToday;