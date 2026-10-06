import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "İpek Halı Yıkama — Isparta | Halı Yıkama 130 TL/m²" },
      { name: "description", content: "Isparta İpek Halı Yıkama: Halı yıkama 130 TL/m², minimum 780 TL, ücretsiz alım-teslimat, 2–3 günde teslim. Koltuk yıkama 2.500 TL. 0246 242 99 99" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://ispartaipekhaliyikama.com/#business",
        name: "İpek Halı Yıkama", description: "Isparta'da profesyonel halı, koltuk ve perde yıkama. Ücretsiz alım-teslimat.",
        url: "https://ispartaipekhaliyikama.com", telephone: "+90-246-242-99-99",
        areaServed: [{ "@type": "City", name: "Isparta" }, { "@type": "AdministrativeArea", name: "Atabey" }, { "@type": "AdministrativeArea", name: "Eğirdir" }],
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Yıkama Hizmetleri", itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Halı Yıkama" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "130", priceCurrency: "TRY", unitText: "m²" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Koltuk Takımı Yıkama" }, price: "2500", priceCurrency: "TRY" },
        ]},
      }) }} />

      {/* ═══ HERO ═══ */}
      <section className="ipek-hero">
        <div className="ipek-hero-content">
          <div className="ipek-badge" style={{ background: "rgba(93,212,168,0.15)", color: "var(--g3)", marginBottom: "1.25rem", border: "1px solid rgba(93,212,168,0.2)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            Isparta ve Çevresinde Hizmet
          </div>

          <h1>
            Halılarınız Bizimle<br />
            <span>Tertemiz Olsun</span>
          </h1>

          <p className="ipek-hero-sub">
            Profesyonel halı yıkama hizmeti. Halınızı kapınızdan alıyor, tertemiz ve hijyenik şekilde teslim ediyoruz. <strong style={{ color: "#fff" }}>Ücretsiz alım ve teslimat.</strong>
          </p>

          <div className="ipek-hero-prices">
            <div className="ipek-hero-price-card">
              <div className="label">Halı Yıkama</div>
              <div className="value">130 TL<span style={{ fontSize: "0.75rem", fontWeight: 400, opacity: 0.7 }}>/m²</span></div>
              <div className="sub">Minimum 780 TL</div>
            </div>
            <div className="ipek-hero-price-card">
              <div className="label">Koltuk Takımı</div>
              <div className="value">2.500 TL</div>
              <div className="sub">Takım fiyatı</div>
            </div>
            <div className="ipek-hero-price-card">
              <div className="label">Teslimat</div>
              <div className="value">2–3 Gün</div>
              <div className="sub">Ücretsiz servis</div>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a href="tel:02462429999" className="ipek-btn ipek-btn-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Hemen Ara
            </a>
            <a href="https://wa.me/902462429999?text=Merhaba%2C%20hal%C4%B1%20y%C4%B1kama%20i%C3%A7in%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="ipek-btn ipek-btn-wa">
              WhatsApp ile Yazın
            </a>
            <a href="/hali-yikama#hesaplayici" className="ipek-btn" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
              Fiyat Hesapla
            </a>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="ipek-section" style={{ background: "#fff" }}>
        <div className="ipek-container">
          <h2 className="ipek-section-title">Hizmetlerimiz</h2>
          <p className="ipek-section-desc">Isparta ve çevresinde halı, koltuk ve perde yıkama hizmeti veriyoruz.</p>
          <div className="ipek-services-grid">
            <ServiceCard icon={<CarpetIcon />} title="Halı Yıkama" desc="Tüm halı türlerinde profesyonel yıkama. 130 TL/m², minimum 780 TL. Ücretsiz alım-teslimat. 2–3 günde tertemiz kapınızda." price="130 TL/m²" href="/hali-yikama" />
            <ServiceCard icon={<CouchIcon />} title="Koltuk Yıkama" desc="Koltuk takımınızı derinlemesine temizliyoruz. Lekeler, kir ve alerjenlerden arındırılmış konforlu bir yaşam alanı." price="2.500 TL" href="/koltuk-yikama" />
            <ServiceCard icon={<CurtainIcon />} title="Perde Yıkama" desc="Tül, stor ve kumaş perdelerinizi özenle yıkıyoruz. Fiyat bilgisi için bize ulaşın, size özel teklif verelim." price="Teklif Alın" href="/perde-yikama" />
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="ipek-section" style={{ background: "var(--c0)" }}>
        <div className="ipek-container">
          <h2 className="ipek-section-title">Nasıl Çalışır?</h2>
          <p className="ipek-section-desc">4 kolay adımda halılarınız tertemiz.</p>
          <div className="ipek-steps">
            <Step n="1" title="Arayın veya Yazın" desc="Bizi arayın veya WhatsApp'tan yazın. Halınızın m² bilgisini ve adresinizi iletin." />
            <Step n="2" title="Halınızı Alalım" desc="Belirlenen gün ve saatte halınızı kapınızdan ücretsiz olarak alıyoruz." />
            <Step n="3" title="Profesyonel Yıkama" desc="Halınız özel makinelerle derinlemesine yıkanır, hijyenik ortamda kurutulur." />
            <Step n="4" title="Teslim Edelim" desc="2–3 gün içinde tertemiz olarak kapınıza ücretsiz teslim edilir." />
          </div>
        </div>
      </section>

      {/* ═══ SERVICE AREAS ═══ */}
      <section className="ipek-section" style={{ background: "#fff" }}>
        <div className="ipek-container" style={{ textAlign: "center" }}>
          <h2 className="ipek-section-title">Hizmet Bölgelerimiz</h2>
          <p className="ipek-section-desc">Isparta merkez ve çevre yerleşimlere halı alım-teslimat servisi sunuyoruz.</p>
          <div className="ipek-area-tags" style={{ marginBottom: "1.5rem" }}>
            <span className="ipek-area-tag ipek-area-tag-accent">Isparta Merkez</span>
            <span className="ipek-area-tag ipek-area-tag-accent">Atabey — Salı / Cuma</span>
            <span className="ipek-area-tag ipek-area-tag-accent">Eğirdir — Salı / Cuma</span>
            {["Büyük Gökçeli", "Küçük Gökçeli", "Büyük Hacılar", "Küçük Hacılar", "Ali Köyü", "Harmanören", "Kuleönü", "İslamköy"].map(a => <span key={a} className="ipek-area-tag">{a}</span>)}
          </div>
          <a href="/hizmet-bolgeleri" style={{ color: "var(--g7)", fontWeight: 600, fontSize: "0.9375rem" }}>Tüm bölgeleri gör &rarr;</a>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="ipek-section" style={{ background: "var(--c0)" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 1.25rem" }}>
          <h2 className="ipek-section-title">Sık Sorulan Sorular</h2>
          <p className="ipek-section-desc">En çok merak edilen sorular ve yanıtları.</p>
          <Faq q="Halı yıkama m² fiyatı ne kadar?" a="Halı yıkama ücretimiz 130 TL/m²'dir. 6 m²'den küçük halılarda minimum ücret 780 TL'dir." />
          <Faq q="Halı alım ve teslimat ücretsiz mi?" a="Evet, Isparta merkez ve belirtilen hizmet bölgelerinde halı alım ve teslimat servisi tamamen ücretsizdir." />
          <Faq q="Halım kaç günde teslim edilir?" a="Normal koşullarda yaklaşık 2 günde, yoğun dönemlerde 2–3 günde teslim edilir." />
          <Faq q="Koltuk yıkama fiyatı ne kadar?" a="Koltuk takımı yıkama ücretimiz 2.500 TL'dir." />
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <a href="/sss" style={{ color: "var(--g7)", fontWeight: 600 }}>Tüm soruları gör &rarr;</a>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="ipek-cta-banner ipek-section" style={{ textAlign: "center", color: "#fff", padding: "4rem 1.25rem" }}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "0.75rem" }}>Halılarınız İçin Hemen Randevu Alın</h2>
          <p style={{ opacity: 0.8, marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>Bizi arayın veya WhatsApp'tan yazın, halınızı kapınızdan alalım.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:02462429999" className="ipek-btn ipek-btn-white">0246 242 99 99</a>
            <a href="https://wa.me/902462429999?text=Merhaba%2C%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="ipek-btn ipek-btn-wa">WhatsApp ile Yazın</a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Halı yıkama m² fiyatı ne kadar?", acceptedAnswer: { "@type": "Answer", text: "130 TL/m². Minimum 780 TL." } },
          { "@type": "Question", name: "Halı alım ve teslimat ücretsiz mi?", acceptedAnswer: { "@type": "Answer", text: "Evet, ücretsizdir." } },
          { "@type": "Question", name: "Halım kaç günde teslim edilir?", acceptedAnswer: { "@type": "Answer", text: "2–3 günde teslim edilir." } },
          { "@type": "Question", name: "Koltuk yıkama fiyatı ne kadar?", acceptedAnswer: { "@type": "Answer", text: "Koltuk takımı 2.500 TL." } },
        ],
      }) }} />
    </>
  );
}

