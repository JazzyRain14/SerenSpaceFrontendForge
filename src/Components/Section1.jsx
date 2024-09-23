import React from 'react'
import NavBar from './NavBar'
import Frame49 from '../assets/Images/Frame 49.png'
import Scope from '../assets/Images/Search.png'
const Section1 = () => {
    return (
        <section className='flex flex-col bg-hero-pattern h-auto w-full bg-no-repeat bg-center max-lg:px-[28px] max-sm:px-[10px] lg:px-[58px] bg-cover py-5'>
            <NavBar />
            <div className='flex max-tablet:flex-col-reverse flex-row justify-between h-full my-5 max-md:gap-6 gap-10 items-center'>
                {/* Text */}
                {/* <div className='flex'> */}
                <div className='flex-1 max-tablet:text-center'>
                    <h1 className='text-[60px] max-lg:text-[45px] max-md:text-[35px] font-LibreBold mb-2.5 leading-[85px] max-lg:leading-[40px]'>
                        Find Your Peace of Mind with SerenSpace
                    </h1>
                    <p className='max-lg:text-[16x] lg:text-[20px] font-RedHat mb-2.5 font-medium max-md:leading-6 min-md:leading-8'>
                        Join our supportive community for expert mental health resources. Access personalized therapy, self-care tips, and wellness tools.
                    </p>
                    <button className='bg-primary max-md:p-2.5 md:p-4 rounded-full md:text-lg text-white'>
                        First Session Free
                    </button>
                </div>

                {/* </div> */}
                {/* image */}
                <div className='flex items-center h-full w-1/2 max-tablet:w-full'>
                    <img src={Frame49} alt="" className='w-full' />
                </div>
            </div>
            {/* input */}
            <div className=' flex tablet:w-1/2 max-tablet:w-full items-center bg-white px-2 md:py-2 max-md:py-1 rounded-full justify-between'>
                <select name="mySelect" className=' pr-6 max-sm:pr-0 outline-none'>
                    <option value="Therapist">Therapist</option>
                </select>

                <input
                    type="text"
                    placeholder='City, Zip Code'
                    className='border-l border-ashh px-2 max-sm:px-0 ml-2 outline-none flex-1'

                />
                <button className='flex items-center justify-center gap-2 max-md:gap-1 bg-primary py-4 px-5 max-sm:px-3 max-sm:text-sm max-sm:py-2 rounded-full text-white'>
                    <span className='max-sm:hidden'>Search</span>
                    <img src={Scope} alt="" className='max-md:w-[16px] md:w-[20px]' />
                </button>
            </div>

        </section>
    )
}

export default Section1