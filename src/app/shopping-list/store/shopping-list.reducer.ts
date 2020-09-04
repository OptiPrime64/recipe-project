import { Ingredient } from '../../shared/ingrediant.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {  //arguments will be provided by ngRX package. '=initialState' is for if argument isn't provided
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state, //adds properties of old state to new state
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {

        ...state,
        ingredients: [...state.ingredients, ...action.payload]

      };
    default:
      return state;
  }
}

