import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
import Sidebar from "@/components/Sidebar";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-tennis-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner.jpg"
            alt="Tenniskompass – Ratgeber für Tennis-Eltern"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        {/* Decorative accents */}
        <div className="absolute right-8 top-8 w-48 h-48 rounded-full bg-tennis-ball/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute right-24 bottom-4 w-24 h-24 rounded-full bg-tennis-ball/15 blur-2xl pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-tennis-ball text-xs font-bold uppercase tracking-widest mb-5">
              <span className="inline-block w-8 h-px bg-tennis-ball" aria-hidden="true"></span>
              Ratgeber für Tennis-Eltern in Deutschland
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ihr Kind entdeckt{" "}
              <span className="text-tennis-ball">Tennis.</span>
              <br className="hidden sm:block" />
              {" "}Wir erklären den Rest.
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
              Vom ersten Schläger bis zum Mannschaftsspiel – 11 Themen, die jeden Tennis-Elternteil in
              den ersten Jahren beschäftigen. Klar geschrieben, ohne Marketingfloskeln.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#ratgeber"
                className="bg-tennis-ball text-tennis-dark px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity duration-150 cursor-pointer"
              >
                Ratgeber ansehen
              </a>
              <a
                href="/turniere"
                className="border border-white/40 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors duration-150 cursor-pointer"
              >
                Turnierkalender
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content + sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">

          {/* ── Category grid ── */}
          <section id="ratgeber" aria-labelledby="ratgeber-heading">
            <div className="flex items-baseline gap-4 mb-8">
              <h2
                id="ratgeber-heading"
                className="text-3xl font-bold text-tennis-dark"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Eltern-Ratgeber
              </h2>
              <span className="text-sm text-tennis-muted font-medium">{articles.length} Themen</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {articles.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/${article.slug}`}
                  className="group bg-white border border-tennis-border rounded-2xl overflow-hidden card-hover animate-fade-in cursor-pointer block"
                  style={{ animationDelay: `${i * 40}ms` }}
                  aria-label={`${article.title} lesen`}
                >
                  {/* Card image */}
                  <div className="aspect-[3/2] bg-tennis-light relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      aria-hidden="true"
                    />
                  </div>
                  {/* Card body */}
                  <div className="p-5">
                    <span className="inline-block bg-tennis-ball/20 text-tennis-dark text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3">
                      {article.category}
                    </span>
                    <h3
                      className="font-bold text-tennis-dark text-base leading-snug mb-2 group-hover:text-tennis transition-colors duration-150"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
                      {article.description}
                    </p>
                    <span className="text-tennis text-sm font-semibold inline-flex items-center gap-1">
                      Weiterlesen
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Sidebar ── */}
          <div className="lg:sticky lg:top-24">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* ── Trust bar ── */}
      <section className="bg-tennis-dark text-white py-10 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              ["11", "Ratgeber-Artikel"],
              ["100 %", "Unabhängig"],
              ["Kostenlos", "Immer"],
              ["DTB-konform", "Fakten"],
            ].map(([value, label]) => (
              <div key={label}>
                <p
                  className="text-2xl font-bold text-tennis-ball"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {value}
                </p>
                <p className="text-white/60 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
