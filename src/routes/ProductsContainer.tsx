import React, { useState } from "react";
import { productItems,IProductItems } from "../models/productItems";
import { Container } from "reactstrap";
import Products from './Products';
import Pagination from '../components/Pagination';

function ProductsContainer() {
  const [currentPage,setCurrentPage] = useState(1);
  const [prodsPerPage] = useState(5);
  const prods = productItems.sort((a:IProductItems,b:IProductItems)=>{
    return a.score - b.score});

  const indexOfLastProds = currentPage * prodsPerPage;
  const indexOfFirstProds = indexOfLastProds - prodsPerPage;
  const currentProds = prods.slice(indexOfFirstProds, indexOfLastProds);

  const paginate =(pageNumber:number)=>setCurrentPage(pageNumber);

  return (
    <Container>
      <Products products={currentProds}/>
      <Pagination prodsPerPage={prodsPerPage} totalProds={productItems.length}  paginate={paginate}/>
    </Container>
  );
}

export default ProductsContainer;
