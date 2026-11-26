import { createPageHead, HERO_POSTER, serializeJsonLd } from '../lib/seo'
import { createFileRoute } from '@tanstack/react-router'
import { useState, useRef } from 'react'
import '../hero-refresh.css'
import { ContactBand, CarpetStages, FaqRows, PHONE, WA, SectionHead } from '../components/site-ui'
import { VideoGallery } from '../components/site-media'
import { ServiceAreaMap } from '../components/service-area-map'
export const Route=createFileRoute('/')({head: () => createPageHead('/'), component:Home})
const faqs:[string,string][]=[['Halı yıkama m² fiyatı ne kadar?','Halı yıkama ücreti 130 TL/m²’dir. 6 m² ve altındaki siparişlerde minimum ücret 780 TL olarak uygulanır.'],['Halı alım ve teslimat ücretsiz mi?','Evet. Hizmet bölgelerimizde halı alım ve teslimat servisi ücretsizdir.'],['Halılar ne zaman teslim edilir?','Genellikle 2 günde teslim edilir. Yoğun dönemlerde süre 2–3 güne çıkabilir.'],['Atabey ve Eğirdir’e hangi günler servis var?','Atabey, Eğirdir ve yakın köy güzergâhları Salı ve Cuma günleri planlanır. Adresinizi arayıp teyit edebilirsiniz.']]
function Home(){const [area,setArea]=useState('12');const sqm=Math.max(0,Number(area)||0);const price=sqm===0?0:sqm<=6?780:sqm*130;const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))};return <>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeJsonLd(faqSchema)}}/>
<CinematicHero/>
<div className="ipek-proofbar"><div className="ipek-proof-item"><strong>Sıcak suyla yıkama</strong><span>Halıya uygun, özenli temizlik</span></div><div className="ipek-proof-item"><strong>Ücretsiz alım &amp; teslimat</strong><span>Kapınızdan kapınıza servis</span></div><div className="ipek-proof-item"><strong>Her aşamada özen</strong><span>Kontrolden kurutmaya, teslimata kadar</span></div></div>
<div className="service-flow" id="hizmet-ozeti">
  <div className="container service-flow-inner">
    <ol aria-label="Halı yıkama hizmet adımları">
      <li>Kapınızdan alım</li>
      <li>Yıkama ve kurutma</li>
      <li>Son kontrol</li>
      <li>Ücretsiz teslimat</li>
    </ol>
    <a href="/nasil-yikanir">Nasıl yıkıyoruz?</a>
  </div>
</div>
<section className="home-services"><div className="container"><SectionHead eyebrow="HİZMETLER" title="Evinizdeki tekstillere, ayrı ayrı özen." copy="Halı, koltuk, perde veya yorgan. İhtiyacınız olan hizmetin ayrıntılarına göz atın."/><div className="services-grid"><Service href="/hali-yikama" no="01" title="Halı yıkama" price="130 TL / m²" text="Ücretsiz kapıdan alım ve teslimat. Online hesaplayıcıyla yaklaşık ücreti görün."/><Service href="/koltuk-yikama" no="02" title="Koltuk yıkama" price="Takım 2.500 TL" text="Koltuk takımınız ve randevu planı için ayrıntıları öğrenin."/><Service href="/perde-yikama" no="03" title="Stor perde yıkama" price="Fiyat için bilgi alın" text="Stor perdenizin ölçüsünü paylaşın; yıkama ve servis için güncel fiyatı bildirelim."/><Service href="/yorgan-battaniye-yikama" no="04" title="Yorgan & battaniye" price="Fiyat için bilgi alın" text="Yorgan ve battaniyeler için yıkama ve servis bilgisini sorun."/></div></div></section>
<section className="home-process"><div className="container process-layout"><SectionHead eyebrow="HALI YIKAMA SÜRECİ" title="Halı, temizlenip kapınıza dönene kadar." copy="Her halının yolculuğu kontrolden başlar; yıkama, kurutma ve son kontrolün ardından teslimatla tamamlanır."/><CarpetStages/></div></section>
<section className="home-area"><div className="container"><div className="home-area-heading"><SectionHead eyebrow="SERVİS ALANI" title="Isparta ve çevre güzergâhlar." copy="Atabey ve Eğirdir için Salı ve Cuma. Haritadaki diğer köy ve ilçe noktaları için adresinizi teyit edin."/><a className="button button-quiet" href="/hizmet-bolgeleri">Tüm servis bölgeleri ↗</a></div><ServiceAreaMap/></div></section>
<section className="home-faq"><div className="container faq-layout"><SectionHead eyebrow="MERAK EDİLENLER" title="Önce aklınızdaki sorular." copy="Fiyat, servis veya teslimatla ilgili başka bir sorunuz varsa bize sorun."/><div><FaqRows items={faqs}/><a className="button button-quiet" href="/sss" style={{marginTop:22}}>Tüm sorular ↗</a></div></div></section>
<section className="section"><div className="container"><div className="price-calculator"><div className="eyebrow"><span className="eyebrow-dot"/>HIZLI FİYAT TAHMİNİ</div><h2 style={{marginTop:13}}>Kaç m² halınız var?</h2><p style={{opacity:.75,marginTop:8}}>6 m² ve altı siparişlerde minimum 780 TL alınır.</p><div className="calculator-form"><label>Halı alanı (m²)<input type="number" min="1" step="0.5" value={area} onChange={e=>setArea(e.target.value)} aria-label="Halı alanı metrekare"/></label><a className="button button-white" href="/hali-yikama#hesaplayici">Detaylı hesapla ↗</a></div><div className="calc-result"><strong>{sqm===0?'—':`${new Intl.NumberFormat('tr-TR').format(price)} TL`}</strong><span>{sqm===0?'Tahmini tutarı görmek için metrekare girin':'yaklaşık yıkama ücreti · servis bölgesine göre teslimat ücretsiz'}</span></div></div></div></section>
<VideoGallery/>
<ContactBand title="Halılar için fiyat ve alım günü sorun." copy="Telefonla arayın veya WhatsApp’tan adresinizi gönderin; size uygun servis zamanını konuşalım."/>
</>}
function Service({href,no,title,price,text}:{href:string;no:string;title:string;price:string;text:string}){return <a className="service-card service-card--no-photo" href={href}><span className="service-index">{no} / İPEK</span><div><h3>{title}</h3><p>{text}</p></div><div className="service-bottom"><span>{price}</span><span>↗</span></div></a>}

