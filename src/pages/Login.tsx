import Layout from '../components/reusable/Layout';
import SignUpLogIn from '../components/template/SignUpLogin';
import demoImg from '../assets/demo.jpg';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const userContext = useContext(UserContext);
  return (
    <Layout isLoggedIn={userContext.user ? true : false}>
      <div className='flex  h-96 w-4/5 items-center lg:w-4/5 lg:mx-auto absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
        <div className='hidden  lg:block  m-1 p-3'>
          <img src={demoImg} alt='Recipe' className='rounded' />
        </div>

        <div className='w-11/12 h-full sm:w-8/12  mx-auto flex flex-col p-4 m-1 sm:border border-seconary rounded '>
          <h1 className='text-lg p-2 text-center text-dark font-semibold '>
            Log in
          </h1>
          <SignUpLogIn isLogin={true} />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
