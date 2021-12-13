import demoImg from '../../assets/demo.jpg';

type VoiceProps = {
  name: string;
  comment: string;
  image: null;
};

const Voice: React.FC<VoiceProps> = ({ name, comment, image }) => {
  return (
    <div className='w-4/5 sm:w-2/5 md:w-1/3 m-1 bg-red-500 '>
      <div className='h-full'>
        <img src={demoImg} alt='Recipe' className='rounded' />
      </div>
      <div className='bg-secondary opacity-70 w-full'>
        <p className='text-xs text-dark p-1 lg:text-base'>
          Est tation latine aliquip id, mea ad tale illud definitiones.
          Periculis omittantur necessitatibus eum ad, pro eripuit minimum
          comprehensam ne, usu cu stet.
        </p>
        <p className='text-xs text-dark text-right font-semibold p-1 lg:text-base'>
          Yumi Machino
        </p>
      </div>
    </div>
  );
};

export default Voice;
