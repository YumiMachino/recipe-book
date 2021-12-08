import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header isLoggedIn={false} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
