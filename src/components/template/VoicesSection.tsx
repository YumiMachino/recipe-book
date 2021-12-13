import Voice from '../reusable/Voice';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type VoiceType = {
  name: string;
  comment: string;
  image: null;
};

type VoiceSectionProps = {
  voices: [VoiceType];
} & typeof defaultProps;

const defaultProps = {
  voices: [
    {
      name: 'John Doe',
      comment: 'I tried this for the first time, it was good!',
      image: null,
    },
    {
      name: 'Jane Doe',
      comment: 'It was so easy!',
      image: null,
    },
    {
      name: 'Michael Smith',
      comment: 'I put some mushroom!',
      image: null,
    },
  ],
};

const VoicesSection = (props: VoiceSectionProps) => {
  const { voices } = props;
  console.log('This is voices;', voices);
  return (
    <div>
      <h1 className='text-lg font-medium text-primary text-center p-1'>
        Voices
      </h1>
      <div className='flex flex-col justify-center items-center bg-green-500 relative'>
        <div className='absolute'>
          <FaAngleLeft className='text-2xl text-primary top-0 left-0' />
          <FaAngleRight className='text-2xl text-primary top-0 right-0' />
        </div>
        {voices.map((voice) => (
          <Voice
            key={voice.name}
            name={voice.name}
            comment={voice.comment}
            image={voice.image}
          />
        ))}
      </div>
    </div>
  );
};

export default VoicesSection;
VoicesSection.defaultProps = defaultProps;
