"use client"

import React, { useEffect, useState } from 'react';
import styles from "./header.module.css";
import { motion, useScroll } from 'framer-motion';
import HeaderOpt from './HeaderOpt';

function Header() {

    const { scrollYProgress } = useScroll();
    const [ windowYSize, setWindowYSize ] = useState<number | undefined>(undefined);
    const [ radioValue, setRadioValue] = useState<number>(0);

    const handleWindowResize = () => {setWindowYSize(window.innerHeight);}

    useEffect(() => {

      window.addEventListener("resize", handleWindowResize);

      handleWindowResize();

    }, [])

    const handleScroll = (optValue : number) => {

      setRadioValue(optValue);

      window.scrollTo({
        top : windowYSize? windowYSize * optValue : windowYSize,
        behavior : "smooth",
      });

    }

  return (
    <nav className={styles.nav}>

      <motion.div 
          className={styles.progressBar}
          style={{scaleX : scrollYProgress}}
      >
      </motion.div>

      <div className={styles.headerOptContainer}>

        <HeaderOpt
            handleScroll={handleScroll}
            optLabel="HOME"
            optValue={0}
            radioValue={radioValue}
        />

        <HeaderOpt
            handleScroll={handleScroll}
            optLabel="PROJETOS"
            optValue={1}
            radioValue={radioValue}
        />

        <HeaderOpt
            handleScroll={handleScroll}
            optLabel="HABILIDADES"
            optValue={2}
            radioValue={radioValue}
        />

        <HeaderOpt
            handleScroll={handleScroll}
            optLabel="CURRICULLUM"
            optValue={3}
            radioValue={radioValue}
        />

      </div>

    </nav>
  )
}

export default Header;