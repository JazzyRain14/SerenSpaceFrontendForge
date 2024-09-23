import React from "react";
import Therapist1 from "../assets/Images/Therapist1.png";
import Therapist2 from "../assets/Images/Therapist2.png";
import Therapist3 from "../assets/Images/Therapist3.png";
import Therapist4 from "../assets/Images/Therapist4.png";
const Section6 = () => {
    return (
        <div className='h-full w-full py-10 px-[28px] bg-secondary'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='w-[65%] font-LibreBold max-sm:text-[18px] text-[28px]'>Whatever the challenge is, it can be solved.</h1>
                <button className='bg-primary py-3 px-5 max-sm:px-3 max-sm:text-sm rounded-full font-RedHat text-white'>Explore all</button>
            </div>
            <div className='w-full grid grid-cols-2 place-items-center lg:grid-cols-4 gap-5'>
                {/* card */}
                <div className='flex flex-col max-w-[300px]'>
                    <img src={Therapist1} alt="" className='w-full' />
                    <footer className='relative  min-h-[200px]'>
                        <h1 className='font-LibreRegular text-2xl font-semibold'>Anxiety</h1>
                        <p className='font-RedHat leading-5'>a feeling of worry, nervousness, or unease, often something with an uncertain outcome.</p>
                        <a className='absolute bottom-0 text-sm font-RedHat'>Learn more</a>
                    </footer>
                </div>
                {/* card */}
                <div className='flex flex-col max-w-[300px]'>
                    <img src={Therapist2} alt="" className='w-full' />
                    <footer className='min-h-[200px] relative'>
                        <h1 className='font-LibreRegular text-2xl font-semibold'>Personality Disorders</h1>
                        <p className='font-RedHat leading-5'>a feeling of worry, nervousness, or unease, often something with an uncertain outcome.</p>
                        <a className='text-sm font-RedHat absolute bottom-0'>Learn more</a>
                    </footer>
                </div>
                {/* card */}
                <div className='flex flex-col max-w-[300px]'>
                    <img src={Therapist3} alt="" className='w-full' />
                    <footer className='relative  min-h-[200px]'>
                        <h1 className='font-LibreRegular text-2xl font-semibold'>Depression Disorders</h1>
                        <p className='font-RedHat leading-5 mb-5'>A persistent feeling of sadness and loss of interest that can interfere with daily functioning.</p>
                        <a className='text-sm font-RedHat absolute bottom-0'>Learn more</a>
                    </footer>
                </div>
                {/* card */}
                <div className='flex flex-col max-w-[300px]'>
                    <img src={Therapist4} alt="" className='w-full' />
                    <footer className='relative min-h-[200px]'>
                        <h1 className='font-LibreRegular text-2xl font-semibold'>Mood Swing</h1>
                        <p className='font-RedHat leading-5 mb-5'>A sudden or extreme change in a person's emotional state, ranging from feeling very happy to feeling very sad or irritable.</p>
                        <a className='text-sm font-RedHat absolute bottom-0'>Learn more</a>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Section6;
