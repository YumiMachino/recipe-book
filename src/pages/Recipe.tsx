import Layout from '../components/reusable/Layout';
import RecipeDetail from '../components/reusable/RecipeDetail';
import RecipeDetails from '../components/template/RecipeDetails';
import RecipeOverview from '../components/template/RecipeOverview';

const Recipe = () => {
  return (
    <Layout>
      <RecipeOverview />
      {/* <div className='w-full h-80 bg-blue-400'>
        <RecipeDetail />
      </div> */}

      <RecipeDetails />
    </Layout>
  );
};

export default Recipe;
