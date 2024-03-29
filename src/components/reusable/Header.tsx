import Logo from '../../assets/logo-img.png';
import { Link } from 'react-router-dom';
import Button from './Button';
import { IconContext } from 'react-icons';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { HiUserCircle } from 'react-icons/hi';

import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  isLoggedIn: boolean;
};

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // sign out suuccessful
        console.log('sign out successful');
        userContext.setUser(null);
        // signup 画面にリダイレクト
        navigate('/signup');
      })
      .catch((error) => {
        // an error happend
        console.log('sign out failed');
      });
  };

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
          <>
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
            <div className='mx-3'>
              <Button
                isPrimary={false}
                content='Log out'
                clickHandler={logout}
              />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
