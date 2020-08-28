import {IProductItems} from '../../models/productItems';

// actions
const ADD_PRODS = 'ADD_PRODS' as const;
const DELETE_PRODS = 'DELETE_PRODS' as const;

// action creators
export const addProds = (prods:IProductItems) => ({type:ADD_PRODS,payload:prods});
export const deleteProds = () => ({type:DELETE_PRODS});

// reducer
function products(){
    
}

export default products;