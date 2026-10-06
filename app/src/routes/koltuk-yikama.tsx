import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/koltuk-yikama")({
  head: () => ({
    meta: [
      { title: "Isparta Koltuk Yıkama | Takım 2.500 TL — İpek Halı Yıkama" },
      { name: "description", content: "Isparta'da profesyonel koltuk yıkama hizmeti. Koltuk takımı yıkama 2.500 TL. Yerinde derinlemesine temizlik. Randevu: 0246 242 99 99" },
    ],
  }),
  component: KoltukYikamaPage,
});

function KoltukYikamaPage() {
  return (
    <>
      <nav style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem 1rem 0", fontSize: "0.8125rem", color: "var(--color-ipek-warm-500)" }}>
        <a href="/" style={{ color: "var(--color-ipek-warm-500)" }}>Ana Sayfa</a> &rsaquo; <span style={{ color: "var(--color-ipek-green-800)" }}>Koltuk Yıkama</span>
      </nav>

      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem" }}>
        <h1 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", marginBottom: "1rem" }}>Isparta Koltuk Yıkama Hizmeti</h1>
        <p style={{ fontSize: "1.0625rem", color: "var(--color-ipek-warm-600)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          <strong>İpek Halı Yıkama</strong> olarak Isparta'da profesyonel koltuk yıkama hizmeti sunuyoruz.
          Koltuk takımı yıkama ücretimiz <strong>2.500 TL</strong>'dir.
          Koltuklarınız yerinde, özel ekipmanlarla derinlemesine temizlenir.
          Randevu almak için <strong>0246 242 99 99</strong> numarasını arayabilir veya WhatsApp'tan yazabilirsiniz.
        </p>

        <div style={{ padding: "1.5rem", backgroundColor: "#fff", borderRadius: "0.75rem", border: "1px solid var(--color-ipek-cream-200)", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: "0.8125rem", color: "var(--color-ipek-warm-600)" }}>Koltuk Takımı Yıkama</p>
              <p style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--color-ipek-green-700)" }}>2.500 TL</p>
            </div>
            <a href="tel:02462429999" data-event="phone_click" data-event-category="koltuk_yikama" style={{ padding: "0.75rem 1.5rem", backgroundColor: "var(--color-ipek-green-700)", color: "#fff", borderRadius: "0.5rem", fontWeight: 600, marginLeft: "auto" }}>
              Randevu Al
            </a>
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--color-ipek-warm-500)", marginTop: "0.75rem", fontStyle: "italic" }}>
            * Ücretsiz servisin koltuk yıkama için geçerli olup olmadığı teyit edilmelidir. Detaylı bilgi için bizi arayın.
          </p>
        </div>

        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Koltuk Yıkama Süreci</h2>
        <ol style={{ paddingLeft: "1.25rem", color: "var(--color-ipek-warm-700)", lineHeight: 2, marginBottom: "2rem" }}>
          <li><strong>Randevu:</strong> Telefon veya WhatsApp ile randevu alın.</li>
          <li><strong>Keşif:</strong> Ekibimiz koltuğunuzun durumunu değerlendirir.</li>
          <li><strong>Temizlik:</strong> Özel çözücüler ve buhar makinesiyle koltuk yerinde derinlemesine temizlenir.</li>
          <li><strong>Kuruma:</strong> Temizlik sonrası koltuğunuz birkaç saat içinde kurur ve kullanıma hazır olur.</li>
        </ol>

        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Neden Koltuk Yıkatmalısınız?</h2>
        <ul style={{ paddingLeft: "1.25rem", color: "var(--color-ipek-warm-600)", lineHeight: 2, marginBottom: "2rem" }}>
          <li>Koltuklarda biriken toz, akar ve alerjenler sağlığınızı olumsuz etkileyebilir.</li>
          <li>Düzenli temizlik koltuğunuzun ömrünü uzatır ve rengini korur.</li>
          <li>Leke, koku ve günlük kirin profesyonel yöntemlerle temizlenmesi ev temizliğinden çok daha etkilidir.</li>
        </ul>

        <div style={{ textAlign: "center", padding: "2rem 0" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Koltuk Yıkama İçin Randevu Alın</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:02462429999" data-event="phone_click" data-event-category="koltuk_yikama_cta" style={{ padding: "0.875rem 2rem", backgroundColor: "var(--color-ipek-green-700)", color: "#fff", borderRadius: "0.5rem", fontWeight: 600 }}>
              0246 242 99 99
            </a>
            <a href="https://wa.me/902462429999?text=Merhaba%2C%20koltuk%20y%C4%B1kama%20i%C3%A7in%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" data-event="whatsapp_click" data-event-category="koltuk_yikama_cta" style={{ padding: "0.875rem 2rem", backgroundColor: "#25D366", color: "#fff", borderRadius: "0.5rem", fontWeight: 600 }}>
              WhatsApp ile Yazın
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Isparta Koltuk Yıkama", provider: { "@type": "LocalBusiness", name: "İpek Halı Yıkama", telephone: "+90-246-242-99-99" },
        areaServed: { "@type": "City", name: "Isparta" },
        description: "Isparta'da profesyonel koltuk yıkama hizmeti. Koltuk takımı 2.500 TL.",
        offers: { "@type": "Offer", price: "2500", priceCurrency: "TRY" },
      }) }} />
    </>
  );
}
