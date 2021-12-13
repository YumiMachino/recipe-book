import { FaJediOrder } from 'react-icons/fa';
import demoImg from '../../assets/demo.jpg';

type RecipeDetailProps = {
  order: number;
  process: string;
  image: null;
};

const RecipeDetail: React.FC<RecipeDetailProps> = ({
  order,
  process,
  image,
}) => {
  return (
    <div className='w-11/12 h-44 mx-auto flex md:w-4/5 lg:w-2/3 border-solid border border-primary my-1 rounded'>
      <h5 className='text-lg text-dark p-1'>{order}.</h5>
      <div className='w-5/12 m-auto sm:w-2/6 md:w-1/4 '>
        <img src={demoImg} alt='Recipe' className='m-1 rounded' />
      </div>
      <div className='w-7/12 m-auto p-1  '>
        <p className='text-xs text-dark px-2 sm:text-sm lg:text-base'>
          {process}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;
