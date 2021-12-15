import Layout from '../components/reusable/Layout';
import RecipeDetails from '../components/template/RecipeDetails';
import RecipeOverview from '../components/template/RecipeOverview';
import VoicesSection from '../components/template/VoicesSection';

const Recipe = () => {
  return (
    <Layout>
      <RecipeOverview />
      <RecipeDetails />
      <VoicesSection />
    </Layout>
  );
};

export default Recipe;
