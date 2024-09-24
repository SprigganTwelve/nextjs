import React from "react";
import styles from "./page.module.css";
import Image from "next/image";




async function  getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) {
      throw new Error('Failed to fetch data')
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, voluptates? Accusamus saepe nisi optio, fuga quisquam quod et molestiae commodi pariatur reprehenderit repellat molestias laboriosam dolor deleniti atque nulla non, aliquam amet deserunt. 
          </p>
          <div className={styles.author}>
            <Image
              src="/user.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/view.jpg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto optio natus sapiente magni aperiam a maxime, nihil esse. Repellat qui similique ducimus quia asperiores eius rem nemo velit totam reprehenderit impedit alias quo illo amet ullam ab eaque dignissimos aspernatur facere optio eveniet a, laboriosam excepturi culpa! Aut neque nemo similique sed at fugit fuga, ipsam esse laboriosam ullam laudantium numquam aspernatur voluptas, aliquam nisi. Saepe vel esse, adipisci id libero fuga ducimus ut animi velit, similique necessitatibus. Modi molestias, quo ratione ex voluptates, voluptate inventore iusto fugit laudantium cum eius hic accusantium delectus quisquam officiis architecto sequi eos necessitatibus quasi similique nihil saepe sint fuga! Laborum iste quas, earum laboriosam sed recusandae explicabo minus obcaecati quia consequuntur ipsum voluptatum odio exercitationem dolores doloribus non amet. Officiis quae numquam deleniti impedit! Asperiores cum tenetur doloribus itaque assumenda rem, impedit laudantium velit veniam nemo? Inventore aut quae repellat corporis blanditiis, repudiandae est odit obcaecati suscipit consectetur reiciendis eius numquam quibusdam dolor iure exercitationem temporibus, tempore facere incidunt sequi at laborum pariatur! Vero eum perferendis distinctio temporibus, optio ipsa aut fuga cumque nulla. Doloribus vitae reiciendis quam incidunt voluptatem repellendus necessitatibus animi culpa, eveniet alias totam assumenda, possimus ipsam nostrum voluptate fuga, consectetur voluptatum labore placeat cupiditate minus officiis voluptas id? Illo aspernatur amet harum dicta, magnam mollitia quibusdam nam laudantium maiores facere eius reiciendis molestiae? Provident asperiores sint a. Consequatur aliquam eos vero alias dignissimos officiis molestiae ullam adipisci. Nulla culpa sit delectus aperiam, nihil aliquid? Corrupti beatae repellat cum. Aliquid, nihil fugit labore magnam fuga a eum, inventore odit cupiditate, similique doloribus reiciendis et sequi. Distinctio neque provident enim est! Optio nostrum quod, temporibus illo fuga voluptatum, sed facere delectus deserunt beatae dicta consequatur adipisci nihil dolore harum natus cupiditate minus, error architecto placeat enim nemo? Laboriosam consequuntur commodi consequatur eius quis ipsa adipisci eaque repellat. Nesciunt natus rem ratione assumenda dolore libero eos at impedit fuga commodi veritatis labore laudantium officiis deleniti tempora, corporis corrupti beatae, facilis, iure sint autem sunt. Molestias, repellat? Reiciendis vero veniam earum! Deleniti quibusdam laboriosam nostrum vel rerum sunt suscipit obcaecati natus quas hic. Provident dicta totam vitae, voluptate excepturi perspiciatis at ipsum voluptas nulla labore, eos saepe, quisquam unde eveniet cum sit maiores ratione consequuntur? Quis temporibus rem praesentium, facere dolor, et hic aperiam neque, reprehenderit deleniti vero veniam. Et cum doloremque mollitia illum placeat ipsa, quidem quibusdam inventore impedit laborum aperiam deleniti? Vel, tempora, labore est dicta sequi voluptate mollitia architecto at repudiandae totam sed. Corrupti voluptatibus possimus reprehenderit debitis. Facilis culpa minima corrupti blanditiis laboriosam explicabo quod itaque officia quibusdam voluptatibus rem sit, totam quisquam molestiae a et minus autem accusantium ullam voluptas, ipsam alias. 
        </p>
      </div>
    </div>
  );
};

export default BlogPost;