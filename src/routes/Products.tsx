import React, { useEffect } from 'react';
import {IProductItems} from '../models/productItems';
import { 
    Button,
    Col, 
    Card,
    CardHeader, 
    CardBody,
    Row, 
} from "reactstrap";

function Products({products,toggleCartBtn}:any){
    useEffect(()=>{
        console.log(products);
    },);

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
                            {prod.isCart === false? 
                                (<Button
                                    onClick={()=>toggleCartBtn(prod.id)}
                                >
                                    담기
                                </Button>) : (
                                <Button
                                    onClick={()=>toggleCartBtn(prod.id)}
                                >
                                    빼기
                                </Button>)}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            ))}
        </>
    );
}

export default Products;