import { useEffect, useState } from 'react'
export const photos = {
  factory: 'https://ispartaipekhaliyikama.com/wp-content/uploads/2024/11/1-carpet-washing-machines-4.jpg',
  carpet: 'https://ispartaipekhaliyikama.com/wp-content/uploads/2024/11/how-to-clean-wool-rug-crystal-carpet-cleaners-e1731668052596.jpg',
  sofa: 'https://ispartaipekhaliyikama.com/wp-content/uploads/2025/04/yerinde-koltuk-yikama-hizmeti.5.jpg.webp',
  curtain: 'https://ispartaipekhaliyikama.com/wp-content/uploads/2024/12/01413e-perde.jpg',
  bedding: 'https://ispartaipekhaliyikama.com/wp-content/uploads/2025/04/yorganyikama1.jpg',
}
export function servicePhoto(title: string) {
  return title.toLocaleLowerCase('tr-TR').includes('koltuk') ? photos.sofa : title.toLocaleLowerCase('tr-TR').includes('perde') ? photos.curtain : /yorgan|battaniye/i.test(title) ? photos.bedding : photos.carpet
}
const processVideo = 'https://demokrat32com.tevideo.org/demokrat32-com/uploads/2026/06/binlerce-kisinin-uzerinde-yurudugu-o-halitum-yikama-asamalariyla-simdi-karsinizda-bu-videod.mp4'
const newsUrl = 'https://www.demokrat32.com/binlerce-kisinin-uzerinde-yurudugu-hali-eski-haline-dondu-ipek-hali-yikamadan-dikkat-ceken-temizlik'
export const instagramReels: { shortcode: string; title: string }[] = [{"shortcode":"DdlvicHkyGA","title":"İpek’ten görüntüler · 1"},{"shortcode":"DcMK_MWtZev","title":"İpek’ten görüntüler · 2"},{"shortcode":"DX15gyXEcdx","title":"İpek’ten görüntüler · 3"}]

function AdditionalVideo() {
  const [open, setOpen] = useState(false)
  return <article className="video-card"><div className="video-player">{open ?
    <iframe src="https://www.youtube-nocookie.com/embed/3diAjIf7sEY?autoplay=1&rel=0" title="Kanal32 — İpek Halı Yıkama" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/> :
    <button type="button" className="video-poster" onClick={() => setOpen(true)} aria-label="Kanal32 İpek Halı Yıkama videosunu oynat"><img src="https://i.ytimg.com/vi/3diAjIf7sEY/hqdefault.jpg" alt="Kanal32 İpek Halı Yıkama videosu" loading="lazy"/><span className="media-play" aria-hidden="true">▶</span><span className="video-poster-label">Kanal32 videosunu oynat</span></button>}
    </div><div className="video-info"><span>BASINDA İPEK</span><h3>Kanal32’den İpek Halı Yıkama</h3><p>İpek Halı Yıkama hakkında Kanal32’de yayınlanan video.</p><a href="https://www.youtube.com/watch?v=3diAjIf7sEY" target="_blank" rel="noreferrer">Kaynak: Kanal32 · YouTube’da izle ↗</a></div></article>
}


function DirectReel() {
  const [autoplay, setAutoplay] = useState(false)
  useEffect(() => { setAutoplay(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) }, [])
  return <article className="video-card"><div className="video-player">
    <video controls playsInline muted autoPlay={autoplay} loop preload="metadata" poster="https://d2ol7oe51mr4n9.cloudfront.net/user_3K2NGMxq0ZOTGBGLEHzm2JEeqiS/6ca55eb6-ee59-4e15-94da-4fa25e8ea509.jpg" aria-label="İpek Halı Yıkama Instagram videosu"><source src="https://d2ol7oe51mr4n9.cloudfront.net/user_3K2NGMxq0ZOTGBGLEHzm2JEeqiS/8c1a5631-e5a9-4880-9ece-17bcf20d3d20.mp4" type="video/mp4"/></video>
    </div><div className="video-info"><span>İPEK’TEN GÖRÜNTÜLER</span><h3>Sıcak su ile halı yıkama</h3><p>Halılarınızı özel sıcak su sistemimizle yıkıyoruz. İpek Halı Yıkama olarak bu hizmeti Türkiye’de sunan tek işletme olduğumuzu belirtiyoruz.</p><a href="https://www.instagram.com/reel/DcMK_MWtZev/" target="_blank" rel="noreferrer">Instagram’daki paylaşım ↗</a></div></article>
}

