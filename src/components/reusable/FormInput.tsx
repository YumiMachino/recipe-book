import { useFormContext } from 'react-hook-form';

type InputProps = {
  type: string;
  placeholder: string;
  label: string;
  registerRef: string;
};

export const OverviewInput: React.FC<InputProps> = ({
  type,
  placeholder,
  label,
  registerRef,
}): JSX.Element => {
  const { register } = useFormContext();

  return (
    <div className='text-dark text-sm my-1 flex flex-col'>
      <label className='pb-2 lg:text-lg font-medium'>{label}</label>
      {type === 'file' ? (
        <input
          type={type}
          placeholder={placeholder}
          className='text-sm p-2 rounded outline-none text-dark bg-secondary'
          {...register(`${registerRef}`)}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className='text-sm p-2 rounded outline-none text-dark bg-secondary'
          {...register(`${registerRef}`, {
            required: 'This is required',
            minLength: 3,
          })}
        />
      )}
    </div>
  );
};

export const IngredientBaseInput: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  registerRef,
}) => {
  const { register } = useFormContext();
  return (
    <div className='w-1/2 p-1'>
      {type === 'number' ? (
        <>
          <label className='text-dark text-sm font-medium'>{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            className='w-full bg-secondary text-dark text-sm p-1 rounded outline-none'
            {...register(`${registerRef}`, {
              valueAsNumber: true,
            })}
          />
        </>
      ) : (
        <>
          <label className='text-dark text-sm font-medium'>{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            className='w-full bg-secondary text-dark text-sm p-1 rounded outline-none'
            {...register(`${registerRef}`)}
          />
        </>
      )}
    </div>
  );
};
