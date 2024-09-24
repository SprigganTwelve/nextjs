import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/button";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
          <h1 className={styles.title}>
            Better design for your digital products.
          </h1>
          <p className={styles.desc}>
            Turning your Idea into Reality.. We bring together the teams from the global tech industry
          </p>
          <Button url={''} text={"See our work"}/>
      </div>
      <div className={styles.item}>
         <Image src="/hero.png" alt="Hero Image" className={styles.img}  width={400} height={400} />
      </div>
    </div>
  );
}
