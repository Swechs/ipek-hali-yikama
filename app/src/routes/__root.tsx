import { SITE_URL, SITE_SCHEMA, jsonLdScript } from '../lib/seo'
import { googleAdsScript } from '../lib/google-ads'
import { ConsentBanner } from '../components/consent-banner'
import {
  Outlet,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
import appMetaJson from "../app-meta.json";

declare const __HF_DESIGN_INSPECTOR__: boolean;

type AppMeta = { og_title?: string | null; og_description?: string | null; og_image_url?: string | null; favicon_url?: string | null; og_video_url?: string | null };
const appMeta = appMetaJson as AppMeta;

const APP_HOST_ZONES = ["higgsfield.app", "higgsfield-dev.app"];
function toOwnAssetUrl(v: string | null | undefined): string | null {
  if (!v) return null;
  if (v.startsWith("/")) return v;
  try { const u = new URL(v); return APP_HOST_ZONES.some(z => u.hostname === z || u.hostname.endsWith(`.${z}`)) ? u.pathname + u.search : v; } catch { return v; }
}

// Yazı tipi CSS'i sayfanın ilk çizimini bekletmesin diye betikle eklenir (display=swap).
const FONT_CSS = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500;600&display=swap";
const fontLoader = { children: '(function(){var l=document.createElement("link");l.rel="stylesheet";l.href=' + JSON.stringify(FONT_CSS) + ';document.head.appendChild(l)})();' };

function buildHead(m: AppMeta) {
  const t = m.og_title ?? "İpek Halı Yıkama — Isparta";
  const d = m.og_description ?? "Isparta İpek Halı Yıkama: Halı yıkama 130 TL/m², ücretsiz alım-teslimat. 0246 242 99 99";
  const img = m.og_image_url ? new URL(m.og_image_url, SITE_URL).href : "https://www.ispartaipekhaliyikama.com/ipek-logo.png";
  const fav = toOwnAssetUrl(m.favicon_url);
  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: t },
      { name: "description", content: d },
      { name: "theme-color", content: "#CC50AA" },

      { property: "og:locale", content: "tr_TR" },
      { property: "og:title", content: t },
      { property: "og:description", content: d },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "İpek Halı Yıkama" },
      ...(img ? [{ property: "og:image:alt", content: "İpek Halı Yıkama için marka görseli" }] : []),

      { name: "twitter:card", content: img ? "summary_large_image" : "summary" },
      ...(img ? [{ property: "og:image", content: img }, { name: "twitter:image", content: img }] : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
      { rel: "preload", as: "style", href: FONT_CSS },
      ...(fav ? [{ rel: "icon", type: "image/svg+xml", href: fav }] : [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }]),
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [fontLoader, googleAdsScript, jsonLdScript(SITE_SCHEMA)],
  };
}

