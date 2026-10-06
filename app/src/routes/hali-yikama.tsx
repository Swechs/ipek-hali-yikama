import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hali-yikama")({
  head: () => ({
    meta: [
      { title: "Isparta Halı Yıkama Fiyatları 2026 | 130 TL/m² — İpek Halı Yıkama" },
      { name: "description", content: "Isparta halı yıkama 130 TL/m², minimum 780 TL. Ücretsiz alım-teslimat, 2–3 günde teslim. Online fiyat hesaplayıcı. 0246 242 99 99" },
    ],
  }),
  component: HaliYikamaPage,
});

function HaliYikamaPage() {
  return (
    <>
      {/* Page Header */}
      <div className="ipek-page-header">
        <div className="ipek-container" style={{ position: "relative", zIndex: 2 }}>
          <nav className="ipek-breadcrumb"><a href="/">Ana Sayfa</a> &rsaquo; Halı Yıkama</nav>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", maxWidth: "600px" }}>Isparta Halı Yıkama<br />Hizmeti ve Fiyatları</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", maxWidth: "520px", marginTop: "0.75rem" }}>
            Profesyonel halı yıkama, ücretsiz alım-teslimat ve online fiyat hesaplayıcı.
          </p>
        </div>
      </div>

      {/* Key info strip */}
      <section style={{ background: "#fff", padding: "3rem 1.25rem" }}>
        <div className="ipek-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { icon: "💰", t: "130 TL/m²", d: "Halı yıkama birim fiyatı" },
              { icon: "📏", t: "Minimum 780 TL", d: "6 m²'ye kadar sabit ücret" },
              { icon: "🚚", t: "Ücretsiz Servis", d: "Halı alım ve teslimat" },
              { icon: "⏱", t: "2–3 Gün", d: "Teslimat süresi" },
            ].map((c) => (
              <div key={c.t} className="ipek-card" style={{ padding: "1.5rem", textAlign: "center" }}>
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem" }}>{c.icon}</span>
                <p style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--g7)", marginBottom: "0.25rem" }}>{c.t}</p>
                <p style={{ fontSize: "0.8125rem", color: "var(--t5)" }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "0 1.25rem 3rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.0625rem", color: "var(--t6)", lineHeight: 1.8 }}>
            <strong style={{ color: "var(--g9)" }}>İpek Halı Yıkama</strong>, Isparta merkez ve çevresinde profesyonel halı yıkama hizmeti sunar.
            Halı yıkama fiyatımız <strong style={{ color: "var(--g7)" }}>130 TL/m²</strong>'dir. 6 m²'den küçük halılarda <strong style={{ color: "var(--g7)" }}>minimum 780 TL</strong> ücret uygulanır.
            Halılarınızı kapınızdan <strong>ücretsiz olarak alıyor</strong>, yıkama sonrası <strong>2–3 gün</strong> içinde tertemiz teslim ediyoruz.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="hesaplayici" style={{ padding: "0 1.25rem 3rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="ipek-card" style={{ padding: "2.5rem", background: "linear-gradient(135deg, #fff 60%, var(--g0))" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.375rem" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--g5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", verticalAlign: "middle", marginRight: "0.5rem" }}><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="16" y2="18"/></svg>
              Fiyat Hesaplayıcı
            </h2>
            <p style={{ color: "var(--t5)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>Halınızın m² bilgisini girin, yaklaşık ücreti anında görün.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", alignItems: "start" }}>
              <div>
                <label htmlFor="ca" style={{ display: "block", fontWeight: 600, marginBottom: "0.5rem", fontSize: "0.875rem", color: "var(--t7)" }}>Halı Alanı (m²)</label>
                <input
                  id="ca" type="number" min="1" max="200" step="0.5" placeholder="Örn: 12"
                  className="ipek-calc-input"
                  onInput={(e) => {
                    const el = document.getElementById("cr");
                    if (!el) return;
                    const v = parseFloat(e.currentTarget.value);
                    if (isNaN(v) || v <= 0) { el.innerHTML = '<span style="color:var(--t5);font-size:0.9375rem">Sonuç burada görünecek</span>'; return; }
                    const raw = v * 130, total = Math.max(raw, 780), f = total.toLocaleString("tr-TR");
                    el.innerHTML = raw < 780
                      ? `<span class="ipek-price-big">${f} TL</span><br/><span style="font-size:0.8125rem;color:var(--t5);margin-top:0.25rem;display:inline-block">Hesaplanan: ${raw.toLocaleString("tr-TR")} TL — Minimum ücret uygulandı</span>`
                      : `<span class="ipek-price-big">${f} TL</span><br/><span style="font-size:0.8125rem;color:var(--t5);margin-top:0.25rem;display:inline-block">${v} m² &times; 130 TL</span>`;
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 600, marginBottom: "0.5rem", fontSize: "0.875rem", color: "var(--t7)" }}>Tahmini Ücret</label>
                <div id="cr" className="ipek-calc-result">
                  <span style={{ color: "var(--t5)", fontSize: "0.9375rem" }}>Sonuç burada görünecek</span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.75rem", color: "var(--t4)", marginTop: "1rem", fontStyle: "italic" }}>
              * Yaklaşık bilgidir. Kesin fiyat ve randevu için işletmemizi arayın. Yalnızca halı yıkama için geçerlidir.
            </p>
          </div>
        </div>
      </section>

      {/* PRICE TABLE */}
      <section style={{ padding: "0 1.25rem 3rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.375rem", marginBottom: "1rem" }}>Örnek Fiyatlar</h2>
          <div style={{ borderRadius: "0.75rem", overflow: "hidden" }}>
            <table className="ipek-table">
              <thead>
                <tr><th style={{ textAlign: "left" }}>Halı Boyutu</th><th style={{ textAlign: "right" }}>Hesaplanan</th><th style={{ textAlign: "right" }}>Ödeyeceğiniz</th></tr>
              </thead>
              <tbody>
                <tr><td>3 m²</td><td style={{ textAlign: "right" }}>390 TL</td><td className="price-cell" style={{ textAlign: "right" }}>780 TL <small>(min)</small></td></tr>
                <tr><td>4 m²</td><td style={{ textAlign: "right" }}>520 TL</td><td className="price-cell" style={{ textAlign: "right" }}>780 TL <small>(min)</small></td></tr>
                <tr><td>6 m²</td><td style={{ textAlign: "right" }}>780 TL</td><td className="price-cell" style={{ textAlign: "right" }}>780 TL</td></tr>
                <tr><td>8 m²</td><td style={{ textAlign: "right" }}>1.040 TL</td><td className="price-cell" style={{ textAlign: "right" }}>1.040 TL</td></tr>
                <tr><td>12 m²</td><td style={{ textAlign: "right" }}>1.560 TL</td><td className="price-cell" style={{ textAlign: "right" }}>1.560 TL</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ipek-section" style={{ background: "var(--c1)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1.25rem" }}>
          <h2 style={{ fontSize: "1.375rem", marginBottom: "1.5rem" }}>Halı Yıkama Sürecimiz</h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              { n: "1", t: "Randevu", d: "Telefon veya WhatsApp ile randevu alın, halınızın m² bilgisini ve adresinizi paylaşın." },
              { n: "2", t: "Ücretsiz Alım", d: "Ekibimiz belirlenen gün ve saatte halınızı kapınızdan alır." },
              { n: "3", t: "Yıkama", d: "Halınız profesyonel makinelerle derinlemesine yıkanır ve hijyenik ortamda kurutulur." },
              { n: "4", t: "Teslimat", d: "2–3 gün içinde halınız tertemiz olarak kapınıza ücretsiz teslim edilir." },
            ].map(s => (
              <div key={s.n} className="ipek-card" style={{ padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, var(--g7), var(--g5))", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>{s.n}</div>
                <div><h3 style={{ fontSize: "1rem", marginBottom: "0.125rem" }}>{s.t}</h3><p style={{ fontSize: "0.875rem", color: "var(--t5)" }}>{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARPET TYPES */}
      <section style={{ padding: "3rem 1.25rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.375rem", marginBottom: "1rem" }}>Yıkadığımız Halı Türleri</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {["Yün Halı", "Makine Halısı", "El Dokuması", "Viskon", "Shaggy", "Polyester", "Akrilik", "Naylon"].map(t => (
              <span key={t} className="ipek-area-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ipek-cta-banner" style={{ padding: "4rem 1.25rem", textAlign: "center", color: "#fff" }}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Halınızı Yıkatmak İçin Hemen Arayın</h2>
          <p style={{ opacity: 0.8, marginBottom: "1.5rem" }}>Fiyat bilgisi ve randevu için bize ulaşın.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:02462429999" className="ipek-btn ipek-btn-white">0246 242 99 99</a>
            <a href="https://wa.me/902462429999?text=Merhaba%2C%20hal%C4%B1%20y%C4%B1kama%20fiyat%C4%B1%20%C3%B6%C4%9Frenmek%20istiyorum." target="_blank" rel="noopener noreferrer" className="ipek-btn ipek-btn-wa">WhatsApp</a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Isparta Halı Yıkama", provider: { "@type": "LocalBusiness", name: "İpek Halı Yıkama", telephone: "+90-246-242-99-99" }, areaServed: { "@type": "City", name: "Isparta" }, offers: { "@type": "Offer", priceSpecification: { "@type": "UnitPriceSpecification", price: "130", priceCurrency: "TRY", unitText: "m²" } } }) }} />
    </>
  );
}
