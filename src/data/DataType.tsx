// Data type for Recipe
export interface RecipeDataType {
  category: string;
  name: string;
  description?: string;
  date: Date;
  image?: string;
  creator: string;
  serving?: number;
  cookingTime?: string;
  ingredients: IngredientDataType[];
  recipe: RecipeDetailType[];
  favoriteCounts: number;
}

export interface IngredientDataType {
  ingredient: string;
  quantity: string;
}

export interface RecipeDetailType {
  order: number;
  process: string;
  image?: string;
}

// hooks form
// 1. Recipe Data (useForm)
//     category, name, description, date, image, creator, serving, cookingTime, favorite count

// 2. Ingredients Data (useFieldArray)
//     ingredients:[{}]

// 3. Recipe Data
//    recipe: [{}]

// initial data for recipe form page
export const initialState: RecipeDataType = {
  category: '',
  name: '',
  description: '',
  date: new Date(),
  image: '',
  creator: 'Jane Doe',
  serving: 0,
  cookingTime: '',
  ingredients: [
    {
      ingredient: '',
      quantity: '',
    },
    {
      ingredient: '',
      quantity: '',
    },
    {
      ingredient: '',
      quantity: '',
    },
  ],
  recipe: [
    {
      order: 1,
      process: '',
      image: '',
    },
    {
      order: 2,
      process: '',
      image: '',
    },
    {
      order: 3,
      process: '',
      image: '',
    },
  ],
  favoriteCounts: 0,
};

// Data type for User
