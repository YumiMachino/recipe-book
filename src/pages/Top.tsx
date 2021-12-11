import Category from "../components/reusable/Category";
import Layout from "../components/reusable/Layout";
import data from "../data/CategoryData";

const Top = () => {
  return (
    <Layout>
      <div className="m-3 flex">
        {/* <Category title="Korean\nfood" image="/iamges/category/american.png" /> */}
        {data.map((item, index) => (
          <Category key={index} title={item.title} image={item.image} />
        ))}
      </div>
    </Layout>
  );
};

export default Top;
