"use client";

import {
  Phone,
  Smartphone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

import "./ContactSection.css";

export function ContactSection() {
  return (
    <section id="kontakt" className="contactSection">
      <div className="contactContainer">

        {/* NASLOV SEKCIJE */}

        <div className="contactHeading">
          <span className="contactLabel">
            KONTAKTIRAJTE NAS
          </span>

          <h2>Kako vam možemo pomoći?</h2>

          <p>
            Za dodatne informacije o našim uslugama,
            pošaljite nam upit ili nas kontaktirajte direktno.
          </p>
        </div>

        <div className="contactGrid">

          {/* KONTAKT FORMA */}

          <div className="contactFormCard">
            <h3>Pošaljite nam upit</h3>

            <form
              className="contactForm"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Slanje upita još nije omogućeno.");
              }}
            >

              <div className="formRow">

                <div className="formGroup">
                  <label htmlFor="fullName">
                    Ime i prezime *
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Vaše ime i prezime"
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="company">
                    Naziv preduzeća
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Naziv preduzeća"
                  />
                </div>

              </div>

              <div className="formRow">

                <div className="formGroup">
                  <label htmlFor="email">
                    E-mail adresa *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vas@email.com"
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="phone">
                    Broj telefona
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+387..."
                  />
                </div>

              </div>

              <div className="formGroup">
                <label htmlFor="service">
                  Oblast interesovanja *
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Odaberite djelatnost
                  </option>

                  <option value="zastita-na-radu">
                    Zaštita na radu
                  </option>

                  <option value="zastita-zivotne-sredine">
                    Zaštita životne sredine
                  </option>

                  <option value="zastita-od-pozara">
                    Zaštita od požara
                  </option>

                  <option value="ostalo">
                    Ostalo
                  </option>
                </select>
              </div>

              <div className="formGroup">
                <label htmlFor="message">
                  Vaša poruka *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Kako vam možemo pomoći?"
                  required
                />
              </div>

              <p className="requiredNote">
                * Obavezna polja
              </p>

              <button
                type="submit"
                className="contactSubmit"
              >
                <Send size={18} />
                Pošaljite upit
              </button>

            </form>
          </div>

          {/* DIREKTAN KONTAKT */}

          <div className="directContactCard">

            <h3>Kontaktirajte nas direktno</h3>

            <p className="directContactIntro">
              Na raspolaganju smo vam za sva pitanja,
              konsultacije i informacije o našim uslugama.
            </p>

            <div className="contactInfoList">

              <div className="contactInfoItem">
                <div className="contactInfoIcon">
                  <Phone size={22} />
                </div>

                <div>
                  <h4>Telefon / Fax</h4>

                  <a href="tel:+38755201607">
                    +387 55 201 607
                  </a>
                </div>
              </div>

              <div className="contactInfoItem">
                <div className="contactInfoIcon">
                  <Smartphone size={22} />
                </div>

                <div>
                  <h4>Mobilni telefon</h4>

                  <a href="tel:+38765526183">
                    +387 65 526 183
                  </a>
                </div>
              </div>

              <div className="contactInfoItem">
                <div className="contactInfoIcon">
                  <Mail size={22} />
                </div>

                <div>
                  <h4>E-mail</h4>

                  <a href="mailto:zastita.ekologija.projektovanje@gmail.com">
                    zastita.ekologija.projektovanje@gmail.com
                  </a>
                </div>
              </div>

              <div className="contactInfoItem">
                <div className="contactInfoIcon">
                  <MapPin size={22} />
                </div>

                <div>
                  <h4>Posjetite nas</h4>

                  <p>Trg Đenerala Draže 15</p>
                  <p>76300 Bijeljina, BiH</p>
                </div>
              </div>

              <div className="contactInfoItem">
                <div className="contactInfoIcon">
                  <Clock size={22} />
                </div>

                <div>
                  <h4>Radno vrijeme</h4>

                  <p>Ponedjeljak – petak</p>
                  <p>07:00 – 15:00</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}