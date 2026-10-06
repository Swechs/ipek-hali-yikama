import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sss")({
  head: () => ({
    meta: [
      { title: "Sık Sorulan Sorular | İpek Halı Yıkama Isparta" },
      { name: "description", content: "İpek Halı Yıkama sık sorulan sorular: Halı yıkama fiyatı, minimum ücret, teslimat süresi, hizmet bölgeleri, koltuk ve perde yıkama bilgileri." },
    ],
  }),
  component: SSSPage,
});

function SSSPage() {
  const faqs = [
    { q: "Halı yıkama m² fiyatı ne kadar?", a: "Halı yıkama ücretimiz 130 TL/m²'dir. Bu fiyat tüm halı türleri için geçerlidir." },
    { q: "Minimum ücret nedir?", a: "6 m²'den küçük halılarda minimum ücret 780 TL olarak uygulanır. Örneğin 4 m² halı için de 780 TL ödenir." },
    { q: "12 m² halı ne kadar tutar?", a: "12 m² halı yıkama ücreti: 12 × 130 = 1.560 TL'dir." },
    { q: "Halı alım ve teslimat servisi ücretsiz mi?", a: "Evet, Isparta merkez ve belirtilen hizmet bölgelerinde halı alım ve teslimat servisi tamamen ücretsizdir." },
    { q: "Halılar kaç günde teslim edilir?", a: "Normal koşullarda yaklaşık 2 günde, yoğun dönemlerde 2–3 günde teslim edilir." },
    { q: "Atabey ve Eğirdir'e hangi günler servis var?", a: "Atabey ve Eğirdir ilçelerine Salı ve Cuma günleri halı alım-teslimat servisi yapıyoruz." },
    { q: "Hangi bölge ve köylere hizmet veriyorsunuz?", a: "Isparta merkez, Atabey, Eğirdir, Büyük Gökçeli, Küçük Gökçeli, Büyük Hacılar, Küçük Hacılar, Ali Köyü, Harmanören, Kuleönü, İslamköy ve Eğirdir'e yakın köylere hizmet veriyoruz." },
    { q: "Koltuk takımı yıkama fiyatı ne kadar?", a: "Koltuk takımı yıkama ücretimiz 2.500 TL'dir. Koltuk yıkama yerinde yapılır." },
    { q: "Perde yıkama fiyatı ne kadar?", a: "Perde yıkama fiyatı perdenizin türüne ve boyutuna göre değişir. Güncel fiyat bilgisi için bizi 0246 242 99 99 numarasından arayabilir veya WhatsApp'tan yazabilirsiniz." },
    { q: "Randevu nasıl alırım?", a: "0246 242 99 99 numarasını arayarak veya WhatsApp'tan yazarak kolayca randevu alabilirsiniz. Halınızın yaklaşık m² bilgisini ve adresinizi paylaşmanız yeterlidir." },
    { q: "Hangi halı türlerini yıkıyorsunuz?", a: "Makine halısı, el dokuması, yün, viskon, akrilik, polyester, shaggy, naylon dahil tüm halı türlerini yıkıyoruz. Her halı türüne uygun yıkama yöntemi uygulanır." },
    { q: "Fiyat hesaplayıcınız var mı?", a: "Evet, halı yıkama sayfamızda online fiyat hesaplayıcı bulunmaktadır. Halınızın m² bilgisini girerek yaklaşık ücreti öğrenebilirsiniz." },
  ];

  return (
    <>
      <nav style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem 1rem 0", fontSize: "0.8125rem", color: "var(--color-ipek-warm-500)" }}>
        <a href="/" style={{ color: "var(--color-ipek-warm-500)" }}>Ana Sayfa</a> &rsaquo; <span style={{ color: "var(--color-ipek-green-800)" }}>Sık Sorulan Sorular</span>
      </nav>

      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem 3rem" }}>
        <h1 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", marginBottom: "0.5rem" }}>
          Sık Sorulan Sorular
        </h1>
        <p style={{ color: "var(--color-ipek-warm-600)", marginBottom: "2rem" }}>
          Halı, koltuk ve perde yıkama hizmetlerimizle ilgili en çok sorulan sorular ve cevapları.
        </p>

        <div>
          {faqs.map((f, i) => (
            <details
              key={i}
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
                  lineHeight: 1.4,
                }}
              >
                {f.q}
              </summary>
              <p
                style={{
                  padding: "0 1.25rem 1rem",
                  fontSize: "0.875rem",
                  color: "var(--color-ipek-warm-600)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {f.a}
              </p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "2rem 0", marginTop: "1.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Başka Sorunuz mu Var?</h2>
          <p style={{ color: "var(--color-ipek-warm-600)", marginBottom: "1rem" }}>
            Bizi arayın veya WhatsApp'tan yazın, sorularınızı yanıtlayalım.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:02462429999" data-event="phone_click" data-event-category="sss" style={{ padding: "0.75rem 1.5rem", backgroundColor: "var(--color-ipek-green-700)", color: "#fff", borderRadius: "0.5rem", fontWeight: 600 }}>
              0246 242 99 99
            </a>
            <a href="https://wa.me/902462429999?text=Merhaba%2C%20bir%20sorum%20var." target="_blank" rel="noopener noreferrer" data-event="whatsapp_click" data-event-category="sss" style={{ padding: "0.75rem 1.5rem", backgroundColor: "#25D366", color: "#fff", borderRadius: "0.5rem", fontWeight: 600 }}>
              WhatsApp ile Sorun
            </a>
          </div>
        </div>
      </section>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
