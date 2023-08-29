import Layout from "../../components/ui/Layout";
const Home = ({ children }) => {
    return (
        <Layout>
            <div>
               <p>Some awesome Home/Landing/Information page that looks awe inspiring</p>
            </div>
            {children}
        </Layout>
    );
}
export default Home;