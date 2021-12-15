import Voice from '../reusable/Voice';
import Button from '../reusable/Button';

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
      comment: 'It was so easy! Thanks for sharing the recipe!',
      image: null,
    },
    {
      name: 'Michael Smith',
      comment: 'I put some mushroom, and it was great!',
      image: null,
    },
    {
      name: 'John Doe',
      comment: 'I tried this for the first time, it was good!',
      image: null,
    },
    {
      name: 'Jane Doe',
      comment: 'It was so easy! Thanks for sharing the recipe!',
      image: null,
    },
    {
      name: 'Michael Smith',
      comment: 'I put some mushroom, and it was great!',
      image: null,
    },
  ],
};

const VoicesSection = (props: VoiceSectionProps) => {
  const { voices } = props;

  const renderVoices = () => {
    return voices.map((voice, idx) => {
      return (
        <div
          key={idx}
          className='w-1/2 md:w-1/3 lg:w-1/4 p-1 border border-secondary rounded'
        >
          <Voice
            name={voice.name}
            comment={voice.comment}
            image={voice.image}
          />
        </div>
      );
    });
  };

  return (
    <section className='w-11/12 mx-auto h-fit my-2'>
      <h1 className='text-xl font-medium text-primary text-center py-2 md:py-6'>
        Voices
      </h1>
      <div className='text-base xl:w-10/12 2xl:w-9/12 mx-auto bg-secondary text-dark flex  justify-around items-center space-y-2 p-2 md:p-6 '>
        <h2>
          Did you like the recipe? <br />{' '}
          <span className='hidden md:block'>
            Make a comment on how you cooked this!
          </span>
        </h2>
        <Button isPrimary={false} content='Comment' link='/' />
      </div>

      <div className='w-full sm:w-10/12 md:w-full xl:w-10/12 2xl:w-9/12 mx-auto my-6  flex justify-start items-center flex-wrap content-between'>
        {renderVoices()}
      </div>
    </section>
  );
};

export default VoicesSection;
VoicesSection.defaultProps = defaultProps;
