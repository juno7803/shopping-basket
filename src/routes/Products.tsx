import React, { useEffect } from 'react';
import {IProductItems} from '../models/productItems';
import { Row, Col, Card, Container, CardHeader, CardBody } from "reactstrap";

function Products({products}:any){
    return(
        <>
            {products.map((prod:IProductItems,index:number)=>(
                <Card>
                <CardHeader>
                    {prod.title}
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col md="3">
                            <img className="img-fluid" src={prod.coverImage} alt="Responsive" key={index}/>
                        </Col>
                        <Col>
                            가격 : {prod.price} 원
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            ))}
        </>
    );
}

export default Products;