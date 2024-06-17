import Buttons from "./Buttons"
import CommonTitles from "./CommonTitles"


const Banner = () => {
    return (
        <div className="w-100 flex justify-center mb-5 md:mb-10">
            <div className='w-[92%] flex justify-center flex-col items-center pb-16 md:pb-32 border-b-2 border-slate-700'>
                <CommonTitles title={"SWEETS"} heading={"HALLOWEEN CANDY PACK"} />

                <div className="w-full flex flex-col justify-center items-center lg:justify-between lg:flex-row">
                    <div className="flex flex-col p-10 pl-15 pr-15 order-2 lg:order-1">
                        <h1 className="text-white font-bold text-[30px] creepster-regular">a sprinkle of magic to every trick- <br /> or-treat adventure</h1>
                        <p className="text-slate-400 mt-5 font-semibold mb-8">From the classic to the creatively creepy, Halloween candies remind us that the true essence of this holiday lies in the delightful experience of indulging in sweet surprises with friends and family.</p>
                        <Buttons btnName={"SHOP NOW"} />
                    </div>
                    <div className="flex p-10 order-1 lg:order-1">
                        <img className="rounded-3xl" src="./product-0010.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner