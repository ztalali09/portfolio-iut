import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "À propos",
    href: "/about",
  },
  {
    title: "Projets",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function index({ closeMenu }) {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
      >
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    <div className={styles.header}>
                        <p>Menu</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link 
                        key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}
                        onNavigate={closeMenu}
                        />
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}