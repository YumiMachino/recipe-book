import Hero from "../components/reusable/Hero";
import Layout from "../components/reusable/Layout";
import Toggle from "../components/reusable/Toggle";
import PostSection from "../components/template/PostSection";
// import { PostProps } from "../components/reusable/Post";

const SearchResult = () => {
  return (
    <Layout>
      <Hero />
      <div className="flex justify-end m-8">
        <Toggle />
      </div>
      <PostSection />
    </Layout>
  );
};

export default SearchResult;