/* ─── Components ─── */
function ServiceCard({ icon, title, desc, price, href }: { icon: React.ReactNode; title: string; desc: string; price: string; href: string }) {
  return (
    <a href={href} className="ipek-card ipek-service-card" style={{ textDecoration: "none" }}>
      <div className="ipek-service-icon">{icon}</div>
      <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ fontSize: "0.9375rem", color: "var(--t5)", lineHeight: 1.7, marginBottom: "1rem" }}>{desc}</p>
      <span className="ipek-badge" style={{ background: "var(--g1)", color: "var(--g7)" }}>{price}</span>
    </a>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="ipek-step">
      <div className="ipek-step-num">{n}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="ipek-card ipek-faq">
      <summary>{q}</summary>
      <p className="ipek-faq-answer">{a}</p>
    </details>
  );
}

/* ─── Icons ─── */
function CarpetIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--g7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="4" x2="6" y2="20"/><line x1="18" y1="4" x2="18" y2="20"/><line x1="2" y1="12" x2="22" y2="12"/></svg>;
}
function CouchIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--g7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"/><path d="M4 18v2"/><path d="M20 18v2"/></svg>;
}
function CurtainIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--g7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 2h20v4H2z"/><path d="M4 6c0 4 2 8 8 12"/><path d="M20 6c0 4-2 8-8 12"/><line x1="12" y1="18" x2="12" y2="22"/></svg>;
}
