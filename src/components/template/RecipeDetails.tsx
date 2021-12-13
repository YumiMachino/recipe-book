import RecipeDetail from '../reusable/RecipeDetail';

type RecipeDetailType = {
  order: number;
  process: string;
  image: null;
};

type RecipeDetailsProps = {
  recipe: [RecipeDetailType];
} & typeof defaultProps;

const defaultProps = {
  recipe: [
    {
      order: 1,
      process: 'Cut all the ingredients',
      image: null,
    },
    {
      order: 2,
      process: 'Boil pasta',
      image: null,
    },
    {
      order: 3,
      process:
        'Mix ingredients with pasta on a pan, and season it with salt and pepper',
      image: null,
    },
  ],
};

const RecipeDetails = (props: RecipeDetailsProps) => {
  const { recipe } = props;
  console.log(recipe);

  return (
    <div className='w-full h-fit mx-auto'>
      <h1 className='text-lg font-medium text-primary text-center p-1'>
        Recipes
      </h1>
      <div>
        {recipe.map((recipe) => (
          <RecipeDetail
            key={recipe.process}
            order={recipe.order}
            process={recipe.process}
            image={recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeDetails;
RecipeDetails.defaultProps = defaultProps;
