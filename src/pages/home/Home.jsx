import { useEffect, useState } from "react";
import Banner from "../../components/header/banner/Banner";
import Footer from "../footer/Footer";
import ArticleCard from "./article section/ArticleCard";
import ArticlePage from "./article section/ArticlePage";
import IntroducingSection from "./introducing/IntroducingSection";
import NewsLetter from "./news letter/NewsLetter";
import OfferedSection from "./offered/OfferedSection";
import Pagination from "./pagination/Pagination";

const Home = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("/public/data.json")
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])


    return (
        <div>
            <Banner />
            <div className="container mx-auto p-5">
                <ArticlePage />
                <IntroducingSection />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        articles?.length > 0 && articles?.slice(5, 8)?.map(article => <ArticleCard key={article?.id} data={article} />)
                    }
                </div>
                <NewsLetter />
                <Pagination />
            </div>
            <OfferedSection />
            <Footer />
        </div>
    );
};

export default Home;