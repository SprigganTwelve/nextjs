import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/button'
import Image from 'next/image'

const Category = ({params}) => {
    console.log(params)
  return (
    <div className={styles.container}>
        <h1 className={styles.catTitle}>{params.category}</h1>
        <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <p className={styles.desc}>Desc</p>
                <Button text="see more" url="#" />
            </div>
            <div className={styles.imgContainer}>
                <Image
                 className={styles.img}
                 fill = {true} src="/website.1.jpg" 
                 alt=''
                 />
            </div>
        </div>

        <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <p className={styles.desc}>Desc</p>
                <Button text="see more" url="#" />
            </div>
            <div className={styles.imgContainer}>
                <Image
                 className={styles.img}
                 fill = {true} src="/website.1.jpg" 
                 alt=''
                 />
            </div>
        </div>

        <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <p className={styles.desc}>Desc</p>
                <Button text="see more" url="#" />
            </div>
            <div className={styles.imgContainer}>
                <Image
                 className={styles.img}
                 fill = {true} src="/website.1.jpg" 
                 alt=''
                 />
            </div>
        </div>
        
    </div>
  )
}

export default Category
