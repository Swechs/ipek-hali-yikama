import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/koltuk-yikama")({
  head: () => ({ meta: [
    { title: "Isparta Koltuk Yıkama | Takım 2.500 TL — İpek Halı Yıkama" },
    { name: "description", content: "Isparta'da profesyonel koltuk yıkama. Koltuk takımı 2.500 TL. Yerinde derinlemesine temizlik. 0246 242 99 99" },
  ] }),
  component: Page,
});

function Page() {
  return (
    <>
      <div className="ipek-page-header">
        <div className="ipek-container" style={{ position: "relative", zIndex: 2 }}>
          <nav className="ipek-breadcrumb"><a href="/">Ana Sayfa</a> &rsaquo; Koltuk Yıkama</nav>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>Isparta Koltuk Yıkama</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "0.5rem" }}>Yerinde profesyonel koltuk temizleme hizmeti.</p>
        </div>
      </div>

      <section style={{ padding: "3rem 1.25rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Price card */}
          <div className="ipek-card" style={{ padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <div>
              <p style={{ fontSize: "0.8125rem", color: "var(--t5)", marginBottom: "0.25rem" }}>Koltuk Takımı Yıkama</p>
              <span className="ipek-price-big">2.500 TL</span>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="tel:02462429999" className="ipek-btn ipek-btn-primary">Randevu Al</a>
              <a href="https://wa.me/902462429999?text=Merhaba%2C%20koltuk%20y%C4%B1kama%20i%C3%A7in%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="ipek-btn ipek-btn-wa">WhatsApp</a>
            </div>
          </div>

          <p style={{ fontSize: "1.0625rem", color: "var(--t6)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            <strong style={{ color: "var(--g9)" }}>İpek Halı Yıkama</strong> olarak Isparta'da profesyonel koltuk yıkama hizmeti sunuyoruz.
            Koltuklarınız yerinde, özel ekipmanlarla derinlemesine temizlenir. Lekeler, kir, toz akarları ve alerjenler giderilir.
          </p>

          <h2 style={{ fontSize: "1.375rem", marginBottom: "1.25rem" }}>Yıkama Süreci</h2>
          <div style={{ display: "grid", gap: "0.75rem", marginBottom: "2.5rem" }}>
            {[
              { n: "1", t: "Randevu", d: "Telefon veya WhatsApp ile randevu alın." },
              { n: "2", t: "Keşif", d: "Ekibimiz koltuğunuzun durumunu değerlendirir." },
              { n: "3", t: "Temizlik", d: "Özel çözücüler ve buhar makinesiyle derinlemesine temizlenir." },
              { n: "4", t: "Kuruma", d: "Birkaç saat içinde koltuğunuz kurur ve kullanıma hazır olur." },
            ].map(s => (
              <div key={s.n} className="ipek-card" style={{ padding: "1rem 1.25rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, var(--g7), var(--g5))", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>{s.n}</div>
                <div><strong>{s.t}</strong> — <span style={{ color: "var(--t5)" }}>{s.d}</span></div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "1.375rem", marginBottom: "1rem" }}>Neden Koltuk Yıkatmalısınız?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
            {[
              { icon: "🦠", t: "Hijyen", d: "Toz akarları ve alerjenler temizlenir." },
              { icon: "✨", t: "Görünüm", d: "Lekeler çıkar, renkler canlanır." },
              { icon: "⏳", t: "Ömür", d: "Koltuğunuzun kullanım ömrü uzar." },
            ].map(c => (
              <div key={c.t} className="ipek-card" style={{ padding: "1.5rem", textAlign: "center" }}>
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem" }}>{c.icon}</span>
                <h3 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>{c.t}</h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--t5)" }}>{c.d}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "0.75rem", color: "var(--t4)", fontStyle: "italic" }}>
            * Ücretsiz servisin koltuk yıkama için geçerli olup olmadığı teyit edilmelidir.
          </p>
        </div>
      </section>

      <section className="ipek-cta-banner" style={{ padding: "3.5rem 1.25rem", textAlign: "center", color: "#fff" }}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ color: "#fff", fontSize: "1.375rem", marginBottom: "1.25rem" }}>Koltuk Yıkama Randevusu Alın</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:02462429999" className="ipek-btn ipek-btn-white">0246 242 99 99</a>
            <a href="https://wa.me/902462429999?text=Merhaba%2C%20koltuk%20y%C4%B1kama%20i%C3%A7in%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="ipek-btn ipek-btn-wa">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
