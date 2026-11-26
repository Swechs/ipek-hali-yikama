import { createPageHead, serializeJsonLd } from '../lib/seo'
import { createFileRoute } from '@tanstack/react-router'
import { ContactBand, PageHero, SectionHead, FaqRows, RelatedServices, PaymentNote } from '../components/site-ui'

export const Route = createFileRoute('/sss')({ head: () => createPageHead('/sss'), component: Page })

// Yanıtlar işletmenin bildirdiği gerçek uygulamalara ve sitedeki doğrulanmış fiyatlara dayanır.
const serviceFaqs: [string, string][] = [
  ['Isparta’da halımı nerede yıkatabilirim?', 'İpek Halı Yıkama’nın Sav Kasabası, Fatih Mahallesi, 528 Sokak No:5, Merkez / Isparta adresindeki fabrikasında yıkatabilirsiniz. Isparta merkez ve servis güzergâhlarımızda halılarınızı adresinizden ücretsiz alıp temizlenmiş olarak geri getiriyoruz.'],
  ['İpek Halı Yıkama’da halılar nasıl yıkanıyor?', 'Halılar 7 aşamadan geçer: çırpma makinesiyle tozdan arındırma, 25 fırçalı otomatik makinede sıcak suyla yıkama, 3 bar basınçlı durulama, sıkma, özel kapalı odalarda kurutma, paketleme ve otomatik poşetleme.'],
  ['Halılar yıkamadan önce çırpılıyor mu?', 'Evet. Fabrikaya gelen bütün halılar ilk olarak çırpma makinesinden geçirilerek toz ve gevşek kirlerinden arındırılır.'],
  ['Halılar kapalı alanda mı kurutuluyor?', 'Evet. Sıkma işleminden sonra halılar özel kapalı kurutma odalarımızda kurutulur.'],
  ['Halı yıkama kaç gün sürüyor?', 'Halılar genellikle 2 günde teslim edilir. Yoğun dönemlerde bu süre 2–3 güne çıkabilir.'],
  ['Isparta’da yerinde koltuk yıkama yapıyor musunuz?', 'Evet. Koltuk yıkama hizmetini müşterimizin evinde, yerinde yapıyoruz. 3+3+1+1 koltuk takımı yıkama fiyatı 2.500 TL’dir; farklı koltuk takımları için fiyat ayrıca belirlenir.'],
  ['Stor perdeleri makinede mi yıkıyorsunuz?', 'Evet. Stor perdeler özel stor perde yıkama makinesinde temizlenir. Fiyat perde türüne ve ölçüsüne göre belirlenir.'],
  ['Yorgan ve battaniye yıkıyor musunuz?', 'Evet. Yorgan ve battaniyeleri ürün türüne uygun şekilde yıkıyoruz. Güncel fiyat için ürünün türünü, ölçüsünü ve adetini telefonla ya da WhatsApp’tan iletin.'],
  ['Kredi kartıyla ödeme yapabilir miyim?', 'Evet. Hem fabrikamızda hem de halı teslimatı sırasında kredi kartıyla ödeme yapabilirsiniz.'],
]

const priceFaqs: [string, string][] = [
  ['Halı yıkama m² fiyatı ne kadar?', 'Halı yıkama ücreti 130 TL/m²’dir.'],
  ['Minimum halı yıkama ücreti nedir?', '6 m² ve altındaki siparişlerde minimum ücret 780 TL’dir.'],
  ['12 m² halı ne kadar tutar?', '12 × 130 TL = 1.560 TL.'],
  ['Halı alım ve teslimat ücreti var mı?', 'Hizmet bölgelerinde halı alımı ve teslimatı ücretsizdir.'],
  ['Atabey ve Eğirdir’e hangi gün servis var?', 'Atabey ve Eğirdir’e Salı ve Cuma günleri servis planlanır.'],
  ['Hangi köylere servis var?', 'Büyük Gökçeli, Küçük Gökçeli, Büyük Hacılar, Küçük Hacılar, Ali Köyü, Harmanören, Kuleönü, İslamköy ve Eğirdir’e yakın köyler. Adresi telefonla teyit edin.'],
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [...serviceFaqs, ...priceFaqs].map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
}

function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />
    <PageHero eyebrow="YARDIM MERKEZİ" crumbs={['Sık sorulan sorular']} title={<>Kısa cevaplar,<br /><em>kolay sipariş.</em></>} lead="Halıların nasıl yıkandığı, teslim süresi, koltuk, stor perde, yorgan ve ödeme hakkında en çok sorulanlar." />
    <section className="section"><div className="container faq-layout">
      <SectionHead eyebrow="HİZMETLER" title="Yıkama ve hizmetlerimiz." copy="Halı yıkama sistemimizin ayrıntıları için 7 aşamalı sistem sayfamıza bakabilirsiniz." />
      <div><FaqRows items={serviceFaqs} /><a className="button button-quiet" href="/nasil-yikanir" style={{ marginTop: 22 }}>7 aşamalı yıkama sistemi ↗</a></div>
    </div></section>
    <section className="section section-paper"><div className="container faq-layout">
      <SectionHead eyebrow="FİYAT VE SERVİS" title="Fiyat ve servis bölgeleri." />
      <div><FaqRows items={priceFaqs} /><PaymentNote /></div>
    </div></section>
    <RelatedServices current="/sss" />
    <ContactBand title="Cevabını bulamadınız mı?" />
  </>
}