function HeroWashAnimation(){return <video className="hero-wash-animation" autoPlay muted loop playsInline controls preload="metadata" poster={HERO_POSTER} aria-label="İpek tesisinde gerçek halı yıkama görüntüsü"><source src="https://d2ol7oe51mr4n9.cloudfront.net/user_3K2NGMxq0ZOTGBGLEHzm2JEeqiS/55501616-759f-4ec6-bd57-40570b8fb67e.mp4#t=0.7" type="video/mp4"/></video>}

function CinematicHero(){
const video=useRef<HTMLVideoElement>(null);const started=useRef(false);const resume=useRef(false);const [paused,setPaused]=useState(false);const [ready,setReady]=useState(false);
const poster=HERO_POSTER;
return <section className="ipek-cinema" style={{backgroundImage:`url("${poster}")`,backgroundSize:'cover'}}><video ref={video} muted playsInline style={{opacity:ready?1:0}} onLoadedMetadata={e=>{e.currentTarget.currentTime=0.7}} onSeeked={e=>{setReady(true);if(!started.current){started.current=true;resume.current=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;setPaused(!resume.current)}if(resume.current){resume.current=false;void e.currentTarget.play().catch(()=>setPaused(true))}}} onEnded={e=>{setReady(false);resume.current=true;e.currentTarget.currentTime=0.7}} preload="metadata" poster={HERO_POSTER} aria-label="İpek tesisinde halı yıkama"><source src="https://d2ol7oe51mr4n9.cloudfront.net/user_3K2NGMxq0ZOTGBGLEHzm2JEeqiS/55501616-759f-4ec6-bd57-40570b8fb67e.mp4#t=0.7" type="video/mp4"/></video><div className="cinema-inner"><div className="cinema-eyebrow">Isparta’nın İpek’i</div><h1>Isparta’da<br/><em>Sıcak suyla<br/>halı yıkama.</em></h1><p>İpek Halı Yıkama ile halılarınıza özenli temizlik.<br/>Kapınızdan alıyor, evinize ferahlık getiriyoruz.</p><div className="cinema-actions"><a className="cinema-btn cinema-primary" href={PHONE}>Ücretsiz servis isteyin <span>↗</span></a><a className="cinema-btn" href={WA} target="_blank" rel="noopener noreferrer">WhatsApp’tan yazın <span>↗</span></a></div></div><div className="cinema-bottom"><small>HALI · KOLTUK · PERDE · YORGAN<br/>İpek tesisinden gerçek yıkama görüntüleri</small><button aria-label={paused?'Videoyu oynat':'Videoyu duraklat'} onClick={()=>{const v=video.current;if(!v)return;if(v.paused){void v.play().then(()=>setPaused(false)).catch(()=>setPaused(true))}else{v.pause();setPaused(true)}}}>{paused?'▶':'Ⅱ'}</button></div></section>
}
