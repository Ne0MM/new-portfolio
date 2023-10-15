"use client"

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from "./mainPage.module.css";
import Image from 'next/image';
import { motion } from 'framer-motion';
import randomizeLetters from '@/app/functions/randomizeLetters';

type Props = {}

function MainPage({}: Props) {

    const [ nameWord, setNameWord] = useState<string>("PABLO TAVARES");
    const [ skillOne, setSkillOne] = useState<string>("FRONT-END");
    const [ skillTwo, setSkillTwo] = useState<string>("MOBILE");

    const handleSkillsNames = () => {

        randomizeLetters(setSkillOne, skillOne, 29);
        randomizeLetters(setSkillTwo, skillTwo, 43);

    }

  return (
    <section className={styles.section}>
        
        <div className={styles.pageContainer}>

            <motion.div 
                className={styles.nameWord} 
                initial={{ x : "50%", y : "200%", opacity : 0}}
                animate={{ x : 0, y : 0, opacity : 1}}
                transition={{duration : 1.5, ease: "easeInOut"}}
                onAnimationStart={() => randomizeLetters(setNameWord, nameWord)}
            >
                {nameWord}
            </motion.div>

            <div className={styles.myImageWrapper}>
                <motion.div
                    className={styles.myImageContainer}
                    initial={{opacity : 0}}
                    animate={{opacity : 1}}
                    transition={{duration : 1.5, ease: "easeInOut"}}
                >
                    <Image
                    width={1000}
                    height={1000}
                    src="/MyImage.jpeg"
                    alt="My Image"
                    className={styles.myImage}
                    />
                </motion.div>
            </div>

            <motion.div 
                className={styles.skillsNames}
                initial={{opacity : 0, x : "-100%"}}
                animate={{opacity : 1, x : 0}}
                transition={{duration : 1.5, ease: "easeInOut"}}
                onAnimationStart={() => handleSkillsNames()}
            >

                <h1>{skillOne}</h1>

                <h1>{skillTwo}</h1>

            </motion.div>

        </div>

    </section>
  )
}

export default MainPage;