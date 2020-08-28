import React from "react";
import { Button, ButtonGroup } from "reactstrap";

interface IProps {
  prodsPerPage: number;
  totalProds: number;
  paginate: Function;
}

const Pagination = ({ prodsPerPage, totalProds, paginate }: IProps) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalProds / prodsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="text-center">
      <ButtonGroup>
        {pageNumber.map((pageNum) => (
          <Button color="info" key={pageNum} onClick={() => paginate(pageNum)}>
            {pageNum}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
