import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hali-yikama")({
  head: () => ({
    meta: [
      { title: "Isparta Halı Yıkama Fiyatları 2026 | 130 TL/m² — İpek Halı Yıkama" },
      {
        name: "description",
        content:
          "Isparta halı yıkama fiyatı 130 TL/m². Minimum 780 TL. Ücretsiz halı alım ve teslimat servisi. 2–3 günde teslim. Online fiyat hesaplayıcı. İpek Halı Yıkama 0246 242 99 99",
      },
    ],
  }),
  component: HaliYikamaPage,
});

function HaliYikamaPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem 1rem 0", fontSize: "0.8125rem", color: "var(--color-ipek-warm-500)" }}>
        <a href="/" style={{ color: "var(--color-ipek-warm-500)" }}>Ana Sayfa</a> &rsaquo; <span style={{ color: "var(--color-ipek-green-800)" }}>Halı Yıkama</span>
      </nav>

      {/* GEO Intro */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem 1rem" }}>
        <h1 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", marginBottom: "1rem" }}>
          Isparta Halı Yıkama Hizmeti ve Fiyatları
        </h1>
        <p style={{ fontSize: "1.0625rem", color: "var(--color-ipek-warm-600)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          <strong>İpek Halı Yıkama</strong>, Isparta merkez ve çevresinde profesyonel halı yıkama hizmeti sunar.
          Halı yıkama fiyatımız <strong>130 TL/m²</strong>'dir. 6 m²'den küçük halılarda <strong>minimum 780 TL</strong> ücret uygulanır.
          Halılarınızı kapınızdan <strong>ücretsiz olarak alıyor</strong>, yıkama sonrası <strong>2–3 gün</strong> içinde tertemiz teslim ediyoruz.
          Randevu almak için <strong>0246 242 99 99</strong> numarasını arayabilir veya WhatsApp'tan yazabilirsiniz.
        </p>
      </section>

      {/* Price Info Cards */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
          <InfoCard icon="💰" title="130 TL/m²" desc="Halı yıkama birim fiyatı" />
          <InfoCard icon="📏" title="Minimum 780 TL" desc="6 m²'ye kadar sabit ücret" />
          <InfoCard icon="🚚" title="Ücretsiz Servis" desc="Halı alım ve teslimat" />
          <InfoCard icon="⏱️" title="2–3 Gün" desc="Teslimat süresi" />
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="hesaplayici" style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ backgroundColor: "#fff", borderRadius: "0.75rem", border: "1px solid var(--color-ipek-cream-200)", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h2 style={{ fontSize: "1.375rem", marginBottom: "0.5rem" }}>Halı Yıkama Fiyat Hesaplayıcı</h2>
          <p style={{ fontSize: "0.875rem", color: "var(--color-ipek-warm-600)", marginBottom: "1.5rem" }}>
            Halınızın metrekare bilgisini girin, yaklaşık ücreti hemen öğrenin.
          </p>
          <CarpetCalculator />
          <p style={{ fontSize: "0.75rem", color: "var(--color-ipek-warm-500)", marginTop: "1rem", fontStyle: "italic" }}>
            * Bu hesaplama yaklaşık bilgi amaçlıdır. Kesin fiyat ve randevu bilgisi için lütfen işletmemizle iletişime geçin.
            Hesaplayıcı yalnızca halı yıkama hizmeti için geçerlidir; koltuk ve perde fiyatları ayrıdır.
          </p>
        </div>
      </section>

      {/* PRICE EXAMPLES */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem 2rem" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Örnek Fiyatlar</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
            <thead>
              <tr style={{ backgroundColor: "var(--color-ipek-green-50)" }}>
                <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Halı Boyutu</th>
                <th style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600 }}>Hesaplanan</th>
                <th style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600 }}>Ödeyeceğiniz</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--color-ipek-cream-200)" }}>
                <td style={{ padding: "0.75rem 1rem" }}>3 m² (Küçük halı)</td>
                <td style={{ padding: "0.75rem 1rem", textAlign: "right" }}>390 TL</td>
                <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600, color: "var(--color-ipek-green-700)" }}>780 TL (minimum)</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-ipek-cream-200)" }}>
                <td style={{ padding: "0.75rem 1rem" }}>4 m²</td>
                <td style={{ padding: "0.75rem 1rem", textAlign: "right" }}>520 TL</td>
                <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600, color: "var(--color-ipek-green-700)" }}>780 TL (minimum)</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-ipek-cream-200)" }}>
                <td style={{ padding: "0.75rem 1rem" }}>6 m² (Minimum eşik)</td>
                <td style={{ padding: "0.75rem 1rem", textAlign: "right" }}>780 TL</td>
                <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600, color: "var(--color-ipek-green-700)" }}>780 TL</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-ipek-cream-200)" }}>
                <td style={{ padding: "0.75rem 1rem" }}>8 m²</td>
                <td style={{ padding: "0.75rem 1rem", textAlign: "right" }}>1.040 TL</td>
                <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600, color: "var(--color-ipek-green-700)" }}>1.040 TL</td>
              </tr>
              <tr>
                <td style={{ padding: "0.75rem 1rem" }}>12 m² (Salon halısı)</td>
                <td style={{ padding: "0.75rem 1rem", textAlign: "right" }}>1.560 TL</td>
                <td style={{ padding: "0.75rem 1rem", textAlign: "right", fontWeight: 600, color: "var(--color-ipek-green-700)" }}>1.560 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Halı Yıkama Sürecimiz</h2>
        <ol style={{ paddingLeft: "1.25rem", color: "var(--color-ipek-warm-700)", lineHeight: 2 }}>
          <li><strong>Randevu:</strong> Telefon veya WhatsApp ile randevu alın, halınızın m² bilgisini ve adresinizi paylaşın.</li>
          <li><strong>Ücretsiz Alım:</strong> Ekibimiz belirlenen gün ve saatte halınızı kapınızdan alır.</li>
          <li><strong>Yıkama:</strong> Halınız profesyonel makinelerle derinlemesine yıkanır, durulanır ve hijyenik ortamda kurutulur.</li>
          <li><strong>Teslimat:</strong> 2–3 gün içinde halınız rulo hâlinde, tertemiz ve kokusu hoş bir şekilde kapınıza teslim edilir.</li>
        </ol>
      </section>

      {/* CARPET TYPES */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Yıkadığımız Halı Türleri</h2>
        <p style={{ fontSize: "0.875rem", color: "var(--color-ipek-warm-600)", marginBottom: "1rem" }}>
          Makine halısı, el dokuması halı, yün, viskon, akrilik, polyester, shaggy ve daha fazlası. Her halı türüne uygun yıkama yöntemi uygulanır.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {["Yün Halı", "Makine Halısı", "El Dokuması", "Viskon Halı", "Shaggy Halı", "Polyester Halı", "Akrilik Halı", "Naylon Halı"].map((t) => (
            <span key={t} style={{ padding: "0.375rem 0.75rem", backgroundColor: "var(--color-ipek-green-50)", color: "var(--color-ipek-green-800)", borderRadius: "2rem", fontSize: "0.8125rem", fontWeight: 500 }}>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem 3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.375rem", marginBottom: "0.75rem" }}>Halınızı Yıkatmak İçin Hemen Arayın</h2>
        <p style={{ color: "var(--color-ipek-warm-600)", marginBottom: "1.5rem" }}>
          Fiyat bilgisi ve randevu için telefonla veya WhatsApp ile bize ulaşın.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          <a href="tel:02462429999" data-event="phone_click" data-event-category="hali_yikama" style={{ padding: "0.875rem 2rem", backgroundColor: "var(--color-ipek-green-700)", color: "#fff", borderRadius: "0.5rem", fontWeight: 600 }}>
            0246 242 99 99
          </a>
          <a href="https://wa.me/902462429999?text=Merhaba%2C%20hal%C4%B1%20y%C4%B1kama%20fiyat%C4%B1%20%C3%B6%C4%9Frenmek%20istiyorum." target="_blank" rel="noopener noreferrer" data-event="whatsapp_click" data-event-category="hali_yikama" style={{ padding: "0.875rem 2rem", backgroundColor: "#25D366", color: "#fff", borderRadius: "0.5rem", fontWeight: 600 }}>
            WhatsApp ile Yazın
          </a>
        </div>
      </section>

      {/* Service Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Isparta Halı Yıkama",
        provider: { "@type": "LocalBusiness", name: "İpek Halı Yıkama", telephone: "+90-246-242-99-99" },
        areaServed: { "@type": "City", name: "Isparta" },
        description: "Isparta'da profesyonel halı yıkama hizmeti. 130 TL/m², minimum 780 TL, ücretsiz alım-teslimat, 2–3 günde teslim.",
        offers: { "@type": "Offer", priceSpecification: { "@type": "UnitPriceSpecification", price: "130", priceCurrency: "TRY", unitText: "m²" } },
      }) }} />
    </>
  );
}

/* ─── Calculator Component ─── */
function CarpetCalculator() {
  return (
    <div>
      <label htmlFor="carpet-area" style={{ display: "block", fontWeight: 600, marginBottom: "0.5rem", fontSize: "0.9375rem" }}>
        Halı Alanı (m²)
      </label>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", flexWrap: "wrap" }}>
        <input
          id="carpet-area"
          type="number"
          min="1"
          max="200"
          step="0.5"
          placeholder="Örn: 12"
          style={{
            flex: "1 1 160px",
            padding: "0.75rem 1rem",
            border: "1px solid var(--color-ipek-cream-200)",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            outline: "none",
          }}
          onInput={(e) => {
            const input = e.currentTarget;
            const resultEl = document.getElementById("calc-result");
            if (!resultEl) return;
            const val = parseFloat(input.value);
            if (isNaN(val) || val <= 0) {
              resultEl.textContent = "";
              return;
            }
            const raw = val * 130;
            const total = Math.max(raw, 780);
            const formatted = total.toLocaleString("tr-TR");
            if (raw < 780) {
              resultEl.innerHTML = `<span style="font-size:1.5rem;font-weight:700;color:var(--color-ipek-green-700)">${formatted} TL</span><br/><span style="font-size:0.8125rem;color:var(--color-ipek-warm-600)">Hesaplanan: ${raw.toLocaleString("tr-TR")} TL — Minimum ücret uygulandı (780 TL)</span>`;
            } else {
              resultEl.innerHTML = `<span style="font-size:1.5rem;font-weight:700;color:var(--color-ipek-green-700)">${formatted} TL</span><br/><span style="font-size:0.8125rem;color:var(--color-ipek-warm-600)">${val} m² × 130 TL = ${formatted} TL</span>`;
            }
          }}
        />
        <div id="calc-result" style={{ flex: "1 1 200px", minHeight: "3rem", display: "flex", flexDirection: "column", justifyContent: "center" }} />
      </div>
    </div>
  );
}

function InfoCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div style={{ padding: "1.25rem", backgroundColor: "#fff", borderRadius: "0.75rem", border: "1px solid var(--color-ipek-cream-200)", textAlign: "center" }}>
      <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.5rem" }}>{icon}</span>
      <p style={{ fontWeight: 700, fontSize: "1.0625rem", color: "var(--color-ipek-green-800)", marginBottom: "0.25rem" }}>{title}</p>
      <p style={{ fontSize: "0.8125rem", color: "var(--color-ipek-warm-600)" }}>{desc}</p>
    </div>
  );
}
