import Banner from "../components/Banner";
import Header from "../components/Header";
import ItemCardSection from "../components/ItemCardSection";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <ItemCardSection />
    </Layout>
  );
};

export default Home;
