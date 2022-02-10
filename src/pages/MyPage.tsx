import Drafts from '../components/template/Drafts';
import Favorite from '../components/reusable/Favorite';
import Layout from '../components/reusable/Layout';
import MainHeading from '../components/reusable/MainHeading';
import Hisotry from '../components/template/Hisotry';
import MyPost from '../components/template/MyPost';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const MyPage = () => {
  const userContext = useContext(UserContext);
  return (
    <Layout isLoggedIn={userContext.user ? true : false}>
      <div className='text-center'>
        <div className='mt-10'>
          <MainHeading text='My Recipe History' color='text-mainHeading' />
          <Hisotry />
        </div>
        <div className='mt-10'>
          <MainHeading text='My Posts' color='text-mainHeading' />
          <MyPost />
        </div>
        <div className='mt-10'>
          <MainHeading text='Drafts' color='text-mainHeading' />
          <Drafts />
        </div>
        <div className='mt-10'>
          <MainHeading text='My Favorite' color='text-mainHeading' />
          <Favorite />
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
