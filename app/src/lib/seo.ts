import { sitePhotos } from './site-photos'
export const SITE_URL = 'https://www.ispartaipekhaliyikama.com'
export const SITE_HOST = 'www.ispartaipekhaliyikama.com'
export const GOOGLE_PROFILE_URL = 'https://share.google/LALgrnjImNq55lYIv'
export const INSTAGRAM_URL = 'https://www.instagram.com/ispartaipekhaliyikama/'
export const BUSINESS_ID = SITE_URL + '/#business'
export const WEBSITE_ID = SITE_URL + '/#website'
export const SHARE_IMAGE = SITE_URL + sitePhotos.washing.src
export const HERO_POSTER = sitePhotos.washing.src
export const HERO_POSTER_WEBP_800 = '/images/isparta-ipek-hali-yikama-hatti-800.webp'
export const HERO_POSTER_WEBP_1440 = '/images/isparta-ipek-hali-yikama-hatti-1440.webp'

// The same page inventory supplies metadata, breadcrumbs and the XML sitemap.
export const PAGES = {
  "/": {
    "title": "Isparta Halı Yıkama | 130 TL/m² – İpek Halı Yıkama",
    "description": "Isparta’da halı yıkama 130 TL/m², minimum ücret 780 TL. Ücretsiz halı alım ve teslimat; koltuk, perde ve yorgan yıkama. 0246 242 99 99.",
    "breadcrumb": "Ana sayfa"
  },
  "/blog": {
    "title": "Halı ve Ev Tekstili Bakım Rehberi | İpek Halı Yıkama Isparta",
    "description": "Halı yıkama fiyat hesabı, teslimat süresi, Atabey ve Eğirdir servis günleri; koltuk, stor perde ve yorgan yıkama hakkında pratik bilgiler.",
    "breadcrumb": "Bilgi merkezi"
  },
  "/cerez-politikasi": {
    "title": "Çerez ve Gizlilik Politikası | İpek Halı Yıkama",
    "description": "İpek Halı Yıkama web sitesinde kullanılan çerezler, Google reklam ölçümü, kişisel verilerin işlenmesi ve KVKK kapsamındaki haklarınız hakkında bilgilendirme.",
    "breadcrumb": "Çerez ve gizlilik politikası"
  },
  "/hakkimizda": {
    "title": "Hakkımızda | İpek Halı Yıkama Isparta",
    "description": "İpek Halı Yıkama, 2014’te Isparta’da kurulmuş aile işletmesidir. Halı, koltuk, perde ve yorgan yıkama hizmetlerimiz hakkında bilgi alın.",
    "breadcrumb": "Hakkımızda"
  },
  "/hali-yikama": {
    "title": "Isparta Halı Yıkama | 25 Fırçalı Sistem – İpek Halı Yıkama",
    "description": "İpek Halı Yıkama’da halılarınız önce çırpma makinesinden geçirilir, 25 fırçalı sistemde sıcak suyla yıkanır, 3 bar basınçla durulanır, kapalı odalarda kurutulur ve otomatik poşetlenir.",
    "breadcrumb": "Halı yıkama"
  },
  "/hizmet-bolgeleri": {
    "title": "Isparta Halı Yıkama Servis Bölgeleri | Atabey, Eğirdir — İpek",
    "description": "İpek Halı Yıkama servis bölgeleri: Isparta merkez, Atabey, Eğirdir ve çevre köyler. Atabey ve Eğirdir güzergâhı Salı ve Cuma. Alım ve teslimat ücretsiz.",
    "breadcrumb": "Servis bölgeleri"
  },
  "/iletisim": {
    "title": "İletişim | İpek Halı Yıkama Isparta · 0246 242 99 99",
    "description": "İpek Halı Yıkama Isparta iletişim bilgileri. Telefon: 0246 242 99 99. WhatsApp: 0542 247 18 36. Adres ve yol tarifi.",
    "breadcrumb": "İletişim"
  },
  "/koltuk-yikama": {
    "title": "Isparta Koltuk Yıkama | Yerinde Hizmet – İpek Halı Yıkama",
    "description": "Isparta’da koltuklarınızı evinizde yerinde yıkıyoruz. 3+3+1+1 koltuk takımı 2.500 TL; farklı takımlar için fiyat alın. Randevu: 0246 242 99 99.",
    "breadcrumb": "Koltuk yıkama"
  },
  "/nasil-yikanir": {
    "title": "7 Aşamalı Halı Yıkama Sistemi | İpek Halı Yıkama Isparta",
    "description": "Çırpma, 25 fırçalı sıcak su yıkama, 3 bar durulama, sıkma, kapalı kurutma, paketleme ve otomatik poşetleme. İpek Halı Yıkama’nın 7 aşamalı sistemi.",
    "breadcrumb": "Nasıl yıkanır?"
  },
  "/perde-yikama": {
    "title": "Isparta Stor Perde Yıkama | Makineli Sistem – İpek Halı Yıkama",
    "description": "Isparta’da stor perdeleriniz özel stor perde yıkama makinesinde temizlenir. Perde türü ve ölçüsüne göre fiyat için 0246 242 99 99.",
    "breadcrumb": "Stor perde yıkama"
  },
  "/sss": {
    "title": "Sık Sorulan Sorular | İpek Halı Yıkama Isparta",
    "description": "İpek Halı Yıkama’da halılar nasıl yıkanır, kaç günde teslim edilir, yerinde koltuk yıkama, stor perde, yorgan ve kredi kartıyla ödeme hakkında sorular.",
    "breadcrumb": "Sık sorulan sorular"
  },
  "/yorgan-battaniye-yikama": {
    "title": "Isparta Yorgan ve Battaniye Yıkama | İpek Halı Yıkama",
    "description": "Isparta’da yorgan ve battaniye yıkama. Ürün türüne uygun yıkama ve güncel fiyat bilgisi için İpek Halı Yıkama’yı arayın: 0246 242 99 99.",
    "breadcrumb": "Yorgan ve battaniye"
  },
} as const

