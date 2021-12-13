import demoImg from '../../assets/demo.jpg';

const RecipeDetail = () => {
  return (
    <div>
      <div>
        <img src={demoImg} alt='Recipe' />
      </div>
      <div>
        <p>
          1. At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.
        </p>
      </div>
    </div>
    // <tr className='bg-yellow-400'>
    //   <td>
    //     <img src={demoImg} alt='Recipe' />
    //   </td>
    //   <td>
    //     1. At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.
    //   </td>
    // </tr>
  );
};

export default RecipeDetail;
