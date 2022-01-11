import { useForm, FormProvider } from 'react-hook-form';
import Button from '../components/reusable/Button';
import Layout from '../components/reusable/Layout';
import { RecipeDataType, formInitialState } from '../data/DataType';
import FormOverview from '../components/template/form/FormOverview';
import Ingredients from '../components/template/form/Ingredients';
import RecipeSteps from '../components/template/form/RecipeSteps';

const Form = () => {
  const methods = useForm<RecipeDataType>({
    defaultValues: formInitialState,
  });

  const onSubmit = (data: RecipeDataType): void => {
    // modify data (add Data, creator info, initialize favorite Count)
    // file の画像が無い場合は、default 画像を設定する。
    console.log('is submitted');
    console.log(data);
  };

  const saveClicked = () => {
    console.log('Saving...');
  };

  return (
    <Layout>
      <FormProvider {...methods}>
        <form
          className='w-full sm:w-4/5 lg:w-3/5 mx-auto p-1 my-2 md:my-9 flex flex-col justify-between'
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <h1 className='text-xl lg:text-3xl text-dark font-semibold text-center p-2'>
            Share your recipe!
          </h1>
          <FormOverview />
          <div className='h-5/6 flex flex-col justify-around px-3'>
            <div className='text-dark text-sm my-1 flex flex-col'>
              <label className='pb-2 lg:text-lg font-medium'>Ingredients</label>
              <Ingredients />
            </div>
            <div className='text-dark text-sm flex flex-col my-1'>
              <h2 className='pb-2 lg:text-lg font-medium'>Recipe Steps</h2>
              <RecipeSteps />
            </div>
          </div>

          <div className='h-5/6 flex flex-col justify-around px-3'>
            <div className='flex flex-col sm:flex-row my-6 h-20 w-4/5 justify-between mx-auto'>
              <div className='flex flex-col  h-20  w-4/5 sm:w-2/5 justify-between mx-auto sm:justify-center '>
                <Button
                  isPrimary={true}
                  content='Save'
                  clickHandler={saveClicked}
                />
              </div>
              <div className='flex flex-col h-20 w-4/5 sm:w-2/5 justify-between mx-auto sm:justify-center'>
                <Button isPrimary={false} content='Submit' />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </Layout>
  );
};

export default Form;