export type PagePath = keyof typeof PAGES

const areaServed = [
  { '@type': 'City', name: 'Isparta' },
  { '@type': 'AdministrativeArea', name: 'Atabey' },
  { '@type': 'AdministrativeArea', name: 'Eğirdir' },
  ...['Büyük Gökçeli', 'Küçük Gökçeli', 'Büyük Hacılar', 'Küçük Hacılar', 'Ali Köyü', 'Harmanören', 'Kuleönü', 'İslamköy']
    .map(name => ({ '@type': 'Place', name })),
]

export const SITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': BUSINESS_ID,
      name: 'İpek Halı Yıkama',
      alternateName: 'İpek Halı ve Koltuk Yıkama',
      url: SITE_URL + '/',
      telephone: '+902462429999',
      description: 'Isparta’da halı, koltuk, stor perde, yorgan ve battaniye yıkama. Hizmet bölgelerinde ücretsiz halı alım ve teslimatı.',
      logo: { '@type': 'ImageObject', url: SITE_URL + '/ipek-logo.png' },
      image: [SHARE_IMAGE, SITE_URL + sitePhotos.facility.src],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sav Kasabası, Fatih Mahallesi, 528 Sokak No:5',
        addressLocality: 'Isparta Merkez',
        addressRegion: 'Isparta',
        addressCountry: 'TR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+905422471836',
        contactType: 'customer service',
        availableLanguage: 'Turkish',
        url: 'https://wa.me/905422471836',
      },
      paymentAccepted: 'Kredi kartı',
      hasMap: GOOGLE_PROFILE_URL,
      sameAs: [INSTAGRAM_URL, GOOGLE_PROFILE_URL],
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '21:00',
      }],
      areaServed,
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL + '/',
      name: 'İpek Halı Yıkama',
      alternateName: 'Isparta İpek Halı Yıkama',
      inLanguage: 'tr-TR',
      publisher: { '@id': BUSINESS_ID },
    },
  ],
}

type ServiceDetails = {
  name: string
  image?: string
  offer?: {
    '@type': string
    price?: string
    priceCurrency?: string
    description?: string
    priceSpecification?: Record<string, unknown>
  }
}

