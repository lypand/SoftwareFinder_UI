import React from 'react'
import Product from './Product'
import { Container, Row, Col } from 'react-bootstrap'

const Products = ({ products }) => {
  return (
        <Container>
            <Row>
            {products.map((product, index) => (
               <Col lg="6" key={index}>
                   <Product product={product}></Product>
                   <br></br>
                </Col>

            ))}
            </Row>
        </Container>
  )
}

export default Products
