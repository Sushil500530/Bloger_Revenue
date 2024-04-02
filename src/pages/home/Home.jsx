import Banner from "../../components/header/banner/Banner";
import ArticlePage from "./article section/ArticlePage";
import IntroducingSection from "./introducing/IntroducingSection";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="container mx-auto">
                <ArticlePage />
              <IntroducingSection />
            </div>
        </div>
    );
};

export default Home;