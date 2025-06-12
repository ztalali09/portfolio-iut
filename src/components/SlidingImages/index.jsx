import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#e3e5e7",
        src: "telephones.jpg"
    },
    {
        color: "#d6d7dc",
        src: "decimal.jpg"
    },
    {
        color: "#e3e3e3",
        src: "C1-tel.png"
    },
    {
        color: "#21242b",
        src: "google.jpg"
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "MCD_5.jpg"
    },
    {
        color: "#e5e0e1",
        src: "panda.jpg"
    },
    {
        color: "#d7d4cf",
        src: "avatar_games.png"
    },
    {
        color: "#e1dad6",
        src: "wix.jpg"
    }
]

export default function SlidingImages({ images }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{ y: y1 }} className={styles.slider}>
                {images.map((image, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </motion.div>
            <motion.div style={{ y: y2 }} className={styles.slider}>
                {images.map((image, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </motion.div>
            <motion.div style={{ y: y3 }} className={styles.slider}>
                {images.map((image, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
