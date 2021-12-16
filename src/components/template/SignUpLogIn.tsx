import React, { useState } from 'react';
import Button from '../reusable/Button';

type SignUpLoginProps = {
  isLogin: boolean;
};

export interface UserDataType {
  email: string;
  password: string;
}

const SignUpLogIn: React.FC<SignUpLoginProps> = ({ isLogin }) => {
  const [userData, setUserData] = useState<UserDataType>({
    email: '',
    password: '',
  });

  // these functions need to be in Button componenet for onClick event handling
  const signUp = async () => {
    console.log('Sining up....');
  };

  const logIn = async () => {
    console.log('Logging in...');
  };

  const logOut = async () => {};

  const test = () => {
    console.log('Here, we can do firebase auth using sns....');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form action='' className='flex flex-col justify-around  h-3/5'>
        <div className='flex flex-col'>
          <label className='text-xs text-dark pb-1'>Email</label>
          <input
            type='email'
            placeholder='Email'
            onChange={handleChange}
            value={userData.email}
            name='email'
            className='text-dark bg-secondary p-2 placeholder-gray-400 text-sm rounded focus:outline-none focus:border-primary 
              required'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-xs text-dark pb-1 '>Password</label>
          <input
            type='password'
            placeholder='Password'
            onChange={handleChange}
            value={userData.password}
            name='password'
            className='text-dark bg-secondary p-2 placeholder-gray-400 text-sm rounded focus:outline-none focus:border-primary '
            required
          />
        </div>
        <div className='flex  justify-end'>
          <Button
            isPrimary={true}
            content={isLogin ? 'Log In' : 'Sign Up'}
            link={undefined}
            clickHandler={isLogin ? logIn : signUp}
          />
        </div>
      </form>
      <div className='flex flex-col justify-around items-center h-2/5 w-full'>
        <p className='text-sm text-primary'>-- OR -- </p>

        <Button
          isPrimary={false}
          content={isLogin ? 'Log in with Google' : 'Sign up with Google'}
          link={undefined}
          clickHandler={test}
        />
        <Button
          isPrimary={false}
          content={isLogin ? 'Log in with Facebook' : 'Sign up with Facobook'}
          link={undefined}
          clickHandler={test}
        />
      </div>
    </>
  );
};

export default SignUpLogIn;
