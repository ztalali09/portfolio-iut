import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "Étudiant curieux et motivé, je construis pas à pas un parcours solide en informatique. Passionné par la technologie et le code, j'accorde autant d'importance à la compréhension qu'à la création.";
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
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Je développe des solutions innovantes en explorant les technologies modernes et en créant des projets concrets.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <a href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Rounded className={styles.button}>
                            <p>À propos de moi</p>
                        </Rounded>
                    </a>
                </div>
            </div>
        </div>
    )
}
