import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import styles from "./page.module.css";

export default function ZastitaNaRadu() {
  return (
    <>
      <Navbar />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <span className={styles.heroLabel}>
                ZAEKO — NAŠE DJELATNOSTI
              </span>

              <h1>Zaštita na radu</h1>

              <div className={styles.heroLine} />

              <p>
                Pružamo stručne usluge iz oblasti zaštite na radu
                i zaštite zdravlja radnika, sa ciljem sprečavanja
                povreda, unapređenja bezbjednosti radnog okruženja
                i ispunjavanja zakonskih obaveza poslodavaca.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}