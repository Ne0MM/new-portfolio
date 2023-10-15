import React, { CSSProperties } from 'react';
import styles from "./headerOpt.module.css"

type Props = {
    handleScroll : (scrollPos : number) => void,
    optLabel : string,
    optValue : number,
    radioValue : number,
}

function HeaderOpt({handleScroll, optLabel, optValue, radioValue}: Props) {
  return (
    <div className={styles.headerOptContainer}>

        <input 
            type="radio"
            name="headerOpt"
            value={optValue}
            id={optLabel}
            checked={radioValue === optValue}
            onChange={() => handleScroll(optValue)}
            className={styles.headerOptInput}
        />

        <div 
            className={styles.optDot}
            style={{["--button-show"] : radioValue === optValue? "white" : "transparent"} as CSSProperties}
        />

        <label 
            htmlFor={optLabel}
            className={styles.headerOptLabel}
        >
            {optLabel}
        </label>

    </div>
  )
}

export default HeaderOpt;