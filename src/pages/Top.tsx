import Layout from "../components/reusable/Layout";
import Hero from "../components/reusable/Hero";
import CategorySection from "../components/template/CategorySection";
import Featured from "../components/template/Featured";
import PostSection from "../components/template/PostSection";
import MainHeading from "../components/reusable/MainHeading";

const Top = () => {
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <Featured />
      <MainHeading text="Latest Posts" color="text-dark" />
      <PostSection key="" />
    </Layout>
  );
};

export default Top;
