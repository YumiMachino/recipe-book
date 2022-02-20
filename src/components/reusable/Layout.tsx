import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='relative min-h-screen pb-20'>
      <Header isLoggedIn={false} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
