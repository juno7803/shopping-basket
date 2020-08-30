import React, { useState, useEffect } from "react";
import { productItems,IProductItems } from "../models/productItems";
import { Container } from "reactstrap";
import Products from './Products';
import Pagination from '../components/Pagination';

function ProductsContainer() {
  const [currentPage,setCurrentPage] = useState(0); 

  const offsetLimit= 5;
  const skipLimit = currentPage * offsetLimit;
  const currentProds = JSON.parse(localStorage.getItem('products')||'{}').slice(skipLimit, skipLimit + offsetLimit);
  const paginate =(pageNumber:number)=>setCurrentPage(pageNumber-1);

  const toggleCartBtn = (id:string)=>{
    console.log("토글버튼");
    const data = JSON.parse(localStorage.getItem('products')||'{}');
    data.map((prod:IProductItems)=>{
      if(prod.id === id){
        if(prod.isCart){
          prod.isCart = false;
        }else{
          prod.isCart = true;
        }
      }
      return prod;
    }); // 장바구니에 넣을지 뺄지 토글
    localStorage.setItem('products',JSON.stringify(data)); // 다시 로컬스토리지에 저장
  }
  useEffect(()=>{},);

  return (
    <Container>
      <Products products={currentProds} toggleCartBtn={toggleCartBtn}/>
      <Pagination prodsPerPage={offsetLimit} totalProds={productItems.length} paginate={paginate}/>
    </Container>
  );
}

export default ProductsContainer;