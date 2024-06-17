
const Navbar = () => {
    return (
        <>
            <nav className="bg-neutral-950 w-100 h-[80px] flex justify-between items-center">
                <div className="flex items-center ml-4">
                    <img width="32" height="32" src="https://websitedemos.net/halloween-shop-04/wp-content/uploads/sites/1398/2023/10/logo-icon.svg" className="cursor-pointer custom-logo" alt="Halloween Shop" decoding="async" />
                    <h2 className="text-white font-bold text-2xl ml-3 cursor-pointer creepster-regular">HALLOWEEN SHOP</h2>
                </div>
                <div className="flex items-center">
                    <ul className="hidden md:flex text-white text-xl mr-2 ">
                        <li className="mr-4 cursor-pointer hover:text-orange-400">Home</li>
                        <li className="mr-4 cursor-pointer hover:text-orange-400">Shop</li>
                        <li className="mr-4 cursor-pointer hover:text-orange-400">About</li>
                        <li className="mr-4 cursor-pointer hover:text-orange-400">Contact</li>
                    </ul>
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator mr-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item hover:text-orange-500">0</span>
                                </div>
                            </div>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">0 Items</span>
                                    <span className="text-info">Subtotal: $0.00</span>
                                    <div className="card-actions">
                                        <button className="btn bg-orange-500 btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <span className="text-3xl font-bold mr-3 ml-3 cursor-pointer text-white">&#9776;</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar