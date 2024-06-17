import React from 'react'

const CommonTitles = ({title, heading}) => {
    return (
        <>
            <h2 className='text-orange-600 font-semibold'>{title}</h2>
            <h1 className='text-white font-bold text-[40px] md:text-[70px] creepster-regular mt-3'>{heading}</h1>
            <div className='w-20 h-[2px] bg-slate-700 rounded-lg mb-10'></div>
        </>
    )
}

export default CommonTitles