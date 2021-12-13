import RecipeDetail from '../reusable/RecipeDetail';

const RecipeDetails = () => {
  return (
    <div className='w-4/5 mx-auto'>
      Recipes
      <table className='table-auto bg-green-400  '>
        <thead className='bg-secondary'>
          <tr className='bg-blue-300'>
            <th className='bg-blue-600'>Recipes</th>
          </tr>
        </thead>
        <tbody className='bg-red-300'>
          <RecipeDetail />
          <RecipeDetail />
          <RecipeDetail />
          <RecipeDetail />
        </tbody>
      </table>
    </div>
  );
};

export default RecipeDetails;
