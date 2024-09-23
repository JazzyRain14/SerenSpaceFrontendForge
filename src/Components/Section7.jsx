import React from 'react'
import Frame38 from '../assets/Images/Frame38.png'
import invertComma from '../assets/Images/invertComma.png'
const Section7 = () => {
    return (
        <div className='h-full w-full py-10 px-[28px]'>
            <h1 className='font-LibreBold text-[24px] max-sm:text-[20px] mb-6 text-center'>You are not alone. Here’s what other patients say</h1>
            {/* cards */}
            <div className='flex max-sm:flex-col justify-center items-center max-sm:gap-5 gap-10'>
                <div className='w-[350px] max-sm:w-full h-[220px] p-2 border rounded-[2rem] border-brown-black flex flex-col items-center'>
                    <div className='w-full'>
                        <img src={invertComma} alt="" />
                        <div className=' grid place-content-center'>
                            <img src={Frame38} alt="" className=' w-[150px]' />
                        </div>
                    </div>
                    <p className='text-lg flex-1 flex justify-center items-center font-RedHat max-sm:text-sm max-sm:leading-5'>SerenSpace has transformed my life. The personalized therapy plans and 24/7 support have helped me manage my anxiety. I'm incredibly grateful. - Sarah T.</p>
                </div>
                <div className='w-[350px] max-sm:w-full h-[220px] p-2 border rounded-[2rem] border-brown-black flex flex-col items-center'>
                    <div className='w-full'>
                        <img src={invertComma} alt="" />
                        <div className=' grid place-content-center'>
                            <img src={Frame38} alt="" className=' w-[150px]' />
                        </div>
                    </div>
                    <p className='text-lg flex-1 flex justify-center items-center font-RedHat max-sm:text-sm max-sm:leading-5'>SerenSpace was a game-changer. The professional therapists and flexible support made all the difference." - James M..</p>
                </div>
            </div>
            <div className='my-8 flex items-center justify-center w-full'>
                <button className='border-2 border-primary py-3 px-5 text-lg font-semibold max-sm:text-sm rounded-full font-RedHat'>
                    See more
                </button>
            </div>

            <div className='flex tablet:hidden justify-center items-center'>
                <div className='w-[400px] p-4 rounded-3xl bg-secondary border-brown-black flex flex-col items-center justify-center'>
                    <h1 className='text-[22px] font-LibreBold text-center leading-8'>Lets talk about your special needs</h1>
                    <p className='text-center text-sm font-RedHat font-medium'>Get the latest in mental health, free events, future updates and more</p>
                    <div className='flex justify-between gap-x-4 items-center'>
                        <button className='hover:text-primary py-3 px-5 font-RedHat'>Log In</button>
                        <button className='bg-primary py-3 px-5 rounded-full font-RedHat text-white'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section7