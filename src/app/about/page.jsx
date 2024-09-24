import styles from './page.module.css';
import Button from '@/components/button/button';
import Image from "next/image";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                src="/pixels.jpeg" 
                fill={true}
                alt=''
                className={styles.img}/>
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital</h1>
                    <h2 className={styles.imgDesc}>Hanrdcrafting award winning gigital exepriences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1>Who are we</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam facilis voluptas ut eligendi assumenda. Sed accusamus repudiandae, vero magni, ex necessitatibus, totam voluptatum nam sapiente ducimus harum atque rem eaque doloremque? Sequi qui perferendis ea quasi amet. Amet deleniti eum ipsum commodi at, aliquam sed et a asperiores sint nam
                        <br/>
                        <br/>
                    possimus illo quas error quo architecto quia est exercitationem tempora recusandae explicabo soluta voluptates libero? Assumenda, dolores reiciendis dicta perferendis vero at porro quos fugit neque veritatis totam velit accusamus aliquid, sunt explicabo quae incidunt. Quia iste labore consequuntur blanditiis non veritatis ducimus, possimus cumque ea totam itaque commodi perspiciatis id voluptatem nemo nostrum! Consequatur harum rerum nam, nesciunt, itaque quas possimus voluptates </p>
                </div>
                <div className={styles.item}>
                    <h1>what we do ?</h1>
                    <p className={styles.desc} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam facilis voluptas ut eligendi assumenda. Sed accusamus repudiandae, vero magni,
                        <br/>
                        <br/> - ex necessitatibus, totam voluptatum nam sapiente ducimus harum atque rem eaque doloremque? Sequi qui perferendis ea quasi amet.
                        <br/>
                        <br/> - Amet deleniti eum ipsum commodi at, aliquam sed et a asperiores sint nam
                    </p>
                    <Button url="/contatc" text="Contact"/>
                </div>
            </div>
        </div>
    )
}

export default About
