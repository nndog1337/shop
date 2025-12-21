import React, { type ReactNode } from 'react'
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';

interface Props{
  children: ReactNode
  title?: string
}

const Layout = ({children, title}: Props) => {
  return (
    <div className={styles.layout}>
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/cart'>Cart</Link>
        </nav>
      </header>
      <h1 className={styles.heading}>{title}</h1>
      {children}
    </div>
  )
}

export default Layout
