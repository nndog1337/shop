import { useState } from 'react'
import styles from "./styles.module.css";
import cn from 'clsx'

interface Props{
  images: string[]
}

const Gallery = ({images}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className={styles.gallery}>
      
      <div style={{backgroundImage:`url(${images[currentIndex]})`}} className={cn(styles.image, styles.main)}/>

    <div className={styles.list}>
    {images.map((image,index) => (
      <button key={image} onClick={() => setCurrentIndex(index)} className={cn(styles.item, {[styles.active]: index === currentIndex})}>
        <div style={{backgroundImage:`url(${image})`}} className={styles.image}/>
      </button>
    ))}
    </div>
    </div>

  )
}

export default Gallery
