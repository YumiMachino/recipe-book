import Layout from "../components/reusable/Layout";
import Hero from "../components/reusable/Hero";
import CategorySection from "../components/template/CategorySection";
import Featured from "../components/template/Featured";
import PostSection from "../components/template/PostSection";

const Top = () => {
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <Featured />
      <PostSection />
    </Layout>
  );
};

export default Top;
