// Data type for Form
export interface RecipeDataType {
  name: string;
  description: string;
  category: string;
  image?: string;
  serving?: number;
  cookingTime: string;
  ingredients: IngredientDataType[];
  recipe: RecipeStepDataType[];
}

export interface IngredientDataType {
  ingredient: string;
  quantity: string;
}

export interface RecipeStepDataType {
  order: number;
  process: string;
  image?: string;
}

// initial data for recipe form page
export const formInitialState: RecipeDataType = {
  name: '',
  description: '',
  category: '',
  image: undefined,
  serving: undefined,
  cookingTime: '',
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
      image: undefined,
    },
  ],
};
