import React, { type ReactNode } from 'react'
import styles from "./styles.module.css";

interface Props{
  children: ReactNode
  title?: string
}

const Layout = ({children, title}: Props) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>{title}</h1>
      {children}
    </div>
  )
}

export default Layout
