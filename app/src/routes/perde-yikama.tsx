import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/perde-yikama")({
  head: () => ({
    meta: [
      { title: "Isparta Perde Yıkama — İpek Halı Yıkama" },
      { name: "description", content: "Isparta'da profesyonel perde yıkama hizmeti. Tül, stor ve kumaş perde yıkama. Fiyat bilgisi için arayın: 0246 242 99 99" },
    ],
  }),
  component: PerdeYikamaPage,
});

function PerdeYikamaPage() {
  return (
    <>
      <nav style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem 1rem 0", fontSize: "0.8125rem", color: "var(--color-ipek-warm-500)" }}>
        <a href="/" style={{ color: "var(--color-ipek-warm-500)" }}>Ana Sayfa</a> &rsaquo; <span style={{ color: "var(--color-ipek-green-800)" }}>Perde Yıkama</span>
      </nav>

      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem" }}>
        <h1 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", marginBottom: "1rem" }}>Isparta Perde Yıkama Hizmeti</h1>
        <p style={{ fontSize: "1.0625rem", color: "var(--color-ipek-warm-600)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          <strong>İpek Halı Yıkama</strong> olarak Isparta'da tül, stor ve kumaş perde yıkama hizmeti sunuyoruz.
          Perdeleriniz özenle yıkanır, ütülenir ve kullanıma hazır şekilde teslim edilir.
          Perde yıkama fiyatı, perdenin türüne ve boyutuna göre değişiklik gösterir.
          Fiyat bilgisi almak için bizi arayın veya WhatsApp'tan yazın.
        </p>

        <div style={{ padding: "1.5rem", backgroundColor: "var(--color-ipek-green-50)", borderRadius: "0.75rem", border: "1px solid var(--color-ipek-green-100)", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>Perde Yıkama Fiyatı</h2>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-ipek-warm-700)", marginBottom: "1rem" }}>
            Perde yıkama ücreti perdenizin türüne, boyutuna ve özel işlem gerektirip gerektirmediğine göre belirlenir.
            Güncel fiyat bilgisi için lütfen bize ulaşın.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:02462429999" data-event="phone_click" data-event-category="perde_yikama" style={{ padding: "0.75rem 1.5rem", backgroundColor: "var(--color-ipek-green-700)", color: "#fff", borderRadius: "0.5rem", fontWeight: 600 }}>
              Fiyat Sorun: 0246 242 99 99
            </a>
            <a href="https://wa.me/902462429999?text=Merhaba%2C%20perde%20y%C4%B1kama%20fiyat%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" data-event="whatsapp_click" data-event-category="perde_yikama" style={{ padding: "0.75rem 1.5rem", backgroundColor: "#25D366", color: "#fff", borderRadius: "0.5rem", fontWeight: 600 }}>
              WhatsApp ile Sorun
            </a>
          </div>
        </div>

        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Yıkadığımız Perde Türleri</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {["Tül Perde", "Stor Perde", "Zebra Perde", "Kumaş Perde", "Fon Perde", "Branda"].map((t) => (
            <span key={t} style={{ padding: "0.375rem 0.75rem", backgroundColor: "#fff", border: "1px solid var(--color-ipek-cream-200)", borderRadius: "2rem", fontSize: "0.8125rem", fontWeight: 500, color: "var(--color-ipek-green-800)" }}>
              {t}
            </span>
          ))}
        </div>

        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Perde Yıkama Süreci</h2>
        <ol style={{ paddingLeft: "1.25rem", color: "var(--color-ipek-warm-700)", lineHeight: 2, marginBottom: "2rem" }}>
          <li><strong>İletişim:</strong> Bizi arayarak veya WhatsApp'tan yazarak perde türünüzü ve boyutunu belirtin.</li>
          <li><strong>Fiyat Bilgisi:</strong> Perdenizin özelliklerine göre size fiyat bilgisi verilir.</li>
          <li><strong>Yıkama:</strong> Perdeleriniz özenle yıkanır, ütülenir ve katlanarak teslim edilir.</li>
        </ol>

        <p style={{ fontSize: "0.75rem", color: "var(--color-ipek-warm-500)", fontStyle: "italic" }}>
          * Ücretsiz servisin perde yıkama için geçerli olup olmadığı teyit edilmelidir. Detaylı bilgi için bizi arayın.
        </p>
      </section>
    </>
  );
}
