import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import {
  ClipboardList,
  FlaskConical,
  Recycle,
  Leaf,
  Check,
} from "lucide-react";

import styles from "./page.module.css";

const serviceGroups = [
  {
    title: "Studije i ekološka dokumentacija",
    icon: ClipboardList,
    items: [
      "Izrada studija uticaja na životnu sredinu",
      "Izrada dokaza uz zahtjev za izdavanje ekološke dozvole",
      "Izrada plana aktivnosti",
    ],
  },
  {
    title: "Mjerenja i kontrola kvaliteta",
    icon: FlaskConical,
    items: [
      "Mjerenje emisije zagađivača vazduha, vode i zemljišta",
      "Analiza i kontrola kvaliteta vazduha, vode i zemljišta",
      "Mjerenje vanjske buke",
    ],
  },
  {
    title: "Upravljanje otpadom i procjena rizika",
    icon: Recycle,
    items: [
      "Izrada Plana upravljanja otpadom",
      "Procjena opasnosti od hemijskog udesa i od zagađivanja životne sredine",
    ],
  },
  {
    title: "Projektovanje i zaštita prirodnih resursa",
    icon: Leaf,
    items: [
      "Projektovanje mjera za zaštitu zemljišta, vazduha, vode, biljnog i životinjskog svijeta",
      "Izrada tehnoloških projekata",
    ],
  },
];

export default function ZastitaZivotneSredine() {
  return (
    <>
      <Navbar />

      <main>
        {/* NASLOVNA SEKCIJA */}

        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>

              <span className={styles.heroLabel}>
                ZAEKO — NAŠE DJELATNOSTI
              </span>

              <h1>Zaštita životne sredine</h1>

              <div className={styles.heroLine} />

              <p>
                Pružamo stručne usluge iz oblasti zaštite
                životne sredine, usmjerene na očuvanje
                prirodnih resursa, sprečavanje zagađenja
                i odgovorno upravljanje životnom sredinom.
              </p>

            </div>
          </div>
        </section>

        {/* SEKCIJA USLUGA */}

        <section className={styles.services}>
          <div className={styles.servicesContainer}>

            <div className={styles.servicesHeading}>
              <span className={styles.sectionLabel}>
                NAŠE USLUGE
              </span>

              <h2 className={styles.sectionTitle}>
                Poslovi iz oblasti zaštite životne sredine
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