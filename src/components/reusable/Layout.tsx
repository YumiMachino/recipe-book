import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='relative min-h-screen'>
      <Header isLoggedIn={false} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
