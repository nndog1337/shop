import React, { type ButtonHTMLAttributes, type ReactNode } from 'react'
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
}

const Button = ({children, ...rest}: Props) => {
  return (
    <button className={styles.button} {...rest}>{children}</button>
  )
}

export default Button
