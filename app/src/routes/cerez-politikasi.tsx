import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '../lib/seo'
import { CONSENT_KEY } from '../lib/google-ads'
import { ContactBand, PageHero } from '../components/site-ui'

export const Route = createFileRoute('/cerez-politikasi')({ head: () => createPageHead('/cerez-politikasi'), component: Page })

function resetConsent() {
  try { localStorage.removeItem(CONSENT_KEY) } catch { /* tarayıcı depolamaya izin vermiyor */ }
  window.gtag?.('consent', 'update', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' })
  window.location.reload()
}

function Page() {
  return <>
    <PageHero eyebrow="KVKK · ÇEREZLER" crumbs={['Çerez ve gizlilik politikası']} title={<>Çerez ve<br /><em>gizlilik politikası.</em></>} lead="Web sitemizde hangi çerezlerin kullanıldığını, kişisel verilerinizin nasıl işlendiğini ve 6698 sayılı KVKK kapsamındaki haklarınızı bu sayfada açıklıyoruz." />
    <section className="section"><div className="container service-article policy-text">
      <p><strong>Son güncelleme:</strong> 26 Kasım 2026</p>

      <h2>1. Veri sorumlusu</h2>
      <p>İpek Halı Yıkama, Sav Kasabası, Fatih Mahallesi, 528 Sokak No:5, Merkez / Isparta. Telefon: <a href="tel:02462429999">0246 242 99 99</a>, WhatsApp: <a href="https://wa.me/905422471836" target="_blank" rel="noreferrer">0542 247 18 36</a>.</p>

      <h2>2. Hangi kişisel verileri işliyoruz?</h2>
      <p>Web sitemizde form veya üyelik bulunmaz. Bizi telefonla aradığınızda ya da WhatsApp’tan yazdığınızda paylaştığınız ad, telefon numarası, adres ve sipariş bilgileri; halı alımı, yıkama, teslimat ve ödeme işlemlerini yürütmek amacıyla işlenir. Bu işleme, sözleşmenin kurulması ve ifası ile hukuki yükümlülüklerimizin yerine getirilmesi hukuki sebeplerine dayanır.</p>

      <h2>3. Çerezler ve benzeri teknolojiler</h2>
      <p><strong>Zorunlu kayıt:</strong> Çerez tercihinizi hatırlamak için tarayıcınızda küçük bir kayıt tutulur. Bu kayıt sitenin çalışması için gereklidir ve reklam amacıyla kullanılmaz.</p>
      <p><strong>Reklam ölçümü (izninize bağlı):</strong> Google Ads reklamlarımızın sonuçlarını ölçmek için Google LLC’nin etiketlerini kullanırız. Sitemizdeki telefon ve WhatsApp bağlantılarına tıklanması, reklam dönüşümü olarak ölçülür. Bu amaçla çerez kullanımı yalnızca çerez bandında “Kabul et” seçeneğini işaretlemeniz hâlinde başlar. “Reddet” seçeneğinde reklam çerezleri yazılmaz; Google’a yalnızca çerez içermeyen, sınırlı ölçüm bilgisi iletilebilir.</p>
      <p><strong>Üçüncü taraf içerikler:</strong> Sayfalarımızda yazı tipleri (Google Fonts), harita (OpenStreetMap), videolar (YouTube ve harici video sunucuları) ile Instagram ve Google bağlantıları bulunur. Bu içerikler yüklendiğinde veya oynatıldığında ilgili hizmet sağlayıcılar IP adresiniz gibi teknik bilgileri kendi politikaları doğrultusunda işleyebilir. YouTube videoları, siz oynatana kadar yüklenmez.</p>

      <h2>4. Yurt dışına aktarım</h2>
      <p>Google ve diğer üçüncü taraf hizmet sağlayıcıların sunucuları yurt dışında bulunabilir. Reklam ölçümüne ilişkin aktarım, çerez bandında verdiğiniz açık rızaya dayanır. Rızanızı dilediğiniz zaman geri alabilirsiniz.</p>

      <h2>5. Çerez tercihinizi değiştirme</h2>
      <p>Verdiğiniz tercihi aşağıdaki düğmeyle sıfırlayabilirsiniz. Sayfa yenilendiğinde çerez bandı yeniden görüntülenir. Ayrıca tarayıcınızın ayarlarından çerezleri ve site verilerini silebilirsiniz.</p>
      <button type="button" className="button button-primary" onClick={resetConsent}>Çerez tercihimi değiştir</button>

      <h2>6. KVKK kapsamındaki haklarınız</h2>
      <p>KVKK’nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini, şartları oluştuğunda silinmesini veya yok edilmesini isteme, bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme, münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme ve kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.</p>

      <h2>7. Başvuru</h2>
      <p>Haklarınıza ilişkin taleplerinizi yukarıdaki adrese yazılı olarak iletebilir veya bilgi almak için <a href="tel:02462429999">0246 242 99 99</a> numaralı telefondan bize ulaşabilirsiniz. Talebiniz en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.</p>
    </div></section>
    <ContactBand title="Sorunuz mu var?" copy="Kişisel verileriniz veya çerezler hakkında bilgi almak için bize ulaşın." />
  </>
}
