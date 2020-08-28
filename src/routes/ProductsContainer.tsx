import React, { useState } from "react";
import { productItems,IProductItems } from "../models/productItems";
import { Container } from "reactstrap";
import Products from './Products';
import Pagination from '../components/Pagination';

function ProductsContainer() {
  const [currentPage,setCurrentPage] = useState(0);
  const prods = productItems.sort((a:IProductItems,b:IProductItems)=> (a.score - b.score));
  const offsetLimit= 5;
  const skipLimit = currentPage * offsetLimit;
  const currentProds = prods.slice(skipLimit, skipLimit + offsetLimit);
  const paginate =(pageNumber:number)=>setCurrentPage(pageNumber-1);

  return (
    <Container>
      <Products products={currentProds}/>
      <Pagination prodsPerPage={offsetLimit} totalProds={productItems.length} paginate={paginate}/>
    </Container>
  );
}

export default ProductsContainer;