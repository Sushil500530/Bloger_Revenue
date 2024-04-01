
const Banner = () => {
    return (
        <div className="bg-[#f9fafc] w-full h-auto">
            <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center pt-12 gap-8 w-full h-auto px-5 pb-12">
                <div className="w-full h-[50vh] lg:w-1/2">
                    <img src="https://i.ibb.co/MNyjjYh/banner.png" alt="banner image" className="w-full h-full" />
                </div>
                <div className="w-full h-full lg:w-1/2 mt-14">
                    <div>
                        <span className="px-5 py-1 border-2 border-green-600 rounded-full font-bold text-green-600">Latest Post</span>
                        <h1 className="text-[1.5em] md:text-[2em] lg:text-4xl font-bold my-5">A Practical Guide to Apple <br /> Search Ads</h1>
                        <p className="text-[17px] font-medium">Why it's a channel Worth exploring to grow your app</p>
                    </div>
                    <div className="flex items-center gap-3 mt-[15%]">
                        <img src="https://i.ibb.co/DV24jYN/male.jpg" alt="person" className="w-12 h-12 bg-black rounded-full" />
                        <div>
                            <h1 className="text-[18px] font-bold">Thomas Petit</h1>
                            <p>April 02, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;