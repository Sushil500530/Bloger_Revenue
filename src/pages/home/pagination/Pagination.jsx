import { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import ArticleCard from "../article section/ArticleCard";

const Pagination = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    useEffect(() => {
        fetch("/public/data.json")
            .then(res => res.json())
            .then(data => {
                setArticles(data)
                setCurrentPage(1)
            })
    }, [])
    // sort data 
    const newData = [...articles].sort((a, b) => {
        return (b.id) - (a.id);
    });
    //   pagination 
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newData?.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    currentItems?.length > 0 && currentItems?.slice(0, 3)?.map(article => <ArticleCard key={article?.id} data={article} />)
                }
            </div>
            {
                currentItems?.length <= 0 && <h1 className="text-3xl font-bold text-center items-center justify-center">Page Not Found!</h1>
            }
            <div className="flex items-center lg:justify-between justify-center flex-col lg:flex-row my-8 lg:gap-24 gap-4">
                <div></div>
                <div className="flex justify-center items-center gap-3">
                    {Array.from({
                        length: Math.ceil(newData.length / itemsPerPage),
                    }).map((_, index) => (
                        <button className={`px-3 py-1 mx-1 rounded-full ${currentPage === index + 1 ? "bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-white hover:text-black" : ""
                            }`}
                            key={index + 1}
                            onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </button>
                    ))} ......
                    <button className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-white hover:text-black px-3 py-1 mx-1 rounded-full">8
                    </button>
                </div>
                <h1 onClick={() => setCurrentPage(currentPage + 1)} className="flex items-center gap-2 font-medium cursor-pointer">Next<GrFormNextLink className="text-2xl text-red-500" /></h1>
            </div>
        </div>
    );
};

export default Pagination;
