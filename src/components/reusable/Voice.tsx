import demoImg from '../../assets/demo.jpg';

type VoiceProps = {
  name: string;
  comment: string;
  image: null;
};

const Voice: React.FC<VoiceProps> = ({ name, comment, image }) => {
  return (
    <>
      <div className='w-full'>
        <img src={demoImg} alt='Recipe' className='rounded' />
      </div>
      <div className='bg-secondary opacity-70 w-full'>
        <p className='text-xs text-dark p-1 lg:text-base'>{comment}</p>
        <p className='text-xs text-dark text-right font-semibold p-1 lg:text-base'>
          {name}
        </p>
      </div>
    </>
  );
};

export default Voice;
