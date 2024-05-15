import React from 'react'
import { Card } from 'react-bootstrap'

function Product({ product }) {
  return (
    <div>
      <Card className="p-3 my-3 rounded">
        <a href={`/product/${product._id}`}>{product.name}</a>
      </Card>
    </div>
  )
}

export default Product