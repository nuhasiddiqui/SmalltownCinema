import Layout from "../../components/ui/Layout";
import Banner from "../../components/ui/Banner";

const Home = ({ children }) => {
    return (
        <Layout>
            <Banner />
            {children}
        </Layout>
    );
}
export default Home;