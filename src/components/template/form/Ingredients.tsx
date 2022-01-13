import { useFieldArray, useFormContext } from 'react-hook-form';
import { TiDelete } from 'react-icons/ti';
import Button from '../../reusable/Button';

const Ingredients = () => {
  const { register, control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const addIngredient = () => {
    append({ ingredient: '', quantity: '' });
  };

  const removeIngredient = (index: number) => {
    remove(index);
  };

  const renderIngredientSet = (index: number) => {
    return (
      <>
        <td className='w-1/2'>
          <input
            type='text'
            {...register(`ingredients.${index}.ingredient`, {
              required: true,
            })}
            placeholder='Onion'
            className='w-full bg-secondary text-dark text-sm p-2 rounded outline-none'
          />
        </td>
        <td className='w-2/6'>
          <input
            type='text'
            {...register(`ingredients.${index}.quantity`, {
              required: true,
            })}
            placeholder='3'
            className='w-full bg-secondary text-dark text-sm p-2 rounded outline-none'
          />
        </td>
        <td className='w-1/6 text-center text-primary'>
          <button
            className='w-full p-1 rounded bg-secondary'
            onClick={() => removeIngredient(index)}
          >
            <TiDelete className='text-2xl w-full bg-secondary text-dark rounded group-hover:outline-none' />
          </button>
        </td>
      </>
    );
  };

  return (
    <>
      <table className='table-fixed w-full my-2'>
        <tbody>
          {fields.map((field, index) => (
            <tr key={field.id}>{renderIngredientSet(index)}</tr>
          ))}
        </tbody>
      </table>

      <div className='text-center my-2'>
        <Button
          isPrimary={false}
          content='+ Add ingredient'
          clickHandler={addIngredient}
        />
      </div>
    </>
  );
};

export default Ingredients;
