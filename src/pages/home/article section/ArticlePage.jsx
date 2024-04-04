import { FaTwitter } from "react-icons/fa";
import { ImConnection } from "react-icons/im";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { IoPlaySharp } from "react-icons/io5";

const ArticlePage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("/public/data.json")
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    return (
        <div className="mt-20">
            <div className="flex items-center justify-between flex-col lg:flex-row gap-8">
                <div>
                    <ul className="flex items-center gap-5 text-base font-medium lg:flex-nowrap flex-wrap">
                        <li><button className="bg-green-600 text-white rounded-full px-4 py-2">All articles</button></li>
                        <li><button className="focus:bg-green-600 focus:text-white rounded-full px-4 py-2">Company</button></li>
                        <li><button className="focus:bg-green-600 focus:text-white rounded-full px-4 py-2">Engineering</button></li>
                        <li><button className="focus:bg-green-600 focus:text-white rounded-full px-4 py-2">Growth</button></li>
                    </ul>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                    <h1>Follow for updates:</h1>
                    <FaTwitter className="text-2xl " />
                    <ImConnection className="text-2xl" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {
                    articles?.length > 0 && articles?.slice(0,5)?.map(article => (
                        <ArticleCard key={article?.title} data={article} />
                    ))
                }
                <div className="shadow-md border rounded-md bg-black text-white overflow-hidden">
                    <img src="https://i.ibb.co/31JPR15/banner1.jpg" alt="card-image" className="w-full h-[300px] rounded-b-[50%]" />
                    <div className="p-5">
                        <h1 className="text-3xl font-bold my-3">The Sub Club Postcast</h1>
                        <p className="text-base ">Interviews and deep dives with the exports behind the biggest apps in the world.</p>
                       <button className="px-6 py-2 rounded-full bg-green-600 text-black w-1/2 flex items-center gap-3 mt-8 text-xl">
                         <IoPlaySharp className="w-10 h-10 rounded-full p-2 bg-black text-white" /> Listen Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;