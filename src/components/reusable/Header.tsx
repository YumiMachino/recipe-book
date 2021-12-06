import Logo from '../../assets/logo-img.png';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <nav className='w-screen h-20 bg-secondary px-14 flex justify-between items-center'>
      <Link to='/'>
        <img src={Logo} height={200} width={250} alt='Logo' />
      </Link>
      <div className='flex'>
        <Button isPrimary={true} content='Sign up' link='/' />
        <Button isPrimary={false} content='Log in' link='/' />
      </div>
    </nav>
  );
};

export default Header;
