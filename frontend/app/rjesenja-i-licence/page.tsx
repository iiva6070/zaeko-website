import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import {
  Leaf,
  ShieldCheck,
  FileCheck,
  Flame,
  Check,
} from "lucide-react";

import styles from "./page.module.css";

const licenseGroups = [
  {
    title: "Zaštita životne sredine",
    icon: Leaf,
    items: [
      {
        name: "Licenca za obavljanje djelatnosti iz oblasti zaštite životne sredine",
        number: "28-E/07",
        date: "09.12.2015.",
      },
      {
        name: "Rješenje o ispunjenosti uslova za obavljanje djelatnosti iz oblasti zaštite životne sredine",
        number: "28-E/07",
        date: "09.12.2015.",
      },
    ],
  },
  {
    title: "Zaštita na radu",
    icon: ShieldCheck,
    items: [
      {
        name: "Rješenje o ispunjenosti uslova za obavljanje djelatnosti u smislu propisa o zaštiti na radu, procjene rizika, za vršenje periodičnih pregleda i ispitivanje sredstava rada i opreme, električnih i gromobranskih instalacija, fizičkih, hemijskih i bioloških štetnosti, sredstava opreme lične zaštite i osposobljavanje radnika za bezbjedan rad",
        number: "9-O/2017",
        date: "02.06.2017.",
      },
      {
        name: "Licenca za mjerenje fizičkih, hemijskih i bioloških štetnosti i mikroklime – uslova radne sredine",
        number: "1-O/2018",
        date: "12.02.2018.",
      },
      {
        name: "Licenca iz oblasti zaštite na radu u prostoru ugroženom eksplozivnom atmosferom",
        number: "1/18",
        date: "12.02.2018.",
        details: [
          "Vođenje poslova zaštite na radu kod poslodavaca koji imaju prostor ugrožen eksplozivnom atmosferom",
          "Osposobljavanje radnika za bezbjedan rad koji rade ili borave u prostoru ugroženom eksplozivnom atmosferom",
          "Izrada Akta o procjeni rizika kod poslodavca u prostoru ugroženom eksplozivnom atmosferom",
          "Obavljanje preventivnih i periodičnih pregleda i ispitivanja sredstava za rad i uslova radne sredine, u smislu zaštite na radu, u prostoru ugroženom eksplozivnom atmosferom",
        ],
      },
    ],
  },
  {
    title: "Tehnička dokumentacija i ispitivanja",
    icon: FileCheck,
    items: [
      {
        name: "Licenca za izradu tehničke dokumentacije – mašinske, elektro i tehnološke, tehnoloških projekata, podloga i faza za objekte za koje odobrenje za građenje izdaje opštinski organ uprave",
        number: "PL-1062/2016",
        date: "25.10.2016.",
      },
      {
        name: "Rješenje za ispitivanje električnih instalacija do 1000 V",
        number: "24.070/311-136-85-2/17",
        date: "22.09.2017.",
      },
    ],
  },
  {
    title: "Zaštita od požara",
    icon: Flame,
    items: [
      {
        name: "Rješenje za vršenje poslova davanja stručne ocjene o primjeni propisa, standarda i drugih normativa zaštite od požara u tehničkoj dokumentaciji i izradu elaborata zaštite od požara kao priloga projektnoj dokumentaciji za građenje objekta",
        number: "D/P-4-215-348/08",
        date: "22.06.2008.",
      },
    ],
  },
];

export default function RjesenjaILicence() {
  return (
    <>
      <Navbar />

      <main>
        {/* NASLOVNA SEKCIJA */}

        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>

              <span className={styles.heroLabel}>
                ZAEKO — STRUČNOST I POVJERENJE
              </span>

              <h1>Rješenja i licence</h1>

              <div className={styles.heroLine} />

              <p>
                Stručnost našeg preduzeća zasniva se na
                profesionalnim standardima, odgovornom
                poslovanju i stručnim ovlašćenjima za
                obavljanje djelatnosti.
              </p>

            </div>
          </div>
        </section>

        {/* SEKCIJA LICENCI */}

        <section className={styles.services}>
          <div className={styles.servicesContainer}>

            <div className={styles.servicesHeading}>
              <span className={styles.sectionLabel}>
                RJEŠENJA I OVLAŠĆENJA
              </span>

              <h2 className={styles.sectionTitle}>
                Licence i rješenja za rad
              </h2>
            </div>

            <div className={styles.servicesGrid}>
              {licenseGroups.map((group) => {
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

                    <ul className={styles.licenseList}>
                      {group.items.map((item) => (
                        <li
                          key={item.name}
                          className={styles.licenseItem}
                        >
                          <Check
                            size={19}
                            strokeWidth={2}
                            className={styles.checkIcon}
                            aria-hidden="true"
                          />

                          <div className={styles.licenseContent}>
                            <h4>{item.name}</h4>

                            <div className={styles.licenseMeta}>
                              <span>
                                Broj: {item.number}
                              </span>

                              <span>
                                Datum izdavanja: {item.date}
                              </span>
                            </div>

                            {item.details && (
                              <details className={styles.licenseDetails}>
                                <summary>
                                  Detalji ovlašćenja
                                </summary>

                                <ul>
                                  {item.details.map((detail) => (
                                    <li key={detail}>
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </details>
                            )}

                          </div>
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