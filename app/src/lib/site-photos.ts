export type SitePhoto = {
  src: string
  alt: string
  width: number
  height: number
}

// Selected from the owner's on-site photographs; each key describes what is visible.
export const sitePhotos = {
  "van": {"src":"/images/isparta-ipek-servis-araci.jpg","alt":"İpek Halı Yıkama’nın kapıdan alım ve teslimatta kullanılan servis aracı","width":1440,"height":810},
  "washing": {
    "src": "/images/isparta-ipek-hali-yikama-hatti.jpg",
    "alt": "İpek Halı Yıkama tesisinde otomatik halı yıkama hattı",
    "width": 1440,
    "height": 809
  },
  "washingDetail": {
    "src": "/images/isparta-ipek-hali-yikama-fircalari.jpg",
    "alt": "İpek tesisinde halıyı yıkayan fırçalar ve durulama hattı",
    "width": 1440,
    "height": 809
  },
  "spinning": {
    "src": "/images/isparta-ipek-hali-sikma.jpg",
    "alt": "İpek Halı Yıkama tesisindeki halı sıkma makineleri",
    "width": 1440,
    "height": 810
  },
  "drying": {
    "src": "/images/isparta-ipek-hali-kurutma.jpg",
    "alt": "İpek Halı Yıkama tesisinde halıların kurutulduğu bölüm",
    "width": 1440,
    "height": 809
  },
  "packing": {
    "src": "/images/isparta-ipek-hali-paketleme.jpg",
    "alt": "İpek tesisinde temiz halının paketlendiği konveyör",
    "width": 1440,
    "height": 810
  },
  "facility": {
    "src": "/images/isparta-ipek-yikama-tesisi.jpg",
    "alt": "İpek Halı Yıkama tesisinin yıkama alanından genel görünüm",
    "width": 1440,
    "height": 810
  }
} satisfies Record<string, SitePhoto>

export function servicePhoto(title: string): SitePhoto | undefined {
  const name = title.toLocaleLowerCase('tr-TR')
  if (/koltuk|perde|yorgan|battaniye/.test(name)) return undefined
  return name.includes('halı') ? sitePhotos.washing : undefined
}
