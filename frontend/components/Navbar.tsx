
"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Početna" },
    { href: "/zastita-na-radu", label: "Zaštita na radu" },
    {
      href: "/zastita-zivotne-sredine",
      label: "Zaštita životne sredine",
    },
    { href: "/zastita-od-pozara", label: "Zaštita od požara" },
    { href: "/rjesenja-i-licence", label: "Rješenja i licence" },
  ];

  return (
    <header className="zaeko-header">
      <nav className="zaeko-nav">
        <Link href="/" className="zaeko-brand">
          <span className="zaeko-logo" aria-hidden="true">
            🌍
          </span>

          <span className="zaeko-brand-text">
            <strong>ZAEKO</strong>
            <small>Zaštita • Ekologija • Projektovanje</small>
          </span>
        </Link>

        <button
          type="button"
          className="zaeko-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otvori navigaciju"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <div className={`zaeko-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
