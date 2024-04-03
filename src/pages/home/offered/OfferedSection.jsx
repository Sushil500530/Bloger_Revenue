
const OfferedSection = () => {
    return (
        <div className="bg-black text-white py-12">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <h1 className="text-5xl">Ready to get Started?</h1>
                    <div className="flex items-center gap-5">
                        <button className="btn px-6 bg-blue-600 text-white uppercase text-base rounded-full border-none hover:text-black">sign up for free</button> <br />
                        <span className="border-b-2 border-b-red-500">Task to sales</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferedSection;