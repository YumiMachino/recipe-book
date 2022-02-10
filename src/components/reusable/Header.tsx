import Logo from '../../assets/logo-img.png';
import { Link } from 'react-router-dom';
import Button from './Button';
import { IconContext } from 'react-icons';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { HiUserCircle } from 'react-icons/hi';

type HeaderProps = {
  isLoggedIn: boolean;
};

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <nav className='w-screen h-20 bg-secondary px-1 md:px-14 flex justify-between items-center'>
      <Link to='/'>
        <img
          src={Logo}
          className='w-28 h-10 sm:w-48 sm:h-16 xl:w-64 xl:h-20'
          alt='Logo'
        />
      </Link>
      <div className='flex'>
        {!isLoggedIn ? (
          <>
            <div className='mx-3'>
              <Button isPrimary={true} content='Sign up' link='/signup' />
            </div>
            <div className='mx-3'>
              <Button isPrimary={false} content='Log in' link='/login' />
            </div>
          </>
        ) : (
          <IconContext.Provider
            value={{
              className:
                'text-primary text-3xl md:text-4xl mx-3 transform hover:scale-105 transition-transform duration-300',
            }}
          >
            <Link to='/'>
              <IoIosNotificationsOutline />
            </Link>
            <Link to='/'>
              <HiUserCircle />
            </Link>
          </IconContext.Provider>
        )}
      </div>
    </nav>
  );
};

export default Header;
