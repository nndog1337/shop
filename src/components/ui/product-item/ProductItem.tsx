import React from 'react'
import type { IProduct } from '../../../types/product'
import styles from "./styles.module.css";

const ProductItem = ({product}: IProduct) => {
  return (
    <div className={styles.item}>
      <img src={product.images} alt={product.title} />
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
