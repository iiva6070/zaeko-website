import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import styles from "./page.module.css";
import {
  ClipboardList,
  Settings,
  ShieldCheck,
  Files,
  Check,
} from "lucide-react";

const serviceGroups = [
  {
    title: "Procjena rizika i tehnička dokumentacija",
    icon: ClipboardList,
    items: [
      "Izrada Akta o procjeni rizika za sva radna mjesta u radnoj sredini",
      "Izrada investiciono-tehničke dokumentacije i mišljenja na istu",
      "Ovjera projektne dokumentacije",
      "Stručna ocjena o primjeni propisa, standarda i drugih normativa zaštite na radu u tehničkoj dokumentaciji",
    ],
  },
  {
    title: "Pregledi i tehnička ispitivanja",
    icon: Settings,
    items: [
      "Periodični pregled i ispitivanje mašina, uređaja i druge opreme",
      "Periodični pregled sa provjerom ispravnosti oruđa za rad, električnih instalacija i gromobranskih instalacija",
      "Periodični pregled svih vrsta transportnih sredstava",
      "Mjerenje i ispitivanje statičkog elektriciteta",
      "Električna mjerenja na instalacijama i uređajima",
      "Provjera galvanske neprekidnosti metalnih masa",
      "Mjerenje otpora izolacije",
      "Pregled i ispitivanje električnih gromobranskih instalacija",
    ],
  },
  {
    title: "Ispitivanje radne sredine i obuka radnika",
    icon: ShieldCheck,
    items: [
      "Mikroklimatska mjerenja uslova radne sredine za zimski i ljetni period",
      "Ispitivanje buke u radnoj sredini",
      "Obuka radnika iz oblasti zaštite na radu, kao i obuka za bezbjedan rad po vrstama zanimanja",
      "Obuka i provjera osposobljenosti radnika koji rukuju zapaljivim i eksplozivnim materijama u prometu",
    ],
  },
  {
    title: "Normativni akti i stručna saradnja",
    icon: Files,
    items: [
      "Izrada svih normativnih akata iz zaštite na radu i zaštite od požara",
      "Izrada uputstava za rukovanje i bezbjedan rad na mašinama i uređajima za rad",
      "Ustrojavanje obavezne evidencije iz ZNR i PPZ",
      "Vođenje poslova iz zaštite na radu – ugovor o poslovno-tehničkoj saradnji",
    ],
  },
];

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
        <section className={styles.services}>
  <div className={styles.servicesContainer}>

    <div className={styles.servicesHeading}>
      <span className={styles.sectionLabel}>
        NAŠE USLUGE
      </span>

      <h2 className={styles.sectionTitle}>
        Poslovi iz oblasti zaštite na radu
      </h2>
    </div>

    <div className={styles.servicesGrid}>
      {serviceGroups.map((group) => {
        const Icon = group.icon;

        return (
          <article
            key={group.title}
            className={styles.serviceCard}
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Icon size={28} strokeWidth={1.7} />
              </div>

              <h3>{group.title}</h3>
            </div>

            <ul className={styles.serviceList}>
              {group.items.map((item) => (
                <li key={item}>
                  <Check
                    size={18}
                    strokeWidth={2}
                    className={styles.checkIcon}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>

  </div>
</section>
      </main>

      <Footer />
    </>
  );
}