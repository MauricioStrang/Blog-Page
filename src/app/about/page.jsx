import Image from "next/image"
import styles from "./about.module.css"


export const metadata = {
    title: "About Page",
    description: "About description",
  };

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>
                    About Mangatari
                </h2>
                <h1 className={styles.title}>
                    We create private libraries for your mangas
                </h1>
                <p className={styles.desc}>
                    I'm too fucking lazy to copy this so, penis penis penis
                    penis penis penis penis penis penis penis penis penis
                    penis penis penis penis penis penis penis penis penis
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>
                            10K+
                        </h1>
                        <p>
                            years of experience
                        </p>
                    </div>
                    <div className={styles.box}>
                        <h1>
                            234K+
                        </h1>
                        <p>
                            People Reached
                        </p>
                    </div>
                    <div className={styles.box}>
                        <h1>
                            5K+
                        </h1>
                        <p>
                            Services and Plugins
                        </p>
                    </div>

                    
                </div>
            </div>

            <div className={styles.imgContainer}>
                <Image
                src='/about.png'
                alt="About Image"
                fill
                className={styles.img}
                />
            </div>
        </div>
    )
}  

export default AboutPage