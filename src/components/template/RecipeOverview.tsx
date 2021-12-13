import { useState } from 'react';
import demoImg from '../../assets/demo.jpg';
import { FaRegHeart, FaHeart, FaShareAlt } from 'react-icons/fa';
import { FacebookShareButton } from 'react-share';
import { FacebookIcon } from 'react-share';

// Get Recipe Object
type RecipeOverViewProps = {
  name: string;
  description: string;
  image: null;
  creator: string;
  ingredients: [
    {
      ingredient: string;
      quantity: string;
    }
  ];
  favCounts: number;
} & typeof defaultProps;

const defaultProps = {
  name: 'Tomato Source Pasta',
  description: "Delicious tomato source pasta!'",
  image: null,
  creator: 'Yumi Machino',
  ingredients: [
    {
      ingredient: 'pasta',
      quantity: '200g',
    },
    {
      ingredient: 'carrot',
      quantity: '1',
    },
    {
      ingredient: 'zucchini',
      quantity: '1',
    },
    {
      ingredient: 'tomato source',
      quantity: '300g',
    },
  ],
  favCounts: 300,
};

// check if user favs this recipe
// (favしたユーザーのidをrecipe obj　にもたせる？)

const RecipeOverview = (props: RecipeOverViewProps) => {
  const { name, description, image, creator, ingredients, favCounts } = props;

  const [isFav, setIsFav] = useState<boolean>(false);

  const toggleFav = (): void => {
    setIsFav(!isFav);
    // Add fav recipe to User obj
    // Increase fav count on recipe obj
  };

  const shareClicked = (): void => {
    console.log('share clicked');
  };

  const renderIngredients = () => {
    return ingredients.map((ingredient) => {
      return (
        <div
          key={ingredient.ingredient}
          className='text-sm text-dark bg-secondary rounded-sm my-1 lg:text-base flex justify-between p-px'
        >
          <p>{ingredient.ingredient}</p>
          <p>{ingredient.quantity}</p>
        </div>
      );
    });
  };

  return (
    <div className='flex flex-col w-9/12 mx-auto p-2 sm:flex-row sm:justify-center sm:items-center lg:w-8/12'>
      <div className=' w-full h-2/6 sm:w-6/12 lg:w-5/12'>
        <img src={demoImg} alt='Recipe' />
      </div>
      <div className='sm:w-6/12 p-2'>
        <div className=' relative p-2'>
          <h3 className='text-sm sm:text-base text-dark font-semibold lg:text-2xl'>
            {name}
          </h3>
          <p className='text-xs sm:text-sm text-dark lg:text-lg'>{creator}</p>
          <p className='text-xs text-dark lg:text-base'>{description}</p>
          <button
            className='absolute top-0 right-8 sm:right-12 text-primary hover:text-accent'
            onClick={toggleFav}
          >
            {isFav ? (
              <FaHeart className='text-lg' />
            ) : (
              <FaRegHeart className='text-lg text-accent' />
            )}
          </button>
          <button
            className='absolute top-0 right-1 sm:right-3 text-primary hover:text-dark'
            onClick={shareClicked}
          >
            <FaShareAlt className='text-lg' />
          </button>
          <FacebookShareButton url=''>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </div>
        <div className='p-2'>
          <h4 className='text-base text-dark font-semibold lg:text-2xl'>
            Ingredients:
          </h4>
          {renderIngredients()}
        </div>
      </div>
    </div>
  );
};

export default RecipeOverview;

RecipeOverview.defaultProps = defaultProps;
