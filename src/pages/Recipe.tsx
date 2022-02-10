import Layout from '../components/reusable/Layout';
import RecipeDetails from '../components/template/RecipeDetails';
import RecipeOverview from '../components/template/RecipeOverview';
import VoicesSection from '../components/template/VoicesSection';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Recipe = () => {
  const userContext = useContext(UserContext);
  return (
    <Layout isLoggedIn={userContext.user ? true : false}>
      <RecipeOverview />
      <RecipeDetails />
      <VoicesSection />
    </Layout>
  );
};

export default Recipe;
