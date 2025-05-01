export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  prepTime: string;
  cookTime: string;
  servings: number;
} 