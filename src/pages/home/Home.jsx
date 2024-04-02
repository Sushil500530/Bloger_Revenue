import Banner from "../../components/header/banner/Banner";
import ArticleCard from "./article section/ArticleCard";
import ArticlePage from "./article section/ArticlePage";
import IntroducingSection from "./introducing/IntroducingSection";
import NewsLetter from "./news letter/NewsLetter";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="container mx-auto">
                <ArticlePage />
                <IntroducingSection />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
                <NewsLetter />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>

            </div>
        </div>
    );
};

export default Home;