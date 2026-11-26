// Google Ads dönüşüm takibi: telefon (tel:) ve WhatsApp tıklamaları.
// Statik cPanel çıktısında da çalışması için kod, React'e bağlı olmayan
// satır içi bir <head> betiğidir. Tek bir document dinleyicisi tüm linkleri kapsar.

export const GOOGLE_ADS_ID = 'AW-881695776'
export const ADS_CONVERSIONS = {
  phone: 'AW-881695776/ITYgCJqXzL8dEKC4tqQD',
  whatsapp: 'AW-881695776/KvyiCJ2XzL8dEKC4tqQD',
} as const

export const CONSENT_KEY = 'ipek-cerez-tercihi'

// gtag.js yalnız canlı alan adında yüklenir. Yerel/önizleme ortamında
// gtag yine tanımlanır ve olaylar dataLayer'a düşer; Google'a istek gitmez.
const PRODUCTION_HOST = /(^|\.)ispartaipekhaliyikama\.com$/

const inline = `(function(){
var w=window,d=document;
if(w.__ipekAds)return;w.__ipekAds=1;
w.dataLayer=w.dataLayer||[];
w.gtag=function(){w.dataLayer.push(arguments);};
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
var c=null;try{c=localStorage.getItem(${JSON.stringify(CONSENT_KEY)});}catch(e){}
if(c==='granted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}
gtag('js',new Date());
gtag('config',${JSON.stringify(GOOGLE_ADS_ID)});
if(${PRODUCTION_HOST}.test(location.hostname)){
var s=d.createElement('script');s.async=true;
s.src='https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}';
d.head.appendChild(s);
}
d.addEventListener('click',function(e){
var t=e.target,a=t&&t.closest&&t.closest('a[href]');
if(!a)return;
var h=a.getAttribute('href')||'';
if(h.indexOf('tel:')===0){gtag('event','conversion',{send_to:${JSON.stringify(ADS_CONVERSIONS.phone)}});}
else if(/(wa\\.me|api\\.whatsapp\\.com|whatsapp:\\/\\/)/.test(h)){gtag('event','conversion',{send_to:${JSON.stringify(ADS_CONVERSIONS.whatsapp)}});}
},true);
})();`

export const googleAdsScript = { children: inline }
