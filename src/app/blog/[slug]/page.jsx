import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                src='https://images.pexels.com/photos/21972309/pexels-photo-21972309/free-photo-of-a-girl-with-red-hair-and-a-guitar-sitting-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt="post picture" 
                fill 
                className={styles.img}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}> Title</h1>
                <div className={styles.detail}>
                    <Image 
                    className={styles.avatar} 
                    src='https://images.pexels.com/photos/21972309/pexels-photo-21972309/free-photo-of-a-girl-with-red-hair-and-a-guitar-sitting-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='avatar img'
                    width={50}
                    height={50}
            
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Kanade Hernandez</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    cock cock cok cock cock cock cock cock cock cock penis xdddddddddddddddddddddddddddddddd
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage