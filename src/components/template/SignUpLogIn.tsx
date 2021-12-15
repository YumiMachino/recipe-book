type SignUpLoginProps = {
  isLogin: boolean;
};

const SignUpLogIn: React.FC<SignUpLoginProps> = ({ isLogin }) => {
  return (
    <form action='' className='bg-blue-300 '>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <label className='text-xs text-dark'>First Name</label>
          <input
            type='text'
            placeholder='First name'
            className='bg-secondary p-1'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-xs text-dark'>Last Name</label>
          <input
            type='text'
            placeholder='Last name'
            className='bg-secondary p-1'
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <label className='text-xs text-dark'>Email</label>
        <input type='email' placeholder='Email' className='bg-secondary p-1' />
      </div>
      <input
        type='submit'
        value={isLogin ? 'Log In' : 'Sign Up'}
        className='bg-primary text-secondary px-2 py-1 text-right'
      />
    </form>
  );
};

export default SignUpLogIn;
