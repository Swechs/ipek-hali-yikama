import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/perde-yikama")({
  head: () => ({ meta: [
    { title: "Isparta Perde Yıkama — İpek Halı Yıkama" },
    { name: "description", content: "Isparta perde yıkama. Tül, stor, kumaş perde yıkama. Fiyat bilgisi için arayın: 0246 242 99 99" },
  ] }),
  component: Page,
});

function Page() {
  return (
    <>
      <div className="ipek-page-header">
        <div className="ipek-container" style={{ position: "relative", zIndex: 2 }}>
          <nav className="ipek-breadcrumb"><a href="/">Ana Sayfa</a> &rsaquo; Perde Yıkama</nav>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>Isparta Perde Yıkama</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "0.5rem" }}>Tül, stor ve kumaş perdelerinizi özenle yıkıyoruz.</p>
        </div>
      </div>

      <section style={{ padding: "3rem 1.25rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.0625rem", color: "var(--t6)", lineHeight: 1.8, marginBottom: "2rem" }}>
            <strong style={{ color: "var(--g9)" }}>İpek Halı Yıkama</strong> olarak Isparta'da tül, stor ve kumaş perde yıkama hizmeti sunuyoruz.
            Perdeleriniz özenle yıkanır, ütülenir ve kullanıma hazır şekilde teslim edilir.
          </p>

          {/* Price CTA */}
          <div className="ipek-card" style={{ padding: "2rem", background: "linear-gradient(135deg, var(--g0), var(--g1))", border: "1px solid var(--g2)", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Perde Yıkama Fiyatı</h2>
            <p style={{ color: "var(--t6)", marginBottom: "1.25rem" }}>Fiyat, perdenizin türüne ve boyutuna göre belirlenir. Güncel fiyat için bize ulaşın.</p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="tel:02462429999" className="ipek-btn ipek-btn-primary">Fiyat Sorun: 0246 242 99 99</a>
              <a href="https://wa.me/902462429999?text=Merhaba%2C%20perde%20y%C4%B1kama%20fiyat%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="ipek-btn ipek-btn-wa">WhatsApp ile Sorun</a>
            </div>
          </div>

          <h2 style={{ fontSize: "1.375rem", marginBottom: "1rem" }}>Perde Türleri</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
            {["Tül Perde", "Stor Perde", "Zebra Perde", "Kumaş Perde", "Fon Perde", "Branda"].map(t => (
              <span key={t} className="ipek-area-tag">{t}</span>
            ))}
          </div>

          <h2 style={{ fontSize: "1.375rem", marginBottom: "1.25rem" }}>Yıkama Süreci</h2>
          <div style={{ display: "grid", gap: "0.75rem", marginBottom: "2rem" }}>
            {[
              { n: "1", t: "İletişim", d: "Perde türünüzü ve boyutunu belirtin." },
              { n: "2", t: "Fiyat", d: "Size özel fiyat bilgisi verilir." },
              { n: "3", t: "Yıkama", d: "Perdeleriniz özenle yıkanır, ütülenir ve katlanır." },
            ].map(s => (
              <div key={s.n} className="ipek-card" style={{ padding: "1rem 1.25rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, var(--g7), var(--g5))", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>{s.n}</div>
                <div><strong>{s.t}</strong> — <span style={{ color: "var(--t5)" }}>{s.d}</span></div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "0.75rem", color: "var(--t4)", fontStyle: "italic" }}>
            * Ücretsiz servisin perde yıkama için geçerli olup olmadığı teyit edilmelidir.
          </p>
        </div>
      </section>
    </>
  );
}
