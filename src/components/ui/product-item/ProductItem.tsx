import React from 'react'
import type { IProduct } from '../../../types/product'
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';

const ProductItem = ({product}: IProduct) => {
  return (
    <div className={styles.item}>
      <Link to={`/product/${product.id}`}>
        <img src={product.images} alt={product.title} />
      </Link>
      <div className={styles.heading}>{product.title}</div>
      <div className={styles.price}>{new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency:'USD'
      }).format(product.price)}</div>
      {product.brand}
    </div>
  )
}

export default ProductItem
