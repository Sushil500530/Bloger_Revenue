import Banner from "../../components/header/banner/Banner";
import ArticlePage from "./article section/ArticlePage";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="container mx-auto">
                <ArticlePage />
            </div>
        </div>
    );
};

export default Home;