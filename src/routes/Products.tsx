import React from "react";
import { productItems,IProductItems } from "../models/productItems";
import { Row, Col, Card, Container, CardHeader, CardBody } from "reactstrap";

function Products() {

  return (
    <Container>
      {productItems.sort((a:IProductItems,b:IProductItems)=>{
            return a.score - b.score;
        }) && productItems.map((prod, index) => (
        <Card>
            <CardHeader>
                {prod.title}
            </CardHeader>
            <CardBody>
                <Row>
                    <Col md="3">
                        <img className="img-fluid" src={prod.coverImage} alt="Responsive image"/>
                    </Col>
                    <Col>
                        가격 : {prod.price} 원
                    </Col>
                </Row>
            </CardBody>
        </Card>
      ))}
    </Container>
  );
}

export default Products;
