import Image from "next/image";
import styles from "./postCard.module.css"
import Link from "next/link";

const PostCard = () =>{

    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src='https://images.pexels.com/photos/21972309/pexels-photo-21972309/free-photo-of-a-girl-with-red-hair-and-a-guitar-sitting-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="post picture" fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>what the fuck is going on aveces me lo pregunto</p>
                <Link href='/blog/post' className={styles.link}>READ MORE</Link>
            </div>
        </div>
        
    )
}

export default PostCard;