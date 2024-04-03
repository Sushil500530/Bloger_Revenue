
const Footer = () => {
    return (
        <div className="my-12 py-12 px-5 bg-[#f9fafc]">
            <div className="grid grid-cols-12 gap-4 container mx-auto">
                <div className="col-span-4 w-full h-44"></div>
                <div className="col-span-2 flex items-start flex-col w-full h-auto py-5">
                    <h1 className="text-2xl font-bold">Resources</h1>
                    <a href="#" className="link link-hover">About Us</a>
                    <a href="#" className="link link-hover">Blog</a>
                    <a href="#" className="link link-hover">Careers</a>
                    <a href="#" className="link link-hover">Contact</a>
                    <a href="#" className="link link-hover">Customers</a>
                    <a href="#" className="link link-hover">Help Center</a>
                    <a href="#" className="link link-hover">Podcast</a>
                </div>
                <div className="col-span-2 flex items-start flex-col w-full h-auto py-5">
                <h1 className="text-2xl font-bold">Documentation</h1>
                    <a href="#" className="link link-hover">Quickstart Guide</a>
                    <a href="#" className="link link-hover">System Status</a>
                    <a href="#" className="link link-hover">SDKs</a>
                    <a href="#" className="link link-hover">API Reference</a>
                    <a href="#" className="link link-hover">Sample Apps</a>
                    <a href="#" className="link link-hover"></a>
                    <a href="#" className="link link-hover">Podcast</a>
                </div>
                <div className="col-span-2 flex items-start flex-col w-full h-auto py-5">
                <h1 className="text-2xl font-bold">Product</h1>
                    <a href="#" className="link link-hover">Why RevenueCat?</a>
                    <a href="#" className="link link-hover">Integrations</a>
                    <a href="#" className="link link-hover">For Engineering Teams</a>
                    <a href="#" className="link link-hover">For Marketing Teams</a>
                    <a href="#" className="link link-hover">For Product Teams</a>
                    <a href="#" className="link link-hover">Apple Receipt Chacker</a>
                    <a href="#" className="link link-hover">Pricing</a>
                </div>
                <div className="col-span-2 flex items-start flex-col w-full h-auto py-5">
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