import React from "react";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import MainPage from "./components/mainPage/MainPage";

export default function Home() {



  return (
    <main className={styles.main}>

      <Header/>

      <MainPage/>

      <div className={styles.devPages} id="teste"></div>
      <div className={styles.devPages}></div>
      <div className={styles.devPages}></div>

    </main>
  )
}
