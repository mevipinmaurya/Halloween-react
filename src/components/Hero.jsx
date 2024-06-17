import React from 'react'
import Buttons from './Buttons'

const Hero = () => {
    return (
        <div className='w-100 mb-32'>
            <div className='w-[96%] m-auto mt-2 mb-2 rounded-xl'>
                <div className="hero min-h-screen rounded-3xl" style={{ backgroundImage: 'url(./hero.jpg)', backgroundPosition: "center", backgroundSize: "cover", overflow: "hidden" }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="">
                        <div className="w-[50%] ml-10 flex justify-items-start flex-col">
                            <h1 className="text-white font-bold md:text-xl mb-4 text-sm">NEW COLLECTION</h1>
                            <h1 className="text-white font-bold text-[40px] md:text-[90px] leading-none creepster-regular">HALLOWEEN <br /> DECORATIONS</h1>
                            <p className="text-slate-400 mt-5 font-semibold">Whether you prefer the charm of classic Halloween decor or the thrill of modern and innovative designs, these decorations invite you to join in the celebration of all things eerie, enigmatic, and enchanting.</p>
                            <Buttons btnName={"SHOP NOW"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero