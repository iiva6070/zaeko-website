
import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-bold text-[#183D32]">
          ZAEKO
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/">Početna</Link>
          <Link href="/o-nama">O nama</Link>
          <Link href="/usluge">Usluge</Link>
          <Link href="/reference">Reference</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </nav>
    </header>
  );
}
