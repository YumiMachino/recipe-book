import demoImg from '../../assets/demo.jpg';
import Button from './Button';

// Get Recipe Object
type PostProps = {
  name: string;
  description: string;
} & typeof defaultProps;

const defaultProps = {
  name: 'Pasta',
  description: 'Delicious tomato source pasta!',
};

const Post = (props: PostProps) => {
  const { name, description } = props;

  return (
    <div className='border border-secondary  p-2.5  flex justify-center items-center h-32 w-9/12  mx-auto md:flex-col md:w-60 md:h-72 md:p-3 xl:w-80 xl:h-96  '>
      <div className='w-3/6 sm:w-5/12  md:w-full  '>
        <img
          src={demoImg}
          className='w-36 h-28  md:w-full md:h-full'
          alt='Post'
        />
      </div>
      <div className='w-3/6 sm:w-5∂/12  flex justify-around items-start flex-col h-full pl-2   md:h-2/5 md:w-full md:items-end '>
        <h3 className='text-xs text-dark  sm:text-sm xl:text-xl font-semibold  md:text-center'>
          {name}
        </h3>
        <p className='hidden sm:block text-xs text-dark xl:text-lg  xl:leading-5'>
          {description}
        </p>
        <Button isPrimary={true} content='Check' link='/' />
      </div>
    </div>
  );
};

Post.defaultProps = defaultProps;

export default Post;
