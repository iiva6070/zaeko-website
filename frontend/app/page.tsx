
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* HERO SEKCIJA */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
         <div className={styles.heroText}>
          <p className={styles.subtitle}>
            Zaštita • Ekologija • Projektovanje
          </p>

          <h1 className={styles.title}>
            Stručna rješenja za sigurniju i
            održiviju budućnost.
          </h1>

          <p className={styles.description}>
            ZAEKO pruža stručne usluge iz oblasti zaštite na
            radu, zaštite životne sredine i zaštite od požara.
            Naš cilj je odgovorno poslovanje i očuvanje
            životne sredine.
          </p>

          <div className={styles.buttons}>
            <Link
              href="/zastita-na-radu"
              className={styles.primaryButton}
            >
              Istražite naše usluge
            </Link>

            <Link
              href="/kontakt"
              className={styles.secondaryButton}
            >
              Kontaktirajte nas
            </Link>
          </div>
         </div>
        </div>
      </section>

      {/* USLUGE */}
      
     
{/* O NAMA */}
<section className={styles.about}>
   <span className={styles.aboutLeafLeft} aria-hidden="true">
    🌿
  </span>

  <span className={styles.aboutLeafRight} aria-hidden="true">
    🌿
  </span>
  <div className={styles.aboutContainer}>

    <div className={styles.aboutImage}>
      <Image
        src="/images/zaeko-o-nama.png"
        alt="Zaštitni šljem ZAEKO i projektna dokumentacija"
        fill
        sizes="(max-width: 900px) 100vw, 45vw"
        className={styles.aboutPhoto}
      />
    </div>

    <div className={styles.aboutText}>
      <p className={styles.aboutLabel}>O NAMA</p>

      <h2 className={styles.aboutTitle}>
        Više od decenije iskustva u oblasti zaštite i ekologije
      </h2>

      <p>
        Preduzeće „Zaštita, ekologija i projektovanje“
        d.o.o. Bijeljina (ZAEKO) već više od decenije
        pruža stručne usluge iz oblasti zaštite životne
        sredine, zaštite na radu i zaštite od požara.
      </p>

      <p>
        Preduzeće posjeduje licence nadležnih organa za
        obavljanje poslova iz navedenih oblasti, što nam
        omogućava da pružimo sveobuhvatnu stručnu podršku
        na jednom mjestu.
      </p>

      <p>
        Pored toga, ZAEKO posjeduje međunarodni
        sertifikat ISO 9001 za sistem upravljanja kvalitetom.
      </p>

      <p>
        Naše usluge namijenjene su javnim preduzećima,
        privatnim investitorima i državnim ustanovama,
        uz poseban naglasak na profesionalnost,
        odgovornost i kvalitet pruženih usluga.
      </p>
    </div>

  </div>
</section>


      
<section className={styles.services}>
  <div className={styles.servicesHeading}>
    <p className={styles.sectionLabel}>NAŠE DJELATNOSTI</p>
    <h2 className={styles.sectionTitle}>
      Kompletna podrška iz oblasti zaštite
    </h2>
  </div>

  <div className={styles.cards}>
    <article className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src="/images/zastita-na-radu.png"
          alt="Zaštitni šljem i oprema za rad"
          fill
          sizes="(max-width: 800px) 100vw, 33vw"
          className={styles.cardPhoto}
        />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardIcon}>🛡️</div>
        <h3>Zaštita na radu</h3>
        <p>
          Stručne usluge i rješenja za sigurno radno
          okruženje.
        </p>
        <Link href="/zastita-na-radu" className={styles.cardLink}>
          Saznajte više <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>

    <article className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src="/images/zastita-zivotne-sredine.png"
          alt="Mlada biljka kao simbol očuvanja prirode"
          fill
          sizes="(max-width: 800px) 100vw, 33vw"
          className={styles.cardPhoto}
        />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardIcon}>🌿</div>
        <h3>Zaštita životne sredine</h3>
        <p>
          Očuvanje prirode i održivo poslovanje.
        </p>
        <Link href="/zastita-zivotne-sredine" className={styles.cardLink}>
          Saznajte više <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>

    <article className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src="/images/zastita-od-pozara-nova.png"
          alt="Protivpožarni aparat"
          fill
          sizes="(max-width: 800px) 100vw, 33vw"
          className={styles.cardPhoto}
        />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardIcon}>🔥</div>
        <h3>Zaštita od požara</h3>
        <p>
          Prevencija i zaštita od požara po najvišim
          standardima.
        </p>
        <Link href="/zastita-od-pozara" className={styles.cardLink}>
          Saznajte više <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  </div>
</section>
     <Footer />
    </main>
  );
}
