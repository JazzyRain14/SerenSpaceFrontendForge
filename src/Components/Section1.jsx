import React from 'react'
import NavBar from './NavBar'
import Frame49 from '../assets/Images/Frame 49.png'
import Scope from '../assets/Images/Search.png'
const Section1 = () => {
    return (
        <div className='h-screen'>
            <section className='bg-hero-pattern h-full w-full bg-no-repeat bg-center px-[78px] bg-cover'>
                <NavBar />
                <div className='flex flex-row justify-between my-5 gap-10 items-center'>
                    <div className='w-[670px]'>
                        <h1 className='text-[60px] font-LibreBold mb-2.5 break-normal  leading-[85px]'>
                            Find Your Peace of Mind with SerenSpace
                        </h1>
                        <p className=' text-xl font-RedHat mb-2.5 font-medium leading-8'>
                            Join our supportive community for expert mental health resources. Access personalized therapy, self-care tips, and wellness tools.
                        </p>
                        <button className='bg-primary p-4 rounded-full text-lg text-white'>
                            First Session Free
                        </button>
                        <div className='flex items-center mt-8 bg-white px-2 py-2 rounded-full justify-between'>
                            <select name="mySelect" className=' pr-6 outline-none'>
                                <option value="Therapist">Therapist</option>
                            </select>
                            
                            <input
                                type="text"
                                placeholder='City, Zip Code'
                                className='border-l border-ashh pl-2 ml-2 outline-none flex-1'
                                
                            />
                            <button className='flex items-center gap-2 bg-primary py-4 px-5 rounded-full text-white'>
                                Search
                                <img src={Scope} alt="" width={20} />
                            </button>
                        </div>
                    </div>
                    <div className='w-[550px]'>
                        <img src={Frame49} alt="" />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Section1