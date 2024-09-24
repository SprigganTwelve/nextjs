import styles from './page.module.css'
import Image from "next/image";
import Link from 'next/link';

const Blog = () => {
    return (
        <div className={styles.conatiner}>
            <Link href="#" className={styles.conatiner}>
                <div>
                    <Image 
                    src="/blg1.jpg" 
                    alt="Blog 1"
                    width={400}
                    height = {250}
                    className = {styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}></h1>
                    <p className={styles.desc}></p>
                </div>
            </Link>
            <Link href="#" className={styles.conatiner}>
                <div>
                    <Image 
                    src="/blg1.jpg" 
                    alt="Blog 1"
                    width={400}
                    height = {250}
                    className = {styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}></h1>
                    <p className={styles.desc}></p>
                </div>
            </Link>
            <Link href="#" className={styles.conatiner}>
                <div>
                    <Image 
                    src="/blg1.jpg" 
                    alt="Blog 1"
                    width={400}
                    height = {250}
                    className = {styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}></h1>
                    <p className={styles.desc}></p>
                </div>
            </Link>
        </div>
    )
}

export default Blog
