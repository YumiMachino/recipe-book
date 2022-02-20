import Layout from '../components/reusable/Layout';
import Hero from '../components/reusable/Hero';
import CategorySection from '../components/template/CategorySection';
import Featured from '../components/template/Featured';
import PostSection from '../components/template/PostSection';
import MainHeading from '../components/reusable/MainHeading';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

// User objectがnullの場合はsignupページにリダイレクト
const Top = () => {
  const userContext = useContext(UserContext);
  return (
    <Layout isLoggedIn={userContext.user ? true : false}>
      <Hero />
      <CategorySection />
      <Featured />
      <MainHeading text='Latest Posts' color='text-dark' />
      <PostSection key='' />
    </Layout>
  );
};

export default Top;
