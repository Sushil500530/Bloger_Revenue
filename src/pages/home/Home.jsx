import Banner from "../../components/header/banner/Banner";
import Footer from "../footer/Footer";
import ArticleCard from "./article section/ArticleCard";
import ArticlePage from "./article section/ArticlePage";
import IntroducingSection from "./introducing/IntroducingSection";
import NewsLetter from "./news letter/NewsLetter";
import OfferedSection from "./offered/OfferedSection";
import Pagination from "./pagination/Pagination";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="container mx-auto p-5">
                <ArticlePage />
                <IntroducingSection />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
                <NewsLetter />
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                    </div>
                    <Pagination />
                </div>
            </div>
               <OfferedSection />
               <Footer />
        </div>
    );
};

export default Home;