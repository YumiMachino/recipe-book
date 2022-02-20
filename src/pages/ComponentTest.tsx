import Footer from '../components/reusable/Footer';
import Header from '../components/reusable/Header';
import Post from '../components/reusable/Post';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Layout from '../components/reusable/Layout';

const ComponentTest = () => {
  const userContext = useContext(UserContext);
  return (
    <Layout isLoggedIn={userContext.user ? true : false}>
      Test your component here!
      <Header isLoggedIn={true} />
      <Header isLoggedIn={false} />
      {/* <Post /> */}
      <div>Test user email: {userContext.user?.email}</div>
      <div>Test user password: {userContext.user?.password}</div>
      <Footer />
    </Layout>
  );
};

export default ComponentTest;
