import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hizmet-bolgeleri")({
  head: () => ({
    meta: [
      { title: "Hizmet Bölgeleri | Atabey, Eğirdir Halı Yıkama — İpek Halı Yıkama Isparta" },
      { name: "description", content: "İpek Halı Yıkama hizmet bölgeleri: Isparta merkez, Atabey (Salı-Cuma), Eğirdir (Salı-Cuma), Gökçeli, Hacılar, İslamköy ve çevre köyler. Ücretsiz halı alım-teslimat." },
    ],
  }),
  component: HizmetBolgeleriPage,
});

function HizmetBolgeleriPage() {
  return (
    <>
      <nav style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem 1rem 0", fontSize: "0.8125rem", color: "var(--color-ipek-warm-500)" }}>
        <a href="/" style={{ color: "var(--color-ipek-warm-500)" }}>Ana Sayfa</a> &rsaquo; <span style={{ color: "var(--color-ipek-green-800)" }}>Hizmet Bölgeleri</span>
      </nav>

      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem" }}>
        <h1 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", marginBottom: "1rem" }}>
          Hizmet Bölgeleri ve Servis Günleri
        </h1>
        <p style={{ fontSize: "1.0625rem", color: "var(--color-ipek-warm-600)", lineHeight: 1.7, marginBottom: "2rem" }}>
          <strong>İpek Halı Yıkama</strong> olarak Isparta merkez ve çevre yerleşimlere halı alım-teslimat servisi sunuyoruz.
          Halılarınızı kapınızdan ücretsiz alıyor, yıkama sonrası tertemiz teslim ediyoruz.
        </p>

        {/* Isparta Merkez */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ display: "inline-flex", width: "28px", height: "28px", backgroundColor: "var(--color-ipek-green-700)", color: "#fff", borderRadius: "50%", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700 }}>✓</span>
            Isparta Merkez
          </h2>
          <p style={{ color: "var(--color-ipek-warm-600)", lineHeight: 1.7, paddingLeft: "2.5rem" }}>
            Isparta merkez ilçenin tüm mahallelerine <strong>her gün</strong> halı alım-teslimat servisi sunuyoruz.
            Halı yıkama: 130 TL/m², minimum 780 TL. Teslimat 2–3 gün içinde yapılır.
          </p>
        </div>

        {/* Atabey */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ display: "inline-flex", width: "28px", height: "28px", backgroundColor: "var(--color-ipek-green-700)", color: "#fff", borderRadius: "50%", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700 }}>✓</span>
            Atabey
          </h2>
          <p style={{ color: "var(--color-ipek-warm-600)", lineHeight: 1.7, paddingLeft: "2.5rem" }}>
            Atabey ilçesine <strong>Salı ve Cuma</strong> günleri halı alım-teslimat servisi yapıyoruz.
            Randevu için bizi önceden arayarak veya WhatsApp'tan yazarak bilgi alabilirsiniz.
          </p>
          <p style={{ paddingLeft: "2.5rem", marginTop: "0.5rem" }}>
            <span style={{ display: "inline-block", padding: "0.25rem 0.625rem", backgroundColor: "var(--color-ipek-green-100)", color: "var(--color-ipek-green-800)", borderRadius: "0.375rem", fontSize: "0.8125rem", fontWeight: 600 }}>
              Servis Günleri: Salı &amp; Cuma
            </span>
          </p>
        </div>

        {/* Eğirdir */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ display: "inline-flex", width: "28px", height: "28px", backgroundColor: "var(--color-ipek-green-700)", color: "#fff", borderRadius: "50%", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700 }}>✓</span>
            Eğirdir
          </h2>
          <p style={{ color: "var(--color-ipek-warm-600)", lineHeight: 1.7, paddingLeft: "2.5rem" }}>
            Eğirdir ilçesi ve yakın köylere <strong>Salı ve Cuma</strong> günleri halı alım-teslimat servisi yapıyoruz.
          </p>
          <p style={{ paddingLeft: "2.5rem", marginTop: "0.5rem" }}>
            <span style={{ display: "inline-block", padding: "0.25rem 0.625rem", backgroundColor: "var(--color-ipek-green-100)", color: "var(--color-ipek-green-800)", borderRadius: "0.375rem", fontSize: "0.8125rem", fontWeight: 600 }}>
              Servis Günleri: Salı &amp; Cuma
            </span>
          </p>
        </div>

        {/* Çevre Köyler */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Hizmet Verilen Çevre Yerleşimler</h2>
          <p style={{ color: "var(--color-ipek-warm-600)", lineHeight: 1.7, marginBottom: "1rem" }}>
            Aşağıdaki köy ve kasabalara da halı alım-teslimat servisi sunuyoruz. Servis günleri için lütfen bizi arayarak bilgi alın.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: "0.5rem" }}>
            {[
              "Büyük Gökçeli",
              "Küçük Gökçeli",
              "Büyük Hacılar",
              "Küçük Hacılar",
              "Ali Köyü",
              "Harmanören",
              "Kuleönü",
              "İslamköy",
            ].map((k) => (
              <div
                key={k}
                style={{
                  padding: "0.625rem 0.875rem",
                  backgroundColor: "#fff",
                  border: "1px solid var(--color-ipek-cream-200)",
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                  color: "var(--color-ipek-green-800)",
                  fontWeight: 500,
                }}
              >
                {k}
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--color-ipek-warm-500)", marginTop: "0.75rem", fontStyle: "italic" }}>
            * Bu köylere kesin servis günü bilgisi işletmeyle teyit edilmelidir. Adresinize servis olup olmadığını öğrenmek için bizi arayın.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "2rem 0", backgroundColor: "var(--color-ipek-green-50)", borderRadius: "0.75rem", marginTop: "1rem" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Bölgenize Servis Var mı?</h2>
          <p style={{ color: "var(--color-ipek-warm-600)", marginBottom: "1rem", fontSize: "0.9375rem" }}>
            Adresinize halı alım-teslimat servisi olup olmadığını öğrenmek için bizi arayın.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:02462429999" data-event="phone_click" data-event-category="hizmet_bolgeleri" style={{ padding: "0.75rem 1.5rem", backgroundColor: "var(--color-ipek-green-700)", color: "#fff", borderRadius: "0.5rem", fontWeight: 600 }}>
              0246 242 99 99
            </a>
            <a href="https://wa.me/902462429999?text=Merhaba%2C%20adresime%20servis%20var%20m%C4%B1%20%C3%B6%C4%9Frenmek%20istiyorum." target="_blank" rel="noopener noreferrer" data-event="whatsapp_click" data-event-category="hizmet_bolgeleri" style={{ padding: "0.75rem 1.5rem", backgroundColor: "#25D366", color: "#fff", borderRadius: "0.5rem", fontWeight: 600 }}>
              WhatsApp ile Sorun
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
