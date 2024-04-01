
const Banner = () => {
    return (
        <div className="container mx-auto flex items-start justify-center my-12 gap-8">
            <div className="w-full h-[50vh] lg:w-1/2">
                <img src="https://i.ibb.co/MNyjjYh/banner.png" alt="banner image" className="w-full h-full" />
            </div>
            <div className="w-full h-auto lg:w-1/2 mt-12">
                <span className="px-5 py-1 border-2 border-green-600 rounded-full font-bold text-green-600">Latest Post</span>
                <h1 className="text-4xl font-bold my-5">A Practical Guide to Apple <br /> Search Ads</h1>
                <p className="text-[17px] font-medium">Why it's a channel Worth exploring to grow your app</p>
            </div>
        </div>
    );
};

export default Banner;