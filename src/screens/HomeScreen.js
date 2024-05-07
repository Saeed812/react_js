import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../componet/product'

function HomeScreen() {
  return (
    <div>
        <h1>Latest product</h1>
        <Row>
           {products.map()}
           <Col key={products._id}sm={12} md={6} lg={4} xl={3}>
                <Product Product ={Product}/>
           </Col>
        
        </Row>

    </div>
  )
}

export default HomeScreen