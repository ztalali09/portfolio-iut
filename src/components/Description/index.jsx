import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function Description() {

    const phrase = "Relentlessly curious and driven, I’m forging a unique path in tech—blending deep understanding with creative execution.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>I transform complex challenges into elegant, real-world digital solutions by leveraging the latest technologies and a passion for innovation.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <a href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Rounded className={styles.button}>
                            <p>More About Me →</p>
                        </Rounded>
                    </a>
                </div>
            </div>
        </div>
    )
}
