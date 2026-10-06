import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

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

function buildHead(m: AppMeta) {
  const t = m.og_title ?? "İpek Halı Yıkama — Isparta";
  const d = m.og_description ?? "Isparta İpek Halı Yıkama: Halı yıkama 130 TL/m², ücretsiz alım-teslimat. 0246 242 99 99";
  const img = toOwnAssetUrl(m.og_image_url);
  const fav = toOwnAssetUrl(m.favicon_url);
  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: t },
      { name: "description", content: d },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:title", content: t },
      { property: "og:description", content: d },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: img ? "summary_large_image" : "summary" },
      ...(img ? [{ property: "og:image", content: img }, { name: "twitter:image", content: img }] : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
      ...(fav ? [{ rel: "icon", href: fav }] : []),
    ],
  };
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
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
  errorComponent: ({ error, reset }: { error: Error; reset: () => void }) => {
    const router = useRouter();
    useEffect(() => { reportHiggsfieldError(error, { boundary: "root" }); }, [error]);
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
  const { queryClient } = Route.useRouteContext();
  useEffect(() => {
    if (!__HF_DESIGN_INSPECTOR__) return;
    void import("../module/design-inspector/runtime").then(({ installHiggsfieldDesignInspector }) => installHiggsfieldDesignInspector()).catch(e => reportHiggsfieldError(e instanceof Error ? e : new Error("inspector"), { boundary: "inspector" }));
  }, []);
  return <QueryClientProvider client={queryClient}><SiteLayout /></QueryClientProvider>;
}

/* ═══════════════════════ LAYOUT ═══════════════════════ */

function SiteLayout() {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
      <Fabs />
    </>
  );
}

/* ─── PHONE ICON ─── */
const PhoneIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const WaIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
const MenuIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const CloseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

const NAV = [
  { href: "/hali-yikama", label: "Halı Yıkama" },
  { href: "/koltuk-yikama", label: "Koltuk Yıkama" },
  { href: "/perde-yikama", label: "Perde Yıkama" },
  { href: "/hizmet-bolgeleri", label: "Hizmet Bölgeleri" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="ipek-header ipek-glass" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="ipek-header-inner">
        <a href="/" className="ipek-logo">
          <div className="ipek-logo-mark">İ</div>
          <span>İpek Halı Yıkama</span>
        </a>
        <nav className="ipek-nav">
          {NAV.map(n => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
        <a href="tel:02462429999" className="ipek-btn ipek-btn-primary ipek-header-cta-desktop" style={{ padding: "0.625rem 1.25rem", fontSize: "0.8125rem" }}>
          <PhoneIcon /> 0246 242 99 99
        </a>
        <button className="ipek-mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menü">
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div className={`ipek-mobile-menu ${open ? "open" : ""}`}>
        {NAV.map(n => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
        <div style={{ padding: "1rem 1.25rem", display: "flex", gap: "0.75rem", marginTop: "auto" }}>
          <a href="tel:02462429999" className="ipek-btn ipek-btn-primary" style={{ flex: 1, justifyContent: "center" }}>
            <PhoneIcon /> Ara
          </a>
          <a href="https://wa.me/902462429999?text=Merhaba%2C%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="ipek-btn ipek-btn-wa" style={{ flex: 1, justifyContent: "center" }}>
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="ipek-footer" style={{ padding: "4rem 1.25rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem" }}>
        <div>
          <h3 style={{ fontSize: "1.125rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: "32px", height: "32px", background: "linear-gradient(135deg, var(--g5), var(--g3))", borderRadius: "0.5rem", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.875rem", fontWeight: 800 }}>İ</span>
            İpek Halı Yıkama
          </h3>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.7, opacity: 0.8 }}>
            Isparta ve çevresinde profesyonel halı, koltuk ve perde yıkama hizmeti. Ücretsiz halı alım ve teslimat servisi.
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem", opacity: 0.6 }}>Hizmetler</h4>
          <ul style={{ listStyle: "none", fontSize: "0.9375rem", lineHeight: 2.2 }}>
            <li><a href="/hali-yikama">Halı Yıkama</a></li>
            <li><a href="/koltuk-yikama">Koltuk Yıkama</a></li>
            <li><a href="/perde-yikama">Perde Yıkama</a></li>
            <li><a href="/hizmet-bolgeleri">Hizmet Bölgeleri</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem", opacity: 0.6 }}>İletişim</h4>
          <ul style={{ listStyle: "none", fontSize: "0.9375rem", lineHeight: 2.2 }}>
            <li><a href="tel:02462429999">0246 242 99 99</a></li>
            <li><a href="/iletisim">İletişim Sayfası</a></li>
            <li><a href="/sss">Sık Sorulan Sorular</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem", opacity: 0.6 }}>Takip Edin</h4>
          <a href="https://www.instagram.com/ispartaipekhaliyikama/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            @ispartaipekhaliyikama
          </a>
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "2.5rem auto 0", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.08)", textAlign: "center", fontSize: "0.75rem", opacity: 0.5 }}>
        &copy; {new Date().getFullYear()} İpek Halı Yıkama, Isparta. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

function Fabs() {
  return (
    <div className="ipek-fabs">
      <a href="tel:02462429999" className="ipek-fab ipek-fab-phone" aria-label="Ara"><PhoneIcon /></a>
      <a href="https://wa.me/902462429999?text=Merhaba%2C%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="ipek-fab ipek-fab-wa" aria-label="WhatsApp"><WaIcon /></a>
    </div>
  );
}
