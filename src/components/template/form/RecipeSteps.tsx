import { useFieldArray, useFormContext } from 'react-hook-form';
import { TiDelete } from 'react-icons/ti';
import Button from '../../reusable/Button';
import { useState, useEffect } from 'react';

const RecipeSteps = () => {
  const addRecipeStep = () => {
    append({ order: idx + 1, process: '', image: undefined });
  };

  const [idx, setIdx] = useState(1);
  useEffect(() => {
    addRecipeStep();
  }, [idx]);

  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipe',
  });

  const removeRecipe = (index: number) => {
    remove(index);
  };
  const renderRecipeStep = (index: number) => {
    return (
      <>
        <div className='flex justify-center items-center'>
          <span>{index + 1}.</span>

          <input
            type='text'
            {...register(`recipe.${index}.process`, {
              required: true,
            })}
            placeholder='Cut all the ingredients'
            className='w-5/6 containertext-sm p-2 rounded outline-none text-dark bg-secondary m-1'
          />
          <button
            className='p-1 rounded bg-secondary hover:text-accent'
            onClick={() => removeRecipe(index)}
          >
            <TiDelete
              className='text-2xl w-full bg-secondary
                      text-dark
                      rounded
                      outline-none'
            />
          </button>
        </div>
        <div className='ml-3 sm:ml-7 md:ml-9 xl:ml-12 2xl:ml-16'>
          <input
            type='file'
            {...register(`recipe.${index}.image`)}
            placeholder='image'
            className='
                  w-5/6 bg-secondary text-sm p-2 rounded outline-nonetext-dark my-1'
          />
        </div>
      </>
    );
  };

  return (
    <div>
      <ul>
        {fields.map((field, index) => (
          <div className='my-1' key={field.id}>
            {renderRecipeStep(index)}
          </div>
        ))}
      </ul>

      <div className='text-center my-2'>
        <Button
          isPrimary={false}
          content='+ Add recipe step'
          clickHandler={() => setIdx(idx + 1)}
        />
      </div>
    </div>
  );
};

export default RecipeSteps;
