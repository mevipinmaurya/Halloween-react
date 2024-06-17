import Cards from './Cards'
import CommonTitles from './CommonTitles'

const CommonCard = () => {
    return (
        <div className="w-100 flex justify-center mb-12">
            <div className='w-[92%] flex justify-center flex-col items-center pb-32 border-b-2 border-slate-700'>
                <CommonTitles title={"MOST DELICIOUS"} heading={"CANDIES & COOKIES"} />

                <div className='w-full flex justify-around flex-wrap gap-7'>
                    <Cards image={"./product01.jpg"} title={"BOO-TIFUL BUTTERCOOKIES"} oldPrice={29.00} newPrice={21.00} />
                    <Cards image={"./product-02.jpg"} title={"GHOSTLY GINGERSNAP"} oldPrice={32.00} newPrice={27.00} />
                    <Cards image={"./product-03.jpg"} title={"ZOMBIE ZEST COOKIES"} oldPrice={43.00} newPrice={38.00} />
                </div>

            </div>
        </div>
    )
}

export default CommonCard