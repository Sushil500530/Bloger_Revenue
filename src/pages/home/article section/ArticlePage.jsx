import { FaTwitter } from "react-icons/fa";
import { ImConnection } from "react-icons/im";
import ArticleCard from "./ArticleCard";


const ArticlePage = () => {
    return (
        <div className="mt-20">
            <div className="flex items-center justify-between flex-col lg:flex-row gap-8">
                <div>
                    <ul className="flex items-center gap-5 text-base font-medium lg:flex-nowrap flex-wrap">
                        <li><a href="/" className="bg-green-600 text-white  rounded-full px-4 py-2">All articles</a></li>
                        <li><a href="/" className="focus:bg-green-600 focus:text-white rounded-full px-4 py-2">Company</a></li>
                        <li><a href="/" className="focus:bg-green-600 focus:text-white rounded-full px-4 py-2">Engineering</a></li>
                        <li><a href="/" className="focus:bg-green-600 focus:text-white rounded-full px-4 py-2">Growth</a></li>
                    </ul>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                    <h1>Follow for updates:</h1>
                    <FaTwitter className="text-2xl " />
                    <ImConnection className="text-2xl" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>
    );
};

export default ArticlePage;