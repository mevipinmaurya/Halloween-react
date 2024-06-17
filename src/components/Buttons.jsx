import React from 'react'

const Buttons = ({btnName}) => {
    return (
        <div>
            <button className="btn bg-orange-600 outline-none border-none text-white mt-5 w-48 hover:bg-orange-500 font-bold">{btnName}</button>
        </div>
    )
}

export default Buttons