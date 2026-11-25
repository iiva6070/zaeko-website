import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import {
  ClipboardList,
  Droplets,
  FireExtinguisher,
  ShieldCheck,
  Check,
} from "lucide-react";

import styles from "./page.module.css";

const serviceGroups = [
  {
    title: "Projektna dokumentacija i stručne ocjene",
    icon: ClipboardList,
    items: [
      "Izrada elaborata zaštite od požara, kao i priloga projektnoj dokumentaciji",
      "Stručna ocjena o primjeni propisa, standarda i drugih normativa zaštite od požara u tehničkoj dokumentaciji",
    ],
  },
  {
    title: "Pregledi i ispitivanja hidrantske mreže",
    icon: Droplets,
    items: [
      "Ispitivanje vodenog pritiska u hidrantskoj mreži",
      "Ispitivanje hidrantskog crijeva na vodeni pritisak",
      "Pregled i ispitivanje hidrantske mreže",
    ],
  },
  {
    title: "Protivpožarni aparati i oprema",
    icon: FireExtinguisher,
    items: [
      "Ispitivanje posuda (aparata za gašenje) na vodeni pritisak",
      "Nabavka i isporuka novih protivpožarnih aparata i hidrantske opreme",
      "Pregled i kontrola PP aparata",
    ],
  },
  {
    title: "Obuka radnika i stručna saradnja",
    icon: ShieldCheck,
    items: [
      "Obuka radnika iz oblasti zaštite od požara",
      "Obuka radnika koji rukuju zapaljivim tečnostima i gasovima",
      "Vođenje poslova iz zaštite od požara",
    ],
  },
];

export default function ZastitaOdPozara() {
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

              <h1>Zaštita od požara</h1>

              <div className={styles.heroLine} />

              <p>
                Pružamo stručne usluge iz oblasti zaštite
                od požara, usmjerene na prevenciju,
                smanjenje rizika i povećanje bezbjednosti
                ljudi, imovine i radnog okruženja.
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
                Poslovi iz oblasti zaštite od požara
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