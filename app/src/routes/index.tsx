import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")(  {
  head: () => ({
    meta: [
      { title: "İpek Halı Yıkama — Isparta | Halı Yıkama 130 TL/m²" },
      {
        name: "description",
        content:
          "Isparta İpek Halı Yıkama: Halı yıkama 130 TL/m², minimum 780 TL, ücretsiz alım-teslimat, 2–3 günde teslim. Koltuk yıkama 2.500 TL. Perde yıkama. 0246 242 99 99",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* JSON-LD: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://ispartaipekhaliyikama.com/#business",
            name: "İpek Halı Yıkama",
            description:
              "Isparta merkezde profesyonel halı yıkama, koltuk yıkama ve perde yıkama hizmeti. Ücretsiz halı alım ve teslimat servisi.",
            url: "https://ispartaipekhaliyikama.com",
            telephone: "+90-246-242-99-99",
            areaServed: [
              { "@type": "City", name: "Isparta" },
              { "@type": "AdministrativeArea", name: "Atabey" },
              { "@type": "AdministrativeArea", name: "Eğirdir" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Yıkama Hizmetleri",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Halı Yıkama",
                    description: "Profesyonel halı yıkama hizmeti, ücretsiz alım-teslimat",
                  },
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "130",
                    priceCurrency: "TRY",
                    unitText: "m²",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Koltuk Takımı Yıkama",
                    description: "Yerinde profesyonel koltuk yıkama hizmeti",
                  },
                  price: "2500",
                  priceCurrency: "TRY",
                },
              ],
            },
          }),
        }}
      />

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-ipek-green-50) 0%, var(--color-ipek-cream-100) 100%)",
          padding: "4rem 1rem 3rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
          <div style={{ maxWidth: "640px" }}>
            <p
              style={{
                display: "inline-block",
                padding: "0.25rem 0.75rem",
                backgroundColor: "var(--color-ipek-green-100)",
                color: "var(--color-ipek-green-700)",
                borderRadius: "2rem",
                fontSize: "0.8125rem",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              Isparta ve Çevresinde Hizmet
            </p>
            <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem", lineHeight: 1.15 }}>
              Halılarınız Bizimle
              <br />
              <span style={{ color: "var(--color-ipek-green-600)" }}>Tertemiz Olsun</span>
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "var(--color-ipek-warm-600)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Profesyonel halı yıkama hizmeti. Halınızı kapınızdan alıyor, tertemiz ve hijyenik şekilde teslim ediyoruz.{" "}
              <strong>Ücretsiz alım ve teslimat.</strong>
            </p>

            {/* Price highlights */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <PriceCard label="Halı Yıkama" price="130 TL/m²" sub="Minimum 780 TL" />
              <PriceCard label="Koltuk Takımı" price="2.500 TL" sub="Takım fiyatı" />
              <PriceCard label="Teslimat" price="2–3 Gün" sub="Ücretsiz servis" />
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <a
                href="tel:02462429999"
                data-event="phone_click"
                data-event-category="hero"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.5rem",
                  backgroundColor: "var(--color-ipek-green-700)",
                  color: "#fff",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Hemen Ara
              </a>
              <a
                href="https://wa.me/902462429999?text=Merhaba%2C%20hal%C4%B1%20y%C4%B1kama%20i%C3%A7in%20randevu%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_click"
                data-event-category="hero"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.5rem",
                  backgroundColor: "#25D366",
                  color: "#fff",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                }}
              >
                WhatsApp ile Yazın
              </a>
              <a
                href="/hali-yikama#hesaplayici"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.5rem",
                  border: "1px solid var(--color-ipek-green-700)",
                  color: "var(--color-ipek-green-700)",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                }}
              >
                Fiyat Hesapla
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "4rem 1rem", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Hizmetlerimiz</h2>
          <p style={{ textAlign: "center", color: "var(--color-ipek-warm-600)", marginBottom: "2.5rem", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Isparta ve çevresinde halı, koltuk ve perde yıkama hizmeti veriyoruz.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <ServiceCard
              title="Halı Yıkama"
              desc="Tüm halı türlerinde profesyonel yıkama. 130 TL/m², minimum 780 TL. Ücretsiz alım-teslimat. 2–3 günde tertemiz kapınızda."
              price="130 TL/m²"
              href="/hali-yikama"
              icon="🧹"
            />
            <ServiceCard
              title="Koltuk Yıkama"
              desc="Koltuk takımınızı yerinde derinlemesine temizliyoruz. Lekeler, kir ve alerjenlerden arındırın."
              price="2.500 TL"
              href="/koltuk-yikama"
              icon="🛋️"
            />
            <ServiceCard
              title="Perde Yıkama"
              desc="Tül, stor ve kumaş perdelerinizi özenle yıkıyoruz. Fiyat bilgisi için bize ulaşın."
              price="Teklif Alın"
              href="/perde-yikama"
              icon="🪟"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "4rem 1rem", backgroundColor: "var(--color-ipek-cream-50)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "1.75rem", marginBottom: "2.5rem" }}>
            Nasıl Çalışır?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", textAlign: "center" }}>
            <StepCard num="1" title="Arayın veya Yazın" desc="Bizi telefonla arayın veya WhatsApp'tan yazın. Halınızın m² bilgisini ve adresinizi iletin." />
            <StepCard num="2" title="Halınızı Alalım" desc="Belirlenen gün ve saatte halınızı kapınızdan ücretsiz olarak alıyoruz." />
            <StepCard num="3" title="Profesyonel Yıkama" desc="Halınız özel makinelerle derinlemesine yıkanır ve hijyenik ortamda kurutulur." />
            <StepCard num="4" title="Teslim Edelim" desc="Halınız 2–3 gün içinde tertemiz olarak kapınıza ücretsiz teslim edilir." />
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "4rem 1rem", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>Hizmet Bölgelerimiz</h2>
          <p style={{ color: "var(--color-ipek-warm-600)", marginBottom: "1.5rem", maxWidth: "560px", margin: "0 auto 1.5rem" }}>
            Isparta merkez ve çevre yerleşimlere halı alım-teslimat servisi sunuyoruz.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "1rem" }}>
            {[
              "Isparta Merkez",
              "Atabey (Salı-Cuma)",
              "Eğirdir (Salı-Cuma)",
              "Büyük Gökçeli",
              "Küçük Gökçeli",
              "Büyük Hacılar",
              "Küçük Hacılar",
              "Ali Köyü",
              "Harmanören",
              "Kuleönü",
              "İslamköy",
            ].map((area) => (
              <span
                key={area}
                style={{
                  display: "inline-block",
                  padding: "0.375rem 0.875rem",
                  backgroundColor: "var(--color-ipek-green-50)",
                  color: "var(--color-ipek-green-800)",
                  borderRadius: "2rem",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                }}
              >
                {area}
              </span>
            ))}
          </div>
          <a
            href="/hizmet-bolgeleri"
            style={{
              display: "inline-block",
              marginTop: "0.5rem",
              color: "var(--color-ipek-green-700)",
              fontWeight: 600,
              fontSize: "0.9375rem",
            }}
          >
            Tüm bölgeleri gör &rarr;
          </a>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section style={{ padding: "4rem 1rem", backgroundColor: "var(--color-ipek-cream-50)" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "1.75rem", marginBottom: "2rem" }}>
            Sık Sorulan Sorular
          </h2>
          <FaqItem q="Halı yıkama m² fiyatı ne kadar?" a="Halı yıkama ücretimiz 130 TL/m²'dir. 6 m²'den küçük halılarda minimum ücret 780 TL'dir." />
          <FaqItem q="Halı alım ve teslimat ücretsiz mi?" a="Evet, Isparta merkez ve belirtilen hizmet bölgelerinde halı alım ve teslimat servisi tamamen ücretsizdir." />
          <FaqItem q="Halım kaç günde teslim edilir?" a="Normal koşullarda yaklaşık 2 günde, yoğun dönemlerde 2–3 günde teslim edilir." />
          <FaqItem q="Koltuk yıkama fiyatı ne kadar?" a="Koltuk takımı yıkama ücretimiz 2.500 TL'dir." />
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <a
              href="/sss"
              style={{
                display: "inline-block",
                color: "var(--color-ipek-green-700)",
                fontWeight: 600,
              }}
            >
              Tüm soruları gör &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        style={{
          padding: "3rem 1rem",
          backgroundColor: "var(--color-ipek-green-800)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
          Halılarınız İçin Hemen Randevu Alın
        </h2>
        <p style={{ opacity: 0.85, marginBottom: "1.5rem", maxWidth: "480px", margin: "0 auto 1.5rem" }}>
          Bizi arayın veya WhatsApp'tan yazın, halınızı kapınızdan alalım.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          <a
            href="tel:02462429999"
            data-event="phone_click"
            data-event-category="cta_banner"
            style={{
              padding: "0.875rem 2rem",
              backgroundColor: "#fff",
              color: "var(--color-ipek-green-800)",
              borderRadius: "0.5rem",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            0246 242 99 99
          </a>
          <a
            href="https://wa.me/902462429999?text=Merhaba%2C%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_click"
            data-event-category="cta_banner"
            style={{
              padding: "0.875rem 2rem",
              backgroundColor: "#25D366",
              color: "#fff",
              borderRadius: "0.5rem",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Halı yıkama m² fiyatı ne kadar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Halı yıkama ücretimiz 130 TL/m²'dir. 6 m²'den küçük halılarda minimum ücret 780 TL'dir.",
                },
              },
              {
                "@type": "Question",
                name: "Halı alım ve teslimat ücretsiz mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Isparta merkez ve belirtilen hizmet bölgelerinde halı alım ve teslimat servisi tamamen ücretsizdir.",
                },
              },
              {
                "@type": "Question",
                name: "Halım kaç günde teslim edilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Normal koşullarda yaklaşık 2 günde, yoğun dönemlerde 2–3 günde teslim edilir.",
                },
              },
              {
                "@type": "Question",
                name: "Koltuk yıkama fiyatı ne kadar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Koltuk takımı yıkama ücretimiz 2.500 TL'dir.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}

/* ─── Helper Components ─── */

function PriceCard({ label, price, sub }: { label: string; price: string; sub: string }) {
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#fff",
        borderRadius: "0.75rem",
        border: "1px solid var(--color-ipek-cream-200)",
      }}
    >
      <p style={{ fontSize: "0.75rem", color: "var(--color-ipek-warm-600)", marginBottom: "0.25rem" }}>{label}</p>
      <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-ipek-green-800)", marginBottom: "0.125rem" }}>{price}</p>
      <p style={{ fontSize: "0.75rem", color: "var(--color-ipek-warm-500)" }}>{sub}</p>
    </div>
  );
}

