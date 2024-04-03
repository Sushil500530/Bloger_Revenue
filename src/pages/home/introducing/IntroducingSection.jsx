import introImage from "../../../assets/image/intro.png"


const IntroducingSection = () => {
    return (
        <div className="w-full h-auto">
            <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center pt-12 gap-10 w-full h-auto pb-12">
                <div className="w-full h-[40vh] lg:w-1/2">
                    <img src={introImage} alt="banner image" className="w-full h-full rounded-md" />
                </div>
                <div className="w-full h-full lg:w-1/2 mt-3 ">
                    <div>
                        <span className="px-5 py-1 border-2 border-green-600 rounded-full font-bold text-green-600">Latest Post</span>
                        <h1 className="text-[1.5em] md:text-[2em] lg:text-4xl font-bold my-4">Introducing Our Firebase<br /> Extension</h1>
                        <p className="text-[17px] font-medium">Firebase developers get plug and play in-app purchase <br /> infrastructure</p>
                    </div>
                    <div className="flex items-center gap-3 mt-[17%]">
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

export default IntroducingSection;