import React from 'react'
import { Card,Col } from 'react-bootstrap';

const Product = ({ product }) => {
    return (
        <Card border="success">
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle>Version:{product.version}</Card.Subtitle>
        </Card>
    )
}

export default Product
