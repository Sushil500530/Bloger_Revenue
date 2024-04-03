import { GrFormNextLink } from "react-icons/gr";

const Pagination = () => {
    return (
        <div className="flex items-center lg:justify-between  justify-center flex-col lg:flex-row my-8 lg:gap-24 gap-4">
            <div></div>
                <div className="flex justify-center items-center gap-3">
                    {Array.from({
                        length: Math.ceil(8 / 4),
                    }).map((_, index) => (
                        <button className={`px-3 py-1 mx-1 rounded-full ${1 === index + 1 ? "bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-white hover:text-black" : "bg-gradient-to-b from-[#2241b0] to-[#000000] text-white"
                            }`}
                            key={index + 1}
                            onClick={() => 8(index + 1)}>
                            {index + 1}
                        </button>
                    ))} ......
                    <button className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-white hover:text-black px-3 py-1 mx-1 rounded-full">8
                    </button>
                </div>
                 <h1 className="flex items-center gap-2 font-medium cursor-pointer">Next<GrFormNextLink className="text-2xl text-red-500" /></h1>
            
        </div>
    );
};

export default Pagination;