import Footer from '../components/reusable/Footer';
import Header from '../components/reusable/Header';
import Post from '../components/reusable/Post';

const ComponentTest = () => {
  return (
    <div>
      Test your component here!
      <Header isLoggedIn={true} />
      <Header isLoggedIn={false} />
      <Post />
      <Footer />
    </div>
  );
};

export default ComponentTest;
