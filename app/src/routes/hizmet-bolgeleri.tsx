import { createFileRoute } from '@tanstack/react-router'
import { ContactBand, PageHero, SectionHead } from '../components/site-ui'
import { ServiceAreaMap } from '../components/service-area-map'

export const Route = createFileRoute('/hizmet-bolgeleri')({
  head: () => ({
    meta: [
      { title: 'Isparta Halı Yıkama Servis Bölgeleri | Atabey, Eğirdir — İpek' },
      { name: 'description', content: 'İpek Halı Yıkama servis bölgeleri: Isparta merkez, Atabey, Eğirdir, Gönen ve çevre köyler. Atabey ve Eğirdir güzergâhı Salı ve Cuma. Alım ve teslimat ücretsiz.' },
    ],
  }),
  component: Page,
})

const zones = [
  ['Isparta Merkez', 'Adres ve alım gününü telefonla teyit edin.', 'Merkez'],
  ['Atabey', 'Servis günleri Salı ve Cuma.', 'Salı · Cuma'],
  ['Eğirdir', 'Servis günleri Salı ve Cuma.', 'Salı · Cuma'],
  ['Gönen', 'Adres ve servis günü için telefonla teyit edin.', 'Güzergâha göre'],
  ['Büyük Gökçeli', 'Çevre güzergâhında servis; adresi önceden teyit edin.', 'Güzergâha göre'],
  ['Küçük Gökçeli', 'Çevre güzergâhında servis; adresi önceden teyit edin.', 'Güzergâha göre'],
  ['Büyük Hacılar', 'Çevre güzergâhında servis; adresi önceden teyit edin.', 'Güzergâha göre'],
  ['Küçük Hacılar', 'Çevre güzergâhında servis; adresi önceden teyit edin.', 'Güzergâha göre'],
  ['Ali Köyü', 'Çevre güzergâhında servis; adresi önceden teyit edin.', 'Güzergâha göre'],
  ['Harmanören', 'Çevre güzergâhında servis; adresi önceden teyit edin.', 'Güzergâha göre'],
  ['Kuleönü', 'Çevre güzergâhında servis; adresi önceden teyit edin.', 'Güzergâha göre'],
  ['İslamköy', 'Çevre güzergâhında servis; adresi önceden teyit edin.', 'Güzergâha göre'],
]

function Page() {
  return <>
    <PageHero eyebrow="HİZMET BÖLGELERİ" crumbs={['Servis bölgeleri']} title={<>Isparta’da kapınıza<br /><em>uygun servis.</em></>} lead="Merkez ve çevre güzergâhlarda halı alım ve teslimatı ücretsizdir. İlçe servis günleri için adresinizi arayıp teyit edin." />
    <section className="section service-map-section">
      <div className="container">
        <SectionHead eyebrow="SERVİS HARİTASI" title="Hizmet bölgelerini haritada görün." copy="İşaretler yerleşim merkezlerini gösterir; evden alım noktası değildir. Haritadaki işaretlere dokunup yeri açabilir, servis saatini telefonla teyit edebilirsiniz." />
        <ServiceAreaMap />
      </div>
    </section>
    <section className="section section-paper">
      <div className="container">
        <SectionHead eyebrow="GÜZERGÂHLAR" title="Servis noktaları, tek tek." copy="Atabey ve Eğirdir servisleri Salı ve Cuma günleri planlanır. Köy ve Gönen adresleri için gün bilgisi telefonla teyit edilir." />
        <div className="area-detail-grid">{zones.map(([name, copy, schedule], index) => <article className="area-detail" key={name}>
          <span className="feature-mark">{String(index + 1).padStart(2, '0')}</span>
          <span className="area-schedule">{schedule}</span>
          <h3>{name}</h3>
          <p>{copy}</p>
        </article>)}</div>
      </div>
    </section>
    <section className="section">
      <div className="container area-layout">
        <SectionHead eyebrow="SERVİS GÜNÜNÜZÜ ÖĞRENİN" title="Adresinizi paylaşın." copy="Bölgeniz listede yoksa da arayın; yakın çevre güzergâhına uygunluğu birlikte teyit edelim." />
        <div className="feature-rows">
          <article className="feature-row"><span className="feature-mark">01</span><div><h3>Atabey</h3><p>Salı · Cuma</p></div></article>
          <article className="feature-row"><span className="feature-mark">02</span><div><h3>Eğirdir</h3><p>Salı · Cuma</p></div></article>
          <article className="feature-row"><span className="feature-mark">03</span><div><h3>Ücretsiz alım ve teslimat</h3><p>Belirtilen servis bölgelerinde halı servisi ücretsizdir.</p></div></article>
        </div>
      </div>
    </section>
    <ContactBand title="Adresiniz için servis var mı?" copy="Mahalle veya köyünüzü telefonla ya da WhatsApp’tan yazın; uygun servis gününü teyit edelim." />
  </>
}