const SERVICES: Partial<Record<PagePath, ServiceDetails>> = {
  '/hali-yikama': {
    name: 'Isparta halı yıkama',
    image: sitePhotos.washing.src,
    offer: {
      '@type': 'Offer',
      description: 'Halı yıkama 130 TL/m². 6 m² ve altındaki siparişlerde minimum ücret 780 TL. Hizmet bölgelerinde alım ve teslimat ücretsizdir.',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '130',
        priceCurrency: 'TRY',
        referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitText: 'm²' },
      },
    },
  },
  '/koltuk-yikama': {
    name: 'Isparta koltuk yıkama',
    offer: {
      '@type': 'Offer',
      price: '2500',
      priceCurrency: 'TRY',
      description: '3+3+1+1 koltuk takımı, müşterinin evinde yerinde yıkama. Farklı koltuk takımları için fiyat ayrıca belirlenir.',
    },
  },
  '/perde-yikama': { name: 'Isparta stor perde yıkama' },
  '/yorgan-battaniye-yikama': { name: 'Isparta yorgan ve battaniye yıkama' },
}

// Escape HTML delimiters even when structured data is rendered in a script tag.
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')
}

export function jsonLdScript(value: unknown) {
  return { type: 'application/ld+json', children: serializeJsonLd(value) }
}

export function canonicalUrl(path: PagePath): string {
  return SITE_URL + path
}

export function createPageHead(path: PagePath) {
  const page = PAGES[path]
  const url = canonicalUrl(path)
  const service = SERVICES[path]
  const breadcrumbId = url + '#breadcrumb'
  const graph: Record<string, unknown>[] = [{
    '@type': path === '/iletisim' ? 'ContactPage' : path === '/hakkimizda' ? 'AboutPage' : path === '/blog' ? 'CollectionPage' : 'WebPage',
    '@id': url + '#webpage',
    url,
    name: page.title,
    description: page.description,
    inLanguage: 'tr-TR',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
    ...(path === '/' || path === '/iletisim' || path === '/hakkimizda'
      ? { mainEntity: { '@id': BUSINESS_ID } }
      : {}),
    ...(path !== '/' ? { breadcrumb: { '@id': breadcrumbId } } : {}),
    ...(service ? { mainEntity: { '@id': url + '#service' } } : {}),
  }]

  if (path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana sayfa', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: page.breadcrumb, item: url },
      ],
    })
  }

  if (service) {
    graph.push({
      '@type': 'Service',
      '@id': url + '#service',
      url,
      name: service.name,
      serviceType: service.name,
      description: page.description,
      provider: { '@id': BUSINESS_ID },
      ...(service.image ? { image: SITE_URL + service.image } : {}),
      areaServed,
      ...(service.offer ? { offers: { ...service.offer, url, seller: { '@id': BUSINESS_ID } } } : {}),
    })
  }

  return {
    links: [
      { rel: 'canonical', href: url },
      ...(path === '/' ? [{ rel: 'preload', as: 'image', type: 'image/webp', href: HERO_POSTER_WEBP_1440, imageSrcSet: HERO_POSTER_WEBP_800 + ' 800w, ' + HERO_POSTER_WEBP_1440 + ' 1440w', imageSizes: '100vw', fetchPriority: 'high' as const }] : []),
    ],
    meta: [
      { title: page.title },
      { name: 'description', content: page.description },
      { property: 'og:title', content: page.title },
      { property: 'og:description', content: page.description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: SHARE_IMAGE },
      { property: 'og:image:alt', content: 'İpek Halı Yıkama · Isparta' },
      { name: 'twitter:title', content: page.title },
      { name: 'twitter:description', content: page.description },
      { name: 'twitter:image', content: SHARE_IMAGE },
      { name: 'twitter:image:alt', content: 'İpek Halı Yıkama · Isparta' },
    ],
    scripts: [jsonLdScript({ '@context': 'https://schema.org', '@graph': graph })],
  }
}

export function createSitemap(): string {
  const urls = (Object.keys(PAGES) as PagePath[])
    .map(path => '  <url><loc>' + canonicalUrl(path) + '</loc></url>').join('\n')
  return '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + '\n</urlset>'
}
