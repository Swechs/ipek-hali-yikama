import { sitePhotos, servicePhoto, type SitePhoto } from '../lib/site-photos'
import type { ReactNode } from 'react'
export const PHONE='tel:02462429999', PHONE_TEXT='0246 242 99 99', WA='https://wa.me/905422471836?text=Merhaba%2C%20bilgi%20almak%20istiyorum.'
export function PhotoFigure({ photo, caption, priority = false, className = '' }: {
  photo: SitePhoto
  caption?: string
  priority?: boolean
  className?: string
}) {
  return <figure className={'onsite-photo ' + className}>
    <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}
      loading={priority ? 'eager' : 'lazy'} decoding="async" fetchPriority={priority ? 'high' : 'auto'} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
}

export function PageHero({ eyebrow, title, lead, crumbs = [], side, tone = 'light', photo }: {
  eyebrow: string; title: ReactNode; lead: string; crumbs?: string[]; side?: ReactNode
  tone?: 'light' | 'dark'; photo?: SitePhoto
}) {
  const image = photo ?? servicePhoto(crumbs[0] ?? '')
  return <section className={'page-hero ' + (tone === 'dark' ? 'page-hero-dark' : '')}>
    <div className="container">
      <nav className="crumbs" aria-label="Sayfa yolu">
        <a href="/">Ana sayfa</a>
        {crumbs.map((crumb, index) => <span key={crumb}><i>/</i>
          <span aria-current={index === crumbs.length - 1 ? 'page' : undefined}>{crumb}</span>
        </span>)}
      </nav>
      <div className={'page-hero-grid' + (side || image ? '' : ' page-hero-grid--single')}>
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</div>
          <h1>{title}</h1><p className="page-lead">{lead}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={PHONE}>Hemen arayın <span className="button-phone">{PHONE_TEXT}</span></a>
            <a className="button button-quiet" href={WA} target="_blank" rel="noreferrer">WhatsApp’tan yazın <span>↗</span></a>
          </div>
        </div>
        {(side || image) && <div className="page-hero-side">
          {image && <PhotoFigure photo={image} caption={image.alt} priority className="service-hero-photo" />}
          {side}
        </div>}
      </div>
    </div>
  </section>
}
export function SectionHead({eyebrow,title,copy,light=false}:{eyebrow:string;title:string;copy?:string;light?:boolean}){return <div className={`section-head ${light?'section-head-light':''}`}><div className="eyebrow"><span className="eyebrow-dot"/>{eyebrow}</div><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}
export function ContactBand({title='Bir fiyat sorun, birlikte planlayalım.',copy='Telefonla arayın ya da WhatsApp’tan hizmet ve adres bilgilerinizi gönderin.'}:{title?:string;copy?:string}){return <section className="contact-band"><div className="container contact-band-inner"><div><div className="eyebrow eyebrow-light">İPEK HALI YIKAMA · ISPARTA</div><h2>{title}</h2><p>{copy}</p></div><div className="contact-band-actions"><a className="button button-white" href={PHONE}>{PHONE_TEXT}</a><a className="button button-whatsapp" href={WA} target="_blank" rel="noreferrer">WhatsApp’tan yazın ↗</a></div></div></section>}
export function Steps({items}:{items:{title:string;copy:string}[]}){return <div className="steps">{items.map((s,i)=><article className="step" key={s.title}><span className="step-no">0{i+1}</span><div><h3>{s.title}</h3><p>{s.copy}</p></div></article>)}</div>}
export function FaqRows({items}:{items:[string,string][]}){return <div className="faq-list">{items.map(([q,a])=><details key={q} className="faq-row"><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>}
export function PriceNote({title='Halı yıkama',price='130',unit='TL / m²',note='6 m² ve altı siparişlerde minimum ücret 780 TL.'}:{title?:string;price?:string;unit?:string;note?:string}){return <div className="price-note"><span className="price-note-label">{title}</span><strong>{price}<small> {unit}</small></strong><p>{note}</p></div>}
export function FeatureRows({items}:{items:{title:string;copy:string;mark?:string}[]}){return <div className="feature-rows">{items.map((x,i)=><article className="feature-row" key={x.title}><span className="feature-mark">{x.mark??String(i+1).padStart(2,'0')}</span><div><h3>{x.title}</h3><p>{x.copy}</p></div><span className="feature-arrow">↗</span></article>)}</div>}

type CarpetStage = { title: string; copy: string; photo?: SitePhoto }
// İşletmenin bildirdiği gerçek üretim süreci. Yalnız aşamayı gerçekten gösteren fotoğraf eklenir.
export const carpetStages: CarpetStage[] = [
  { title: 'Çırpma', copy: 'Fabrikaya gelen bütün halılar ilk olarak çırpma makinesinden geçirilerek toz ve gevşek kirlerinden arındırılır.' },
  { title: 'Yıkama', copy: 'Halılar 25 fırçalı otomatik halı yıkama makinesinde sıcak suyla yıkanır.', photo: sitePhotos.washing },
  { title: 'Durulama', copy: 'Yıkama hattının sonunda bulunan 3 bar basınçlı durulama sistemi kullanılır.', photo: sitePhotos.washingDetail },
  { title: 'Sıkma', copy: 'Yıkanan halılar sıkma işleminden geçirilir.', photo: sitePhotos.spinning },
  { title: 'Kapalı kurutma', copy: 'Halılar özel kapalı kurutma odalarımızda kurutulur.', photo: sitePhotos.drying },
  { title: 'Paketleme', copy: 'Kuruyan halılar paketleme makinesinde teslimata hazırlanır.', photo: sitePhotos.packing },
  { title: 'Otomatik poşetleme', copy: 'Halı makineye verildikten sonra otomatik olarak poşetlenir, poşetin ağzı makine tarafından kapatılır ve tünelin diğer tarafından hazır şekilde çıkar.' },
]
export function CarpetStages() {
  return <ol className="carpet-stages carpet-stages--seven" aria-label="İpek Halı Yıkama’nın 7 aşamalı halı yıkama sistemi">
    {carpetStages.map((stage, index) => <li className="carpet-stage" key={stage.title}>
      {stage.photo
        ? <div className="process-photo"><img src={stage.photo.src} alt={stage.photo.alt}
            loading="lazy" decoding="async" width={stage.photo.width} height={stage.photo.height} /></div>
        : <div className="process-photo process-photo--text" aria-hidden="true"><span>{stage.title}</span></div>}
      <span className="stage-number">{String(index + 1).padStart(2, '0')}</span>
      <h3>{stage.title}</h3><p>{stage.copy}</p>
    </li>)}
  </ol>
}

export const PAYMENT_TITLE = 'Kredi kartıyla ödeme imkânı'
export const PAYMENT_TEXT = 'İpek Halı Yıkama’da müşterilerimiz hem fabrikamızda hem de halı teslimatı sırasında kredi kartıyla ödeme yapabilir.'
export function PaymentNote() {
  return <aside className="payment-note" aria-label={PAYMENT_TITLE}>
    <span className="payment-note-icon" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
    </span>
    <div><h3>{PAYMENT_TITLE}</h3><p>{PAYMENT_TEXT}</p></div>
  </aside>
}

const SERVICE_LINKS = [
  { href: '/hali-yikama', title: 'Halı yıkama', copy: '25 fırçalı sistem · 130 TL/m²' },
  { href: '/koltuk-yikama', title: 'Koltuk yıkama', copy: 'Evinizde yerinde · 3+3+1+1 takım 2.500 TL' },
  { href: '/yorgan-battaniye-yikama', title: 'Yorgan ve battaniye yıkama', copy: 'Ürüne göre fiyat bilgisi' },
  { href: '/perde-yikama', title: 'Stor perde yıkama', copy: 'Özel stor perde yıkama makinesi' },
  { href: '/nasil-yikanir', title: '7 aşamalı yıkama sistemi', copy: 'Çırpmadan otomatik poşetlemeye' },
]
export function RelatedServices({ current }: { current: string }) {
  return <section className="section section-tight"><div className="container">
    <SectionHead eyebrow="DİĞER HİZMETLER" title="İpek’te başka neler yıkanır?" />
    <div className="related-services">{SERVICE_LINKS.filter(link => link.href !== current).map(link =>
      <a key={link.href} href={link.href} className="related-service"><strong>{link.title}</strong><span>{link.copy}</span><i aria-hidden="true">↗</i></a>)}
    </div>
  </div></section>
}
