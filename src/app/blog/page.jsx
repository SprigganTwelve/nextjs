import styles from './page.module.css'
import Image from "next/image";
import Link from 'next/link';
import { notFound } from 'next/navigation';


async function  getData() {
    try{
        const res = await fetch('http://localhost:3000/api/posts')
        return res.json();
    }catch(err){
            console.log(err)
            throw notFound()
    }
}


const Blog = async () => {
    const data = await getData();

    return (
        <div className={styles.mainConatiner}>
            {data.map(item=>(
                    <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
                    <div>
                        <Image 
                        src={item.img} 
                        alt="Blog 1"
                        width={400}
                        height = {250}
                        className = {styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                    </Link>
            ))}

        </div>
    )
}

export default Blog
