import React from "react";
import Pro from "../assets/Images/Pro.png";
import Calendar from "../assets/Images/Calendar.png";
import Questionmark from "../assets/Images/Questionmark.png";

const Section5 = () => {
    return (
        <div className='h-full w-full py-10 px-[28px]'>
            <hr className="bg-brown-black my-10" />
            <div className='flex justify-around gap-[3rem] max-sm:gap-2 w-full'>
                <div className='flex flex-col gap-10 w-1/2 px-4 max-md:px-2 max-md:gap-5 max-sm:gap-2 max-sm:p-0'>
                    <h1 className='font-semibold font-LibreBold text-4xl max-md:text-2xl max-sm:text-lg'>
                        Professional and Credentialed Therapist who you can trust
                    </h1>
                    <div className='flex flex-col gap-4'>
                        <p className='font-semibold max-sm:text-sm max-sm:leading-4 font-RedHat'>
                            At SerenSpace, we connect you with qualified, experienced, and compassionate therapists dedicated to your mental well-being. Trust that your mental health journey is in capable hands, ensuring you receive the best support and guidance.
                        </p>
                        <p className='font-semibold max-sm:text-sm max-sm:leading-4 font-RedHat'>
                            With our therapists, you can expect the same level of professionalism and quality as you would from an in-office therapist, with the added convenience of flexible communication options.
                        </p>
                    </div>
                </div>

                <div className='border-2 max-sm:border border-brown-black' />

                <div className='flex flex-col gap-10 w-1/2 px-4 max-md:px-2 max-md:gap-5 max-sm:gap-2 max-sm:p-0'>
                    <h1 className='font-semibold font-LibreBold text-4xl max-md:text-2xl max-sm:text-lg'>
                        With the quality of professionalism we offer, you get:
                    </h1>
                    <div className='flex flex-col gap-3 max-sm:gap-0'>
                        <p className='flex items-center text-brown-black gap-2 text-xl max-sm:text-sm'>
                            <span><img src={Pro} alt="" width={30} /></span>
                            Personalized Therapy Plans
                        </p>
                        <p className='flex items-center text-brown-black gap-2 text-xl max-sm:text-sm'>
                            <span><img src={Calendar} alt="" width={30} /></span>
                            Expert Counsellors
                        </p>
                        <p className='flex items-center text-brown-black gap-2 text-xl max-sm:text-sm'>
                            <span><img src={Questionmark} alt="" width={30} /></span>
                            24/7 Support
                        </p>
                    </div>
                    <button className='bg-primary p-5 max-sm:p-2 w-fit rounded-full font-RedHat text-white'>
                        Get matched with a therapist
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section5;
