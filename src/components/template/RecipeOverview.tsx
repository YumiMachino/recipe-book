import { useState } from 'react';
import demoImg from '../../assets/demo.jpg';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
} from 'react-share';

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
  id: 'sdfsdfsr',
  category: 'Italian',
  name: 'Tomato Source Pasta',
  description: "Delicious tomato source pasta!'",
  image: null,
  date: 'December 17, 1995 03:24:00',
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
  recipe: [{}],
  favCounts: 300,
  favUsers: [{}],
};

// check if user favs this recipe
// (favしたユーザーのidをrecipe obj　にもたせる？)

const RecipeOverview = (props: RecipeOverViewProps) => {
  const { name, description, image, creator, ingredients, favCounts } = props;

  const [isFav, setIsFav] = useState<boolean>(false);

  const [url, setUrl] = useState(
    'https://cookpad.com/uk/recipes/11956818-dairy-free-berry-bread-and-butter-pudding?ref=guest_feed'
  );

  const toggleFav = (): void => {
    setIsFav(!isFav);
    // Add fav recipe to User obj
    // Increase fav count on recipe obj, and add userId to recipe Obj
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

  const renderShareBtns = () => {
    return (
      <div className='flex justify-end'>
        <button
          className='text-primary hover:text-accent mx-1'
          onClick={toggleFav}
        >
          {isFav ? (
            <FaHeart className='text-2xl' />
          ) : (
            <FaRegHeart className='text-2xl text-accent' />
          )}
        </button>
        <FacebookShareButton
          url={url}
          title={name}
          className='mx-1 hover:scale-125'
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={name} className='mx-1'>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <LineShareButton url={url} title={name} className='mx-1'>
          <LineIcon size={32} round={true} />
        </LineShareButton>
      </div>
    );
  };

  return (
    <div className='flex flex-col w-9/12 mx-auto p-2 sm:flex-row sm:justify-center sm:items-center lg:w-8/12'>
      <div className=' w-full h-2/6 sm:w-6/12 lg:w-5/12'>
        <img src={demoImg} alt='Recipe' />
      </div>
      <div className='sm:w-6/12 p-2'>
        {renderShareBtns()}
        <div className=' relative p-2'>
          <h3 className='text-sm sm:text-base text-dark font-semibold lg:text-2xl'>
            {name}
          </h3>
          <p className='text-xs sm:text-sm text-dark lg:text-lg'>{creator}</p>
          <p className='text-xs text-dark lg:text-base'>{description}</p>
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
