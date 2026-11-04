import { Navbar } from "../components/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F7F4]">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#668775]">
          Ekologija • Zaštita • Projektovanje
        </p>

        <h1 className="text-5xl font-bold text-[#183D32]">
          Dobro došli u ZAEKO
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Stručna rešenja iz oblasti ekologije,
          zaštite životne sredine i projektovanja.
        </p>
      </section>
    </main>
  );
}
