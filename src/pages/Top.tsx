import Layout from "../components/reusable/Layout";
import Hero from "../components/reusable/Hero";
import CategorySection from "../components/template/CategorySection";
import Featured from "../components/template/Featured";

const Top = () => {
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <Featured />
    </Layout>
  );
};

export default Top;