export function VideoGallery() {
  const [youtubeOpen, setYoutubeOpen] = useState(false)
  const [videoError, setVideoError] = useState(false)
  return <section className="section section-paper media-section" id="videolar">
    <div className="container">
      <div className="media-heading"><div><div className="eyebrow"><span className="eyebrow-dot"/>İŞİMİZİN İÇİNDEN</div><h2>Temizliğin her aşamasını izleyin.</h2><p>İpek Halı Yıkama’dan gerçek görüntüler, yıkama süreci ve tanıtım filmi.</p></div>
      <a className="button button-quiet" href="https://www.instagram.com/ispartaipekhaliyikamaofficial/" target="_blank" rel="noreferrer">Instagram hesabımız ↗</a></div>
      <div className="video-grid">
        <article className="video-card"><div className="video-player">{videoError ? <div className="video-unavailable"><p>Video şu anda yüklenemiyor.</p><a className="button button-white" href={newsUrl} target="_blank" rel="noreferrer">Kaynağında izle ↗</a></div> :
          <video controls playsInline preload="none" poster="https://demokrat32com.teimg.com/crop/1280x720/demokrat32-com/uploads/2026/06/ipk-1.jpg" onError={() => setVideoError(true)} aria-label="İpek Halı Yıkama: halının yıkama aşamaları"><source src={processVideo} type="video/mp4"/>Tarayıcınız video oynatmayı desteklemiyor. <a href={newsUrl}>Videoyu izleyin</a></video>}</div>
          <div className="video-info"><span>YIKAMA SÜRECİ</span><h3>Festival halısının temizlik yolculuğu</h3><p>Yıkama aşamalarını ses, duraklatma ve tam ekran kontrolleriyle izleyin.</p><a href={newsUrl} target="_blank" rel="noreferrer">Kaynak: Demokrat Gazetesi ↗</a></div></article>
        <DirectReel/>
        <AdditionalVideo/>
        <article className="video-card"><div className="video-player">{youtubeOpen ? <iframe src="https://www.youtube-nocookie.com/embed/DOM463SSu3A?autoplay=1&rel=0" title="Isparta İpek Halı ve Koltuk Yıkama tanıtım filmi" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/> :
          <button type="button" className="video-poster" onClick={() => setYoutubeOpen(true)} aria-label="İpek tanıtım filmini oynat"><img src="https://i.ytimg.com/vi/DOM463SSu3A/hqdefault.jpg" alt="İpek Halı Yıkama tanıtım filminden bir kare" loading="lazy"/><span className="media-play" aria-hidden="true">▶</span><span className="video-poster-label">Tanıtım filmini oynat</span></button>}</div>
          <div className="video-info"><span>İPEK TANITIM FİLMİ</span><h3>Halıdan koltuğa, İpek’i yakından tanıyın</h3><p>Tesis, hizmetler ve halıların bakım yolculuğu.</p><a href="https://www.youtube.com/watch?v=DOM463SSu3A" target="_blank" rel="noreferrer">YouTube’da izle ↗</a></div></article>
      </div>
      <div style={{display:'flex',gap:16,flexWrap:'wrap',marginTop:24}}>{instagramReels.filter(reel => reel.shortcode !== 'DcMK_MWtZev').map(reel => <a className="button button-quiet" key={reel.shortcode} href={'https://www.instagram.com/reel/' + reel.shortcode + '/'} target="_blank" rel="noreferrer">{reel.title} · Instagram ↗</a>)}</div>
    </div>
  </section>
}