function ServiceCard({ title, desc, price, href, icon }: { title: string; desc: string; price: string; href: string; icon: string }) {
  return (
    <a
      href={href}
      style={{
        display: "block",
        padding: "1.5rem",
        backgroundColor: "var(--color-ipek-cream-50)",
        borderRadius: "0.75rem",
        border: "1px solid var(--color-ipek-cream-200)",
        textDecoration: "none",
        transition: "box-shadow 0.2s",
      }}
    >
      <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.75rem" }}>{icon}</span>
      <h3 style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ fontSize: "0.875rem", color: "var(--color-ipek-warm-600)", lineHeight: 1.6, marginBottom: "0.75rem" }}>{desc}</p>
      <span
        style={{
          display: "inline-block",
          padding: "0.25rem 0.625rem",
          backgroundColor: "var(--color-ipek-green-100)",
          color: "var(--color-ipek-green-800)",
          borderRadius: "0.375rem",
          fontSize: "0.8125rem",
          fontWeight: 600,
        }}
      >
        {price}
      </span>
    </a>
  );
}

function StepCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "48px",
          height: "48px",
          backgroundColor: "var(--color-ipek-green-700)",
          color: "#fff",
          borderRadius: "50%",
          fontSize: "1.25rem",
          fontWeight: 700,
          marginBottom: "0.75rem",
        }}
      >
        {num}
      </div>
      <h3 style={{ fontSize: "1rem", marginBottom: "0.375rem" }}>{title}</h3>
      <p style={{ fontSize: "0.875rem", color: "var(--color-ipek-warm-600)", lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details
      style={{
        marginBottom: "0.75rem",
        backgroundColor: "#fff",
        borderRadius: "0.5rem",
        border: "1px solid var(--color-ipek-cream-200)",
        overflow: "hidden",
      }}
    >
      <summary
        style={{
          padding: "1rem 1.25rem",
          fontWeight: 600,
          cursor: "pointer",
          fontSize: "0.9375rem",
          color: "var(--color-ipek-green-900)",
        }}
      >
        {q}
      </summary>
      <p style={{ padding: "0 1.25rem 1rem", fontSize: "0.875rem", color: "var(--color-ipek-warm-600)", lineHeight: 1.7, margin: 0 }}>{a}</p>
    </details>
  );
}
