import Layout from "../../components/ui/Layout";
import Banner from "../../components/ui/Banner";
import Main from "../../components/ui/Main";

const Home = ({ children }) => {
    return (
        <Layout>
            <Banner />
            <Main />
            {children}
        </Layout>
    );
}
export default Home;