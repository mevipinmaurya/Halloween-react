import React from 'react'
import Buttons from './Buttons'

const Cards = ({image, title, oldPrice, newPrice}) => {
    return (
        <>
            <div className='rounded-md hover:shadow-lg cursor-pointer'>
                <img className='h-80 w-80 rounded-md hover:scale-95' src={image} alt="" />
                <div className="rating mt-4">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <h1 className='creepster-regular text-white text-[25px] font-bold'>{title}</h1>
                <span className='text-orange-800 text-lg font-semibold line-through'>${oldPrice}</span> <span className='text-orange-500 font-semibold'>${newPrice}</span>
                <Buttons btnName={"ADD TO CART"} />
            </div>
        </>
    )
}

export default Cards