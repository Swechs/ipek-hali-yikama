import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim | İpek Halı Yıkama Isparta — 0246 242 99 99" },
      { name: "description", content: "İpek Halı Yıkama iletişim bilgileri. Telefon: 0246 242 99 99. WhatsApp ile yazın. Isparta merkez halı yıkama randevu." },
    ],
  }),
  component: IletisimPage,
});

function IletisimPage() {
  return (
    <>
      <nav style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem 1rem 0", fontSize: "0.8125rem", color: "var(--color-ipek-warm-500)" }}>
        <a href="/" style={{ color: "var(--color-ipek-warm-500)" }}>Ana Sayfa</a> &rsaquo; <span style={{ color: "var(--color-ipek-green-800)" }}>İletişim</span>
      </nav>

      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem 3rem" }}>
        <h1 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", marginBottom: "1rem" }}>İletişim</h1>
        <p style={{ fontSize: "1.0625rem", color: "var(--color-ipek-warm-600)", lineHeight: 1.7, marginBottom: "2rem" }}>
          Halı yıkama randevusu, fiyat bilgisi veya sorularınız için bize telefon ya da WhatsApp ile ulaşabilirsiniz.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {/* Telefon */}
          <a
            href="tel:02462429999"
            data-event="phone_click"
            data-event-category="iletisim_page"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1.25rem",
              backgroundColor: "#fff",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-ipek-cream-200)",
              textDecoration: "none",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", backgroundColor: "var(--color-ipek-green-100)", borderRadius: "0.75rem", fontSize: "1.25rem" }}>
              📞
            </span>
            <div>
              <p style={{ fontWeight: 600, color: "var(--color-ipek-green-900)", marginBottom: "0.125rem" }}>Telefon</p>
              <p style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--color-ipek-green-700)" }}>0246 242 99 99</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/902462429999?text=Merhaba%2C%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_click"
            data-event-category="iletisim_page"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1.25rem",
              backgroundColor: "#fff",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-ipek-cream-200)",
              textDecoration: "none",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", backgroundColor: "#dcfce7", borderRadius: "0.75rem", fontSize: "1.25rem" }}>
              💬
            </span>
            <div>
              <p style={{ fontWeight: 600, color: "var(--color-ipek-green-900)", marginBottom: "0.125rem" }}>WhatsApp</p>
              <p style={{ fontSize: "0.9375rem", color: "#25D366", fontWeight: 600 }}>Mesaj Gönderin</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ispartaipekhaliyikama/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1.25rem",
              backgroundColor: "#fff",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-ipek-cream-200)",
              textDecoration: "none",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", backgroundColor: "#fce7f3", borderRadius: "0.75rem", fontSize: "1.25rem" }}>
              📷
            </span>
            <div>
              <p style={{ fontWeight: 600, color: "var(--color-ipek-green-900)", marginBottom: "0.125rem" }}>Instagram</p>
              <p style={{ fontSize: "0.9375rem", color: "var(--color-ipek-warm-600)" }}>@ispartaipekhaliyikama</p>
            </div>
          </a>
        </div>

        {/* Adres */}
        <div style={{ padding: "1.5rem", backgroundColor: "#fff", borderRadius: "0.75rem", border: "1px solid var(--color-ipek-cream-200)", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>Adres Bilgisi</h2>
          <p style={{ color: "var(--color-ipek-warm-600)", lineHeight: 1.7 }}>
            Sav Kasabası, Fatih Mahallesi, 528 Sokak No:5
            <br />
            Merkez/Isparta
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--color-ipek-warm-500)", marginTop: "0.75rem", fontStyle: "italic" }}>
            * Adres bilgisi yayın öncesi işletme tarafından teyit edilmelidir.
          </p>
        </div>

        {/* Çalışma Saatleri */}
        <div style={{ padding: "1.5rem", backgroundColor: "#fff", borderRadius: "0.75rem", border: "1px solid var(--color-ipek-cream-200)", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>Çalışma Saatleri</h2>
          <table style={{ width: "100%", fontSize: "0.875rem" }}>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--color-ipek-cream-200)" }}>
                <td style={{ padding: "0.5rem 0", color: "var(--color-ipek-warm-700)", fontWeight: 500 }}>Pazartesi – Pazar</td>
                <td style={{ padding: "0.5rem 0", textAlign: "right", color: "var(--color-ipek-green-700)", fontWeight: 600 }}>08:00 – 21:00</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: "0.75rem", color: "var(--color-ipek-warm-500)", marginTop: "0.75rem", fontStyle: "italic" }}>
            * Çalışma saatleri yayın öncesi işletme tarafından teyit edilmelidir.
          </p>
        </div>

        {/* Randevu nasıl alınır */}
        <div style={{ padding: "1.5rem", backgroundColor: "var(--color-ipek-green-50)", borderRadius: "0.75rem" }}>
          <h2 style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>Randevu Nasıl Alınır?</h2>
          <ol style={{ paddingLeft: "1.25rem", color: "var(--color-ipek-warm-700)", lineHeight: 2, fontSize: "0.9375rem" }}>
            <li>Yukarıdaki telefon numarasını arayın veya WhatsApp'tan yazın.</li>
            <li>Halınızın yaklaşık m² bilgisini ve adresinizi paylaşın.</li>
            <li>Size uygun bir alım günü ve saati belirleyin.</li>
            <li>Ekibimiz halınızı kapınızdan alır, 2–3 gün içinde tertemiz teslim eder.</li>
          </ol>
        </div>
      </section>
    </>
  );
}
