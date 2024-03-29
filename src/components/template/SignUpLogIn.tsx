import { useState, useContext } from 'react';
import Button from '../reusable/Button';
import GoogleButton from 'react-google-button';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '../../firebase-config';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataType } from '../../data/UserData';
import { UserContext } from '../../context/UserContext';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

type SignUpLoginProps = {
  isLogin: boolean;
};

const SignUpLogin: React.FC<SignUpLoginProps> = ({ isLogin }) => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const [error, setError] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDataType>();

  const onSignUp: SubmitHandler<UserDataType> = async (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        userContext.setUser({ email: data.email, password: data.password });
        navigate('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          setError('Error: Email already in use');
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        } else {
          setError(errorMessage);
        }
      });
  };

  const onLogin: SubmitHandler<UserDataType> = async (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('user: ', user);
        userContext.setUser({ email: data.email, password: data.password });
        navigate('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/user-not-found') {
          setError('Error: User not found.');
          setTimeout(() => {
            navigate('/signup');
          }, 3000);
        } else {
          setError(errorMessage);
        }
      });
  };

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('google user', user);
        const email = user.email as string;
        const pass = user.uid;
        userContext.setUser({ email: email, password: pass });
        navigate('/');
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        setError(`Error: ${errorMessage}`);
        // ...
      });
  };

  return (
    <>
      <form
        onSubmit={isLogin ? handleSubmit(onLogin) : handleSubmit(onSignUp)}
        className='flex flex-col justify-around h-3/5'
      >
        {error && <span className='text-sm text-accent'>{error}</span>}
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
              to='/signup'
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
          onClick={googleSignIn}
        />
      </div>
    </>
  );
};

export default SignUpLogin;
