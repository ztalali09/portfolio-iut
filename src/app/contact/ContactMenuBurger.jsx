"use client";
import { useRef, useState, useEffect } from 'react';
import styles from '../../components/Header/style.module.scss';
import navStyles from '../../components/Header/nav/style.module.scss';
import { AnimatePresence } from 'framer-motion';
import Nav from '../../components/Header/nav';
import Rounded from '../../common/RoundedButton';

export default function ContactMenuBurger() {
  const [isActive, setIsActive] = useState(false);
  const button = useRef(null);

  // Optionally, you can add scroll/gsap logic if needed

  return (
    <>
      <div className={styles.headerButtonContainer} style={{ transform: 'scale(1)', opacity: 1, zIndex: 100, position: 'fixed', top: 30, right: 30, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
} 