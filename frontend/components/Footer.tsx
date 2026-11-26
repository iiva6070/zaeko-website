import "./Footer.css";
import { MapPin, Phone, Smartphone, Mail,Clock,} from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* KONTAKT INFORMACIJE */}
        <div className="footer-contact">
          <h2>ZAEKO</h2>
          <div className="footer-line" />

          <p className="footer-company">
            Zaštita ekologija i projektovanje d.o.o.
          </p>

          <div className="footer-info">

            <div className="footer-info-item">
              <MapPin size={19} strokeWidth={1.5} />

              <div>
                Trg Đenerala Draže 15
                <br />
                76300 Bijeljina, BiH
              </div>
            </div>

            <div className="footer-info-item">
              <Phone size={19} strokeWidth={1.5} />

              <span>
                Tel/Fax:{" "}
                <a href="tel:+38755201607">
                  +387 55 201 607
                </a>
              </span>
            </div>

            <div className="footer-info-item">
              <Smartphone size={19} strokeWidth={1.5} />

              <span>
                Mob:{" "}
                <a href="tel:+38765526183">
                  +387 65 526 183
                </a>
              </span>
            </div>

            <div className="footer-info-item">
              <Mail size={19} strokeWidth={1.5} />

              <a href="mailto:zastita.ekologija.projektovanje@gmail.com">
                zastita.ekologija.projektovanje@gmail.com
              </a>
            </div>

            <div className="footerWorkingHours">
  <Clock size={22} />

  <div>
    <h4>Radno vrijeme</h4>
    <p>Ponedjeljak – petak: 07:00 – 15:00</p>
  </div>
</div>

          </div>
        </div>

        {/* LOKACIJA */}
        <div className="footer-location">
          <h3>Lokacija</h3>
          <div className="footer-line" />

          <iframe
            src="https://maps.google.com/maps?q=Trg%20Djenerala%20Draze%2015%2C%20Bijeljina%2C%20BiH&t=&z=16&output=embed"
            title="Lokacija preduzeća ZAEKO"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            className="footer-map-link"
            href="https://www.google.com/maps/search/?api=1&query=Trg+Djenerala+Draze+15+Bijeljina"
            target="_blank"
            rel="noopener noreferrer"
          >
            Otvori u Google Maps ↗
          </a>
        </div>

      </div>

      {/* DONJI DIO FOOTERA */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ZAEKO.
          Sva prava zadržana.
        </p>
      </div>

    </footer>
  );
}