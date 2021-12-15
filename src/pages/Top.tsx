import Category from "../components/reusable/Category";
import Layout from "../components/reusable/Layout";
import data from "../data/CategoryData";
import Hero from "../components/reusable/Hero";

const Top = () => {
  return (
    <Layout>
      <Hero />
      <div className="m-3 flex">
        {data.map((item, index) => (
          <Category key={index} title={item.title} image={item.image} />
        ))}
      </div>
    </Layout>
  );
};

export default Top;
