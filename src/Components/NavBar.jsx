import React from 'react'
import Logo from '../assets/Images/Logo.png'
const NavBar = () => {
    return (
        <>
            <section className='flex items-center justify-between bg-secondary/[.05] relative top-2 w-full border-2 border-black'>
                <div>
                    <img src={Logo} alt="" className='border border-black h-20' width={200} />
                </div>
                <div>
                    <ul className='flex font-RedHat items-center gap-x-6'>
                        <li>
                            <a className='font-semibold tracking-widest relative group' href="">Home
                                <div className='absolute w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform' />
                            </a>
                        </li>
                        <li>
                            <a className='font-semibold tracking-widest relative group' href="">About
                                <div className='absolute w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform' />
                            </a>
                        </li>
                        <li>
                            <a className='font-semibold tracking-widest relative group' href="">Services
                                <div className='absolute w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform' />
                            </a>
                        </li>
                        <li>
                            <a className='font-semibold tracking-widest relative group' href="">Resources
                                <div className='absolute w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform' />
                            </a>
                        </li>
                        <li>
                            <a className='font-semibold tracking-widest relative group' href="">Contact Us
                                <div className='absolute w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-x-6 mr-2'>
                    <button className='hover:text-primary font-RedHat'>Log In</button>
                    <button className='bg-primary py-3 px-5 rounded-full font-RedHat text-white'>Get Started</button>
                </div>
            </section>
        </>
    )
}

export default NavBar