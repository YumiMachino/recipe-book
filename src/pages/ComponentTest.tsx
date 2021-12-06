import Footer from '../components/reusable/Footer';
import Header from '../components/reusable/Header';

const ComponentTest = () => {
  return (
    <div>
      Test your component here!
      <Header isLoggedIn={true} />
      <Header isLoggedIn={false} />
      <Footer />
    </div>
  );
};

export default ComponentTest;
