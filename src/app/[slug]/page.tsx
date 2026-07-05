import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getAdjacentArticles } from "@/lib/articles";
import { articleContent } from "@/lib/articleContent";
import Sidebar from "@/components/Sidebar";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const content = articleContent[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: content?.metaDescription ?? article.description,
    openGraph: {
      title: article.title,
      description: content?.metaDescription ?? article.description,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const content = articleContent[slug];

  if (!article) notFound();

  const { prev, next } = getAdjacentArticles(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8 flex items-center gap-1.5" aria-label="Brotkrumennavigation">
        <Link href="/" className="hover:text-tennis transition-colors cursor-pointer">Startseite</Link>
        <span aria-hidden="true">/</span>
        <Link href="/#ratgeber" className="hover:text-tennis transition-colors cursor-pointer">Ratgeber</Link>
        <span aria-hidden="true">/</span>
        <span className="text-tennis-dark font-medium truncate">{article.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
        {/* ── Article ── */}
        <article aria-labelledby="article-heading">
          {/* Category chip */}
          <div className="mb-4">
            <span className="inline-block bg-tennis-ball/20 text-tennis-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1
            id="article-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-tennis-dark leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {article.title}
          </h1>

          {/* Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
            {article.description}
          </p>

          {/* Hero image */}
          <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-8 bg-tennis-light">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={400}
              className="w-full h-full object-contain p-8"
              priority
            />
          </div>

          {/* AdSense placeholder */}
          {/* <ins className="adsbygoogle" style="display:block" data-ad-client="ca-pub-DEINE_ID" data-ad-slot="DEIN_SLOT" data-ad-format="auto" /> */}

          {/* Article content */}
          {content ? (
            <>
              {content.content}

              {/* Affiliate box */}
              {content.affiliate && (
                <div className="mt-10 bg-tennis-light border border-tennis-border rounded-2xl p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-tennis mb-2">Produkt-Tipp</p>
                  <h3
                    className="text-lg font-bold text-tennis-dark mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {content.affiliate.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">{content.affiliate.text}</p>
                  <a
                    href={content.affiliate.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-block bg-tennis text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-tennis-dark transition-colors duration-150 cursor-pointer"
                  >
                    {content.affiliate.cta}
                  </a>
                  <p className="text-xs text-gray-400 mt-3">* Affiliate-Link. Keine Mehrkosten für Sie.</p>
                </div>
              )}
            </>
          ) : (
            <div className="prose-tk">
              <p className="text-gray-600 italic">Inhalt folgt in Kürze.</p>
            </div>
          )}

          {/* Prev / Next navigation */}
          <nav
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
            aria-label="Artikel-Navigation"
          >
            {prev && (
              <Link
                href={`/${prev.slug}`}
                className="group bg-white border border-tennis-border rounded-xl p-4 hover:border-tennis transition-colors duration-150 cursor-pointer"
              >
                <span className="text-xs text-gray-500 block mb-1">← Vorheriger Artikel</span>
                <span
                  className="font-semibold text-tennis-dark text-sm group-hover:text-tennis transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {prev.title}
                </span>
              </Link>
            )}
            {next && (
              <Link
                href={`/${next.slug}`}
                className="group bg-white border border-tennis-border rounded-xl p-4 hover:border-tennis transition-colors duration-150 cursor-pointer sm:text-right"
              >
                <span className="text-xs text-gray-500 block mb-1">Nächster Artikel →</span>
                <span
                  className="font-semibold text-tennis-dark text-sm group-hover:text-tennis transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {next.title}
                </span>
              </Link>
            )}
          </nav>
        </article>

        {/* ── Sidebar ── */}
        <div className="lg:sticky lg:top-24">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
