import { FaGithub, FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="mt-12 py-20 px-5 bg-[#f9fafc]">
            <div className="grid grid-cols-12 gap-4 container mx-auto">
                <div className="col-span-12 md:col-span-4 lg:col-span-4 w-full h-full flex flex-col items-center justify-center">
                    <div className=" flex items-center lg:items-start pl-10 justify-between  flex-col w-full h-full gap-14 md:gap-0 lg:gap-0 py-5">
                        <h1 className=" px-2 mx-2 text-red-500 font-medium text-xl md:text-2xl lg:text-3xl">RevenueCat</h1>
                        <div className="space-y-4">
                            <div className="flex items-center gap-5">
                                <h1 className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"><FaGithub className="text-4xl" /></h1>
                                <h1 className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"><FaTwitter className="text-2xl" /></h1>
                            </div>
                            <p>&copy; 2024 RevenueCat</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-2 flex items-center md:items-start lg:items-start flex-col w-full h-auto py-5 space-y-4">
                    <h1 className="text-2xl font-bold">Resources</h1>
                    <a href="#" className="link link-hover">About Us</a>
                    <a href="#" className="link link-hover">Blog</a>
                    <a href="#" className="link link-hover">Careers</a>
                    <a href="#" className="link link-hover">Contact</a>
                    <a href="#" className="link link-hover">Customers</a>
                    <a href="#" className="link link-hover">Help Center</a>
                    <a href="#" className="link link-hover">Podcast</a>
                </div>
                <div className="col-span-12 md:col-span-3 lg:col-span-2 flex items-center md:items-start lg:items-start flex-col w-full h-auto py-5 space-y-3">
                    <h1 className="text-2xl font-bold">Documentation</h1>
                    <a href="#" className="link link-hover">Quickstart Guide</a>
                    <a href="#" className="link link-hover">System Status</a>
                    <a href="#" className="link link-hover">SDKs</a>
                    <a href="#" className="link link-hover">API Reference</a>
                    <a href="#" className="link link-hover">Sample Apps</a>
                    <a href="#" className="link link-hover"> Migration Guide</a>
                    <a href="#" className="link link-hover">View All Docs</a>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-2 flex items-center md:items-start  md:w-1/2 lg:w-full mx-auto  lg:items-start flex-col w-full h-auto py-5 space-y-3">
                    <h1 className="text-2xl font-bold">Product</h1>
                    <a href="#" className="link link-hover">Why RevenueCat?</a>
                    <a href="#" className="link link-hover">Integrations</a>
                    <a href="#" className="link link-hover">For Engineering Teams</a>
                    <a href="#" className="link link-hover">For Marketing Teams</a>
                    <a href="#" className="link link-hover">For Product Teams</a>
                    <a href="#" className="link link-hover">Apple Receipt Chacker</a>
                    <a href="#" className="link link-hover">Pricing</a>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-2 flex items-center md:items-start md:w-1/2 lg:w-full mx-auto  lg:items-start flex-col w-full h-auto py-5 space-y-3">
                    <h1 className="text-2xl font-bold">Legal</h1>
                    <a href="#" className="link link-hover">Privacy Policy</a>
                    <a href="#" className="link link-hover">Terms and Conditions</a>
                    <a href="#" className="link link-hover">GDPR</a>
                    <a href="#" className="link link-hover">Fair Billing Policy</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;