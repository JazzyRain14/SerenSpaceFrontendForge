import React from 'react'
import Frame38 from '../assets/Images/Frame38.png'
import invertComma from '../assets/Images/invertComma.png'
const Section7 = () => {
    return (
        <div className='h-full w-full py-10 px-[28px]'>
            <h1 className='font-LibreBold text-[24px] mb-6 text-center'>You are not alone. Here’s what other patients say</h1>
            <div className=' grid grid-cols-2 gap-5 '>
                <div className='col-span-1 w-[220px] h-[200px] p-2 border rounded-[2rem] border-brown-black flex flex-col items-center justify-center'>
                    <div className='w-full'>
                        <img src={invertComma} alt="" />
                    </div>
                    <img src={Frame38} alt="" className=' w-[100px] grid place-content-center' />
                    <p className='text-sm font-RedHat'>SerenSpace has transformed my life. The personalized therapy plans and 24/7 support have helped me manage my anxiety. I'm incredibly grateful. - Sarah T.</p>
                </div>
                <div className='col-span-1 w-[220px] h-[200px] p-2 border rounded-[2rem] border-brown-black flex flex-col items-center justify-center'>
                    <div className='w-full'>
                        <img src={invertComma} alt="" />
                    </div>
                    <img src={Frame38} alt="" className='grid w-[100px] place-content-center' />
                    <p className='text-sm font-RedHat'>SerenSpace was a game-changer. The professional therapists and flexible support made all the difference." - James M..</p>
                </div>
            </div>
            <div className='my-8 flex items-center justify-center w-full'>
                <button className='border-2 border-primary py-3 px-5 text-sm rounded-full font-RedHat'>
                    See more
                </button>
            </div>

            <div className='flex justify-center items-center'>
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