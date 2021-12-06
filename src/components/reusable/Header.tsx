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
    <nav className='w-screen h-20 bg-secondary px-14 flex justify-between items-center'>
      <Link to='/'>
        <img src={Logo} height={200} width={250} alt='Logo' />
      </Link>
      <div className='flex'>
        {isLoggedIn ? (
          <>
            <Button isPrimary={true} content='Sign up' link='/' />
            <Button isPrimary={false} content='Log in' link='/' />
          </>
        ) : (
          <IconContext.Provider
            value={{
              className:
                'text-primary text-4xl mx-3 transform hover:scale-105 transition-transform duration-300',
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
