import React from "react";
import {Button} from 'reactstrap';

interface IProps{
    prodsPerPage: number;
    totalProds: number;
    paginate: Function;
}

const Pagination = ({ prodsPerPage, totalProds, paginate }:IProps) => {
  const pageNumber = [];
  
  // Math.ceil: 올림
  for (let i = 1; i <= Math.ceil(totalProds / prodsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="text-center">
      {pageNumber.map((pageNum) => (
        <Button
          key={pageNum}
          className="pagination_item"
          onClick={() => paginate(pageNum)}
        >
          {pageNum}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;