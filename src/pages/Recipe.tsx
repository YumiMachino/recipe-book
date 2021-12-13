import Layout from '../components/reusable/Layout';
import RecipeDetails from '../components/template/RecipeDetails';
import RecipeOverview from '../components/template/RecipeOverview';

const Recipe = () => {
  return (
    <Layout>
      <RecipeOverview />
      <RecipeDetails />
    </Layout>
  );
};

export default Recipe;
