import { useState } from 'react';
import Layout from '../components/reusable/Layout';
import SignUpLogIn from '../components/template/SignUpLogIn';
import demoImg from '../assets/demo.jpg';

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false);

  // Set 'isLogin' to true on useEffect based on user Info

  return (
    <Layout>
      <div className='flex  h-96 w-4/5 items-center lg:w-4/5 lg:mx-auto absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
        <div className='hidden  lg:block  m-1 p-3'>
          <img src={demoImg} alt='Recipe' className='rounded' />
        </div>

        <div className='w-11/12 h-full sm:w-8/12  mx-auto flex flex-col p-4 m-1 sm:border border-seconary rounded '>
          <h1 className='text-lg text-secondary p-2 text-center '>
            <button
              className={
                isLogin
                  ? 'text-primary opacity-50'
                  : 'text-dark font-semibold opacity-100'
              }
              onClick={() => setIsLogin(false)}
            >
              Sign up
            </button>{' '}
            /{' '}
            <button
              className={
                isLogin
                  ? 'text-dark font-semibold  opacity-100'
                  : 'text-primary opacity-50'
              }
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </h1>
          <SignUpLogIn isLogin={isLogin} />
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
