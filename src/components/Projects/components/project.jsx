'use client';
import styles from '../style.module.scss'

export default function Project({index, title, manageModal}) {
    return (
        <div 
            onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} 
            onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}}
            className={styles.project}
        >
            <h2>{title}</h2>
        </div>
    )
} 