export const Route = createRootRoute({
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => (
    <div className="ipek-section" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <div style={{ fontSize: "5rem", fontWeight: 800, color: "var(--g5)", marginBottom: "0.5rem" }}>404</div>
      <p style={{ fontSize: "1.125rem", color: "var(--t5)", marginBottom: "1.5rem" }}>Aradığınız sayfa bulunamadı.</p>
      <a href="/" className="ipek-btn ipek-btn-primary">Ana Sayfaya Dön</a>
    </div>
  ),
  errorComponent: ({ error, reset }: { error: unknown; reset: () => void }) => {
    const router = useRouter();
    useEffect(() => { reportHiggsfieldError(error instanceof Error ? error : new Error(String(error)), { boundary: "root" }); }, [error]);
    return (
      <div className="ipek-section" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>Bir hata oluştu</h1>
        <p style={{ color: "var(--t5)", marginBottom: "1.5rem" }}>Sayfayı yenilemeyi deneyin.</p>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button className="ipek-btn ipek-btn-primary" onClick={() => { router.invalidate(); reset(); }}>Tekrar Dene</button>
          <a href="/" className="ipek-btn ipek-btn-outline">Ana Sayfa</a>
        </div>
      </div>
    );
  },
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  useEffect(() => {
    if (!__HF_DESIGN_INSPECTOR__) return;
    void import("../module/design-inspector/runtime").then(({ installHiggsfieldDesignInspector }) => installHiggsfieldDesignInspector()).catch(e => reportHiggsfieldError(e instanceof Error ? e : new Error("inspector"), { boundary: "inspector" }));
  }, []);
  return <SiteLayout />;
}

/* ═══════════════════════ LAYOUT ═══════════════════════ */

function SiteLayout() {
  useEffect(() => {
    // Only update the document-level progress value. Mutating classes on
    // streamed route children can race React's selective hydration.
    const root = document.documentElement;
    const update = () => {
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--page-progress", max > 0 ? String(window.scrollY / max) : "0");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      root.style.removeProperty("--page-progress");
    };
  }, []);
  return <><div className="silk-progress" aria-hidden="true"/><Header/><main><Outlet/></main><Footer/><Fabs/><ConsentBanner/></>;
}
/* ─── PHONE ICON ─── */
const PhoneIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const WaIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
const MenuIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const CloseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

const NAV=[{href:'/hali-yikama',label:'Halı Yıkama'},{href:'/koltuk-yikama',label:'Koltuk Yıkama'},{href:'/perde-yikama',label:'Stor Perde Yıkama'},{href:'/yorgan-battaniye-yikama',label:'Yorgan ve Battaniye'},{href:'/hizmet-bolgeleri',label:'Servis bölgeleri'},{href:'/sss',label:'SSS'}];
function Header(){
const [open,setOpen]=useState(false);
const toggle=useRef<HTMLButtonElement>(null);
useEffect(()=>{
  if(!open)return;
  const body=document.body, y=window.scrollY, toggleButton=toggle.current;
  const previous={position:body.style.position,top:body.style.top,width:body.style.width,overflow:body.style.overflow};
  body.style.position='fixed';body.style.top=`-${y}px`;body.style.width='100%';body.style.overflow='hidden';body.dataset.menuOpen='true';
  const menu=document.getElementById('ipek-mobile-menu');
  const first=menu?.querySelector<HTMLAnchorElement>('a');first?.focus({preventScroll:true});
  const keys=(event:KeyboardEvent)=>{
    if(event.key==='Escape'){setOpen(false);return;}
    if(event.key!=='Tab')return;
    const nodes=[toggle.current,...Array.from(menu?.querySelectorAll<HTMLElement>('a[href],button')??[])].filter((n):n is HTMLElement=>!!n);
    const first=nodes[0],last=nodes[nodes.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus()}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus()}
  };
  const desktop=window.matchMedia('(min-width:851px)');
  const resize=()=>{if(desktop.matches)setOpen(false)};
  document.addEventListener('keydown',keys);desktop.addEventListener('change',resize);
  return()=>{Object.assign(body.style,previous);delete body.dataset.menuOpen;window.scrollTo({top:y,behavior:'instant'});document.removeEventListener('keydown',keys);desktop.removeEventListener('change',resize);toggleButton?.focus({preventScroll:true})};
},[open]);
return <header className="ipek-header"><div className="ipek-header-inner"><a href="/" className="ipek-logo" aria-label="İpek Halı Yıkama ana sayfa"><img src="/ipek-logo.webp" width="130" height="62" alt="Isparta İpek Halı Yıkama"/></a><nav className="ipek-nav" aria-label="Ana gezinme">{NAV.map(n=><a key={n.href} href={n.href}>{n.label}</a>)}</nav><a href="tel:02462429999" className="ipek-btn ipek-btn-primary ipek-header-cta-desktop"><PhoneIcon/>0246 242 99 99</a><button ref={toggle} className="ipek-mobile-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Menüyü kapat':'Menüyü aç'} aria-expanded={open} aria-controls="ipek-mobile-menu">{open?<CloseIcon/>:<MenuIcon/>}</button></div><nav id="ipek-mobile-menu" className={`ipek-mobile-menu ${open?'open':''}`} aria-label="Mobil gezinme">{NAV.map(n=><a key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}</a>)}<a href="/hakkimizda" onClick={()=>setOpen(false)}>Hakkımızda</a><a href="/nasil-yikanir" onClick={()=>setOpen(false)}>Yıkama süreci</a><a href="/blog" onClick={()=>setOpen(false)}>Bilgi merkezi</a><div className="mobile-menu-actions"><a href="tel:02462429999" className="ipek-btn ipek-btn-primary">Ara</a><a href="https://wa.me/905422471836?text=Merhaba" className="ipek-btn ipek-btn-wa">WhatsApp</a></div></nav></header>}
function Footer(){return <footer className="ipek-footer"><div className="footer-grid"><div className="footer-brand"><a href="/" aria-label="İpek Halı Yıkama ana sayfa"><img src="/ipek-logo.webp" width="132" height="63" alt="İpek Halı Yıkama"/></a><p>Isparta’da halı, koltuk, perde ve yorgan yıkama. Halı alım ve teslimat servisi ücretsizdir.</p></div><div className="footer-col"><h4>Hizmetler</h4><ul><li><a href="/hali-yikama">Halı yıkama</a></li><li><a href="/koltuk-yikama">Koltuk yıkama</a></li><li><a href="/perde-yikama">Stor perde yıkama</a></li><li><a href="/yorgan-battaniye-yikama">Yorgan ve battaniye</a></li></ul></div><div className="footer-col"><h4>İpek’i tanıyın</h4><ul><li><a href="/hakkimizda">Hakkımızda</a></li><li><a href="/nasil-yikanir">Yıkama süreci</a></li><li><a href="/hizmet-bolgeleri">Servis bölgeleri</a></li><li><a href="/sss">Sık sorulanlar</a></li><li><a href="/blog">Bilgi merkezi</a></li></ul></div><div className="footer-col"><h4>İletişim</h4><ul><li><a href="tel:02462429999">0246 242 99 99</a></li><li><a href="https://wa.me/905422471836?text=Merhaba" target="_blank" rel="noreferrer">WhatsApp’tan yazın</a></li><li><a href="/iletisim">İletişim sayfası</a></li><li><a href="https://www.instagram.com/ispartaipekhaliyikama/" target="_blank" rel="noreferrer">Instagram ↗</a></li><li><a href="https://share.google/LALgrnjImNq55lYIv" target="_blank" rel="noreferrer">Google İşletme Profili ↗</a></li></ul></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} İpek Halı Yıkama · Isparta</span><a href="/cerez-politikasi">Çerez ve gizlilik politikası</a><span>Halıya özen, eve ferahlık.</span></div><div className="motion-control-footer"><MotionControl/></div></footer>}
function Fabs(){return <div className="ipek-fabs" aria-label="Hızlı iletişim"><a href="tel:02462429999" className="ipek-fab ipek-fab-phone" aria-label="Telefonla ara"><PhoneIcon/><span>Ara</span></a><a href="https://wa.me/905422471836?text=Merhaba%2C%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer" className="ipek-fab ipek-fab-wa" aria-label="WhatsApp'tan yaz"><WaIcon/><span>WhatsApp</span></a></div>}

function MotionControl(){const[paused,setPaused]=useState(false);useEffect(()=>{const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;setPaused(reduced);if(reduced)document.documentElement.dataset.motion='paused'},[]);function toggle(){setPaused(v=>{const next=!v;if(next)document.documentElement.dataset.motion='paused';else delete document.documentElement.dataset.motion;return next})}return <button className="motion-toggle" type="button" aria-pressed={paused} onClick={toggle}>{paused?'Hareketi oynat':'Hareketi durdur'}</button>}
