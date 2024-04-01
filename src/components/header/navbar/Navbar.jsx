/* eslint-disable react/prop-types */
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar = ({ children }) => {
    const navLinks = <>
        <li className="flex gap-3"><a>Products <IoMdArrowDropdown className="text-2xl mt-1" /></a></li>
        <li className="flex gap-3"><a>Docs <IoMdArrowDropdown className="text-2xl mt-1" /></a></li>
        <li><a>Customers</a></li>
        <li><a>Pricing</a></li>
        <li><a>Blog</a></li>
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Navbar */}
                <div className=" container mx-auto navbar flex items-center justify-between">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className=" px-2 mx-2 text-red-500 font-medium text-xl md:text-2xl lg:text-3xl">RevenueCat</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal text-base">
                            {/* Navbar menu content here */}
                            {navLinks}
                        </ul>
                    </div>
                    <div className="w-full md:w-auto lg:w-auto flex items-center justify-center gap-3 md:gap-4 lg:gap-4">
                        <button className="uppercase">Login</button>
                        <button className="px-4 py-2 bg-[#566cd9] uppercase rounded-full text-white">Sign Up</button>
                    </div>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;