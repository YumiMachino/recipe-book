import { useState } from 'react';
import Layout from '../components/reusable/Layout';
import SignUpLogIn from '../components/template/SignUpLogIn';
import demoImg from '../assets/demo.jpg';

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false);

  // Set 'isLogin' to true on useEffect based on user Info

  return (
    <Layout>
      <div className='flex lg:w-4/5 lg:mx-auto bg-green-500'>
        <div className='hidden lg:block bg-green-300 m-1'>
          <img src={demoImg} alt='Recipe' className='rounded' />
        </div>
        <div className='w-4/5 h-80 my-auto bg-pink-400 mx-auto flex flex-col p-1'>
          <h1 className='text-lg text-primary p-2 text-center  '>
            <button
              className={
                isLogin ? 'text-secondary' : 'text-primary font-semibold'
              }
              onClick={() => setIsLogin(false)}
            >
              Sign up
            </button>{' '}
            /{' '}
            <button
              className={
                isLogin ? 'text-primary font-semibold' : 'text-secondary'
              }
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </h1>
          <SignUpLogIn isLogin={false} />
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
