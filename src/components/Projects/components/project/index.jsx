'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, manageModal}) {
    return (
        <a href="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
                <h2>{title}</h2>
                <p>Design & Développement</p>
            </div>
        </a>
    )
}
