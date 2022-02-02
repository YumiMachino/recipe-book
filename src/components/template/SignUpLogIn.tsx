import Button from '../reusable/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
type SignUpLoginProps = {
  isLogin: boolean;
};

export interface UserDataType {
  email: string;
  password: string;
}

const SignUpLogIn: React.FC<SignUpLoginProps> = ({ isLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDataType>();

  const onSignUp: SubmitHandler<UserDataType> = async (data) => {
    console.log('Sign up', data);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const onLogin: SubmitHandler<UserDataType> = async (data) =>
    console.log('This is login', data);

  const logOut = async () => {
    console.log('logging out');
  };
  const test = async () => {
    console.log('logging out');
  };

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
      <div className='flex flex-col justify-around items-center h-2/5 w-full mt-4'>
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
