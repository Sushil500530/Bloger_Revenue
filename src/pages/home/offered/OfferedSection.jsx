
const OfferedSection = () => {
    return (
        <div className="bg-black text-white py-20 ">
            <div className="container mx-auto flex items-center justify-between flex-col lg:flex-row gap-12 p-5">
                <div className="w-ful lg:w-[40%] flex-1">
                    <h1 className="text-5xl mb-5 lg:mb-10">Ready to get Started?</h1>
                    <div className="flex items-center gap-3">
                        <button className="btn px-6 bg-blue-600 text-white uppercase text-base rounded-full border-none hover:text-black">sign up for free</button> <br />
                        <span className="border-b-2 border-b-red-500 text-base uppercase font-medium">Task to sales</span>
                    </div>
                </div>
                <div className="w-ful lg:w-[35%]">
                    <h1 className="text-[22px]">"At any level of scale, RevenueCat<br />  just works" </h1>
                    <div className="flex items-center gap-5 my-5">
                        <img src="" alt="profile-image" className="w-12 h-12 rounded-full bg-white" />
                        <p className="text-xl">David Smith, Widgetsmith</p>
                    </div>
                    <span className="border-b-2 border-b-red-500 text-base font-medium uppercase">Read case study</span>
                </div>
            </div>
        </div>
    );
};

export default OfferedSection;