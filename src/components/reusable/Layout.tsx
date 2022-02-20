import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
  isLoggedIn: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, isLoggedIn }) => {
  return (
    <div className='relative min-h-screen pb-20'>
      <Header isLoggedIn={isLoggedIn} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
