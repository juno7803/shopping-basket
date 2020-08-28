import { IProductItems } from "../../models/productItems";

// actions
const ADD_PRODS = "ADD_PRODS" as const;
const DELETE_PRODS = "DELETE_PRODS" as const;

// action creators
export const addProds = (prods: IProductItems) => ({
  type: ADD_PRODS,
  payload: prods,
});
export const deleteProds = (id: string) => ({
  type: DELETE_PRODS,
  payload: id,
});

// type of actions
type CartAction = ReturnType<typeof addProds> | ReturnType<typeof deleteProds>;

// type of state
type CartState = IProductItems[];

const initialState: CartState = [];

// reducer
function cart(state: CartState = initialState, action: CartAction) {
  switch (action.type) {
    case ADD_PRODS:
      return [...state, action.payload];
    case DELETE_PRODS:
      return [state.filter((prod)=>{
          if(prod.id !== action.payload){
              return prod;
          }
      })];
    default:
        return state;
  }
}

export default cart;
