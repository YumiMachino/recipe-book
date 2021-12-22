import { useState } from 'react';
import Button from '../components/reusable/Button';
import Layout from '../components/reusable/Layout';
import { TiDelete } from 'react-icons/ti';

export interface RecipeDetailType {
  order: number;
  process: string;
  image?: null;
}

export interface RecipeDataType {
  category: string;
  name: string;
  description: string;
  date: Date;
  image?: string;
  creator: string;
  ingredients: [
    {
      ingredient: string;
      quantity: string;
    }
  ];
  recipe: [RecipeDetailType];
  favoriteCounts: number;
}

const Form = () => {
  // useSatate to hold the recipe obj data
  const [recipeData, setRecipeData] = useState<RecipeDataType>({
    category: '',
    name: '',
    description: '',
    date: new Date(),
    image: '',
    creator: 'Jane Doe',
    ingredients: [
      {
        ingredient: '',
        quantity: '',
      },
    ],
    recipe: [
      {
        order: 1,
        process: '',
        image: null,
      },
    ],
    favoriteCounts: 0,
  });

  const addIngredientsClicked = () => {
    console.log('Add ingredients cicked');
  };

  const addRecipeStepsClicked = () => {
    console.log('Add recipe steps clicked');
  };

  const deleteClicked = () => {
    console.log('delete clicked');
  };

  const saveClicked = () => {
    console.log('Seve clicked');
  };

  const submitClicked = () => {
    console.log('Submit is clicked!');
  };

  // state内のingredientsの数loopしてrowとdataを返す関数
  const renderIngredients = () => {
    // if(recipeData.ingredients[0].ingredient === "")

    return recipeData.ingredients.map((ingredient) =>
      console.log('this is ingredient', ingredient)
    );
  };

  const temp = () => {
    return (
      <>
        <tr className=''>
          <td className='w-1/2'>
            <input
              type='text'
              placeholder='Potatos'
              className='w-full bg-secondary text-dark text-sm p-2 rounded outline-none'
              name='ingredient'
            />
          </td>
          <td className='w-2/6'>
            <input
              type='text'
              placeholder='3'
              className='w-full bg-secondary
                      text-dark
                      text-sm
                      p-2
                      rounded
                      outline-none'
              name='quantity'
            />
          </td>
          <td className='w-1/6 text-center text-primary'>
            <button className='w-full p-1 rounded bg-secondary'>
              <TiDelete
                className='text-2xl w-full bg-secondary
                      text-dark
                      rounded
                      outline-none'
              />
            </button>
          </td>
        </tr>
        <tr className=''>
          <td className='w-1/2'>
            <input
              type='text'
              placeholder='Onions'
              className='w-full bg-secondary text-dark text-sm p-2 rounded outline-none'
            />
          </td>
          <td className='w-2/6'>
            <input
              type='text'
              placeholder='2'
              className='w-full bg-secondary
                      text-dark
                      text-sm
                      p-2
                      rounded
                      outline-none'
            />
          </td>
          <td className='w-1/6 text-center text-primary'>
            <button className='w-full p-1 rounded bg-secondary'>
              <TiDelete
                className='text-2xl w-full bg-secondary
                      text-dark
                      rounded
                      outline-none'
              />
            </button>
          </td>
        </tr>
        <tr className=''>
          <td className='w-1/2'>
            <input
              type='text'
              placeholder='Miso paste'
              className='w-full bg-secondary text-dark text-sm p-2 rounded outline-none'
            />
          </td>
          <td className='w-2/6'>
            <input
              type='text'
              placeholder='3 big spoons'
              className='w-full bg-secondary
                      text-dark
                      text-sm
                      p-2
                      rounded
                      outline-none'
            />
          </td>
          <td className='w-1/6 text-center text-primary'>
            <button className='w-full p-1 rounded bg-secondary hover:text-accent'>
              <TiDelete
                className='text-2xl w-full bg-secondary
                      text-dark
                      rounded
                      outline-none'
              />
            </button>
          </td>
        </tr>
      </>
    );
  };

  renderIngredients();

  // state内のstepの数をloopsしてrowとdataを返す関数

  return (
    <Layout>
      <div className='w-full sm:w-4/5 lg:w-3/5 mx-auto p-1 my-2 md:my-9 flex flex-col justify-between'>
        <h1 className='text-xl lg:text-3xl text-dark font-semibold text-center p-2'>
          Share your recipe!
        </h1>
        <div className='h-5/6 flex flex-col justify-around px-3'>
          <div className='text-dark text-sm my-1 flex flex-col'>
            <label className='pb-2 lg:text-lg font-medium'>Recipe title</label>
            <input
              type='text'
              placeholder='e.g. Miso Soup'
              className='text-sm p-2 rounded outline-none text-dark bg-secondary'
              name='title'
            />
          </div>
          <div className='text-dark text-sm my-1 flex flex-col'>
            <label className='pb-2 lg:text-lg font-medium'>
              Recipe Description
            </label>
            <textarea
              placeholder='e.g. Traditional soup made of soybean, this is a recipe my mother taught me'
              className='text-sm p-2 rounded outline-none text-dark bg-secondary max-h-16'
              name='description'
            />
          </div>
          <div className='text-dark text-sm my-1 flex flex-col'>
            <label className='pb-2 lg:text-lg font-medium'>
              Recipe Category
            </label>
            <input
              type='text'
              placeholder='e.g. Japanese'
              className='text-sm p-2 rounded outline-none text-dark bg-secondary'
              name='category'
            />
          </div>
          <div className='text-dark text-sm flex my-1 flex-col'>
            <label className='pb-2 lg:text-lg font-medium'>Recipe Look</label>
            <input
              type='file'
              className='text-sm p-2 rounded outline-none text-dark bg-secondary'
              name='look'
            />
          </div>

          <div className='text-dark text-sm my-1 flex flex-col'>
            <label className='pb-2 lg:text-lg font-medium'>Ingredients</label>
            <div className='flex w-full justify-between'>
              <div className='w-1/2 p-1'>
                <p>Serving</p>
                <input
                  type='text'
                  placeholder='4'
                  className='w-full bg-secondary text-dark text-sm p-1 rounded outline-none'
                  name='serving'
                />
              </div>
              <div className='w-1/2 p-1'>
                <p>Cooking time</p>
                <input
                  type='text'
                  placeholder='30 mins'
                  className='w-full bg-secondary text-dark text-sm p-1 rounded outline-none'
                  name='cookingTime'
                />
              </div>
            </div>
            <table className='table-fixed w-full my-2'>
              <tbody className=''>{temp()}</tbody>
            </table>
            <div className='text-center my-2'>
              <Button
                isPrimary={false}
                content='+ Add ingredient'
                clickHandler={() => console.log('add ingredient clicked')}
              />
            </div>
          </div>

          <div className='text-dark text-sm flex flex-col my-1'>
            <h2 className='pb-2 lg:text-lg font-medium'>Recipe Steps</h2>

            <div className='my-1'>
              <div className='flex justify-center items-center'>
                <span>1. </span>
                <input
                  type='text'
                  placeholder='Cut all the ingredients'
                  className='w-5/6 containertext-sm p-2 rounded outline-none text-dark bg-secondary m-1'
                  name='step'
                />
                <button className='p-1 rounded bg-secondary hover:text-accent'>
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
                  className='
                  w-5/6
                      bg-secondary
                      text-sm
                      p-2
                      rounded
                      outline-none
                      text-dark
                      my-1'
                />
              </div>
            </div>

            <div className='my-1'>
              <div className='flex justify-center items-center'>
                <span>2. </span>
                <input
                  type='text'
                  placeholder='Cut all the ingredients'
                  className='w-5/6 containertext-sm p-2 rounded outline-none text-dark bg-secondary m-1'
                />
                <button className='p-1 rounded bg-secondary hover:text-accent'>
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
                  className='
                  w-5/6
                      bg-secondary
                      text-sm
                      p-2
                      rounded
                      outline-none
                      text-dark
                      my-1'
                />
              </div>
            </div>

            <div className='my-1'>
              <div className='flex justify-center items-center'>
                <span>3. </span>
                <input
                  type='text'
                  placeholder='Cut all the ingredients'
                  className='w-5/6 containertext-sm p-2 rounded outline-none text-dark bg-secondary m-1'
                />
                <button className='p-1 rounded bg-secondary hover:text-accent'>
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
                  className='
                  w-5/6
                      bg-secondary
                      text-sm
                      p-2
                      rounded
                      outline-none
                      text-dark
                      my-1'
                />
              </div>
            </div>

            <div className='text-center my-2'>
              <Button
                isPrimary={false}
                content='+ Add recipe step'
                clickHandler={() => console.log('add ingredient clicked')}
              />
            </div>
          </div>

          <div className='flex flex-col sm:flex-row my-6 h-20 w-4/5 justify-between mx-auto'>
            <div className='flex flex-col  h-20  w-4/5 sm:w-2/5 justify-between mx-auto sm:justify-center '>
              <Button
                isPrimary={true}
                content='Save'
                clickHandler={submitClicked}
              />
            </div>
            <div className='flex flex-col h-20 w-4/5 sm:w-2/5 justify-between mx-auto sm:justify-center'>
              <Button
                isPrimary={false}
                content='Submit'
                clickHandler={submitClicked}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Form;
