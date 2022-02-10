import Button from '../reusable/Button';
import GoogleButton from 'react-google-button';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '../../firebase-config';
import { Link } from 'react-router-dom';
import { UserDataType } from '../../data/UserData';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

type SignUpLoginProps = {
  isLogin: boolean;
};

// export interface UserDataType {
//   email: string;
//   password: string;
// }

const SignUpLogin: React.FC<SignUpLoginProps> = ({ isLogin }) => {
  const userContext = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDataType>();

  const onSignUp: SubmitHandler<UserDataType> = async (data) => {
    console.log('Signing up...');

    userContext.setUser({ email: data.email, password: data.password });
    // try {
    //   // await createUserWithEmailAndPassword(auth, data.email, data.password);
    //   userContext.setUser({ email: data.email, password: data.password });
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const onLogin: SubmitHandler<UserDataType> = async (data) => {
    console.log('logging in...');
    userContext.setUser({ email: 'asdasdfssdf', password: 'sdfsdfsdfsdf' });
    // userContext.setUser({ email: data.email, password: data.password });
    // try {
    //   // await signInWithEmailAndPassword(auth, data.email, data.password);
    //   userContext.setUser({ email: data.email, password: data.password });
    // } catch (err) {
    //   console.error(err);
    //   alert(err);
    // }
  };

  // const logOut = async () => {
  //   console.log('logging out');
  // };
  // const test = async () => {
  //   console.log('logging out');
  // };

  return (
    <>
      <form
        onSubmit={isLogin ? handleSubmit(onLogin) : handleSubmit(onSignUp)}
        className='flex flex-col justify-around h-3/5'
      >
        <div className='flex flex-col'>
          <label className='text-xs text-dark pb-1'>Email</label>
          <input
            placeholder='Enter your Email'
            type='email'
            defaultValue=''
            {...register('email', {
              required: true,
              pattern:
                /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
            })}
            className='text-dark bg-secondary p-2 placeholder-gray-400 text-sm rounded focus:outline-none'
          />
          {errors.email && (
            <span className='text-xs text-accent'>
              Enter a valid email in the sample@sample.com
            </span>
          )}
        </div>
        <div className='flex flex-col'>
          <label className='text-xs text-dark pb-1 '>Password</label>
          <input
            placeholder='Enter your Password'
            type='password'
            defaultValue=''
            {...register('password', {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/,
            })}
            className='text-dark bg-secondary p-2 placeholder-primary-400 text-sm rounded focus:outline-none'
          />
          {errors.password && (
            <span className='text-xs text-accent'>
              At least 6 characters with at least 1 number, 1 lowercase, and 1
              uppercase.
            </span>
          )}
        </div>
        <div className='flex justify-end'>
          <Button
            isPrimary={true}
            content={isLogin ? 'Log In' : 'Sign Up'}
            link={undefined}
          />
        </div>
      </form>
      <>
        {isLogin ? (
          <div className='w-11/12 mx-auto flex items-center justify-center my-2 p-1 sm:border border-seconary rounded '>
            <p className='text-xs p-1'>Don't have an account?</p>
            <Link
              to='/'
              className='text-accent underline underline-offset-8 text-xs sm:text-sm'
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className='w-11/12 mx-auto flex items-center justify-center my-2 p-1 sm:border border-seconary rounded'>
            <p className='text-xs p-1'>Already have an account?</p>
            <Link
              to='/login'
              className='text-accent underline underline-offset-8 text-xs sm:text-sm'
            >
              Log in
            </Link>
          </div>
        )}
      </>
      <div className='flex flex-col justify-around items-center h-2/5 w-full mt-4'>
        <p className='text-sm text-primary'>-- OR -- </p>
        <GoogleButton
          label={isLogin ? 'Login with Google' : 'Sign in with Google'}
          onClick={() => console.log('aaaaa')}
        />
      </div>
    </>
  );
};

export default SignUpLogin;
