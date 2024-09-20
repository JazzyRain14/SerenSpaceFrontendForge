import React from 'react'
import Logo from '../assets/Images/Logo.png'
import barMenu from '../assets/Images/mingcute_menu-line.png'
const NavBar = () => {
    return (
        <>
            <section className='flex items-center justify-between bg-secondary/[.05] w-full'>
                <img src={Logo} alt="" className='lg:w-[200px] max-lg:w-[180px]' />

                <ul className='flex max-tablet:hidden font-RedHat justify-center items-center lg:gap-x-6 max-lg:gap-x-2'>
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

                <div className='flex max-tablet:hidden items-center gap-x-3.5 mr-2'>
                    <button className='hover:text-primary font-RedHat'>Log In</button>
                    <button className='bg-primary py-3 px-5 rounded-full font-RedHat text-white'>Get Started</button>
                </div>

                <div className='hidden max-tablet:block'>
                    <img src={barMenu} alt="" />
                </div>
            </section>
        </>
    )
}

export default NavBar