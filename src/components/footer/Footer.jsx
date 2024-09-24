
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 World31. all rights reserved</div>
      <div className={styles.social}>
          <Image className={styles.icon}  src="/instagram.png" width={20} height={20} alt='World dev'/>
          <Image className={styles.icon}  src="/social.png" width={20} height={20} alt='World dev'/>
          <Image className={styles.icon}  src="/linkedin.png" width={20} height={20} alt='World dev'/>
          <Image className={styles.icon}  src="/pinterest.png" width={20} height={20} alt='World dev'/>
          <Image className={styles.icon}  src="/github.png" width={20} height={20} alt='World dev'/>
      </div>
    </div>
  )
};

export default Footer;
