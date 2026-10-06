import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
import appMetaJson from "../app-meta.json";

declare const __HF_DESIGN_INSPECTOR__: boolean;

type AppMeta = {
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  favicon_url?: string | null;
  og_video_url?: string | null;
};

const appMeta = appMetaJson as AppMeta;

const DEFAULT_TITLE = "İpek Halı Yıkama — Isparta";
const DEFAULT_DESCRIPTION =
  "Isparta İpek Halı Yıkama: Halı yıkama 130 TL/m², ücretsiz alım-teslimat, 2–3 günde teslim. Koltuk ve perde yıkama. 0246 242 99 99";

const APP_HOST_ZONES = ["higgsfield.app", "higgsfield-dev.app"];

function toOwnAssetUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("/")) return value;
  try {
    const u = new URL(value);
    const isAppHost = APP_HOST_ZONES.some(
      (zone) => u.hostname === zone || u.hostname.endsWith(`.${zone}`),
    );
    if (isAppHost) return u.pathname + u.search;
    return value;
  } catch {
    return value;
  }
}

function buildHead(meta: AppMeta) {
  const title = meta.og_title ?? DEFAULT_TITLE;
  const description = meta.og_description ?? DEFAULT_DESCRIPTION;
  const ogImage = toOwnAssetUrl(meta.og_image_url);
  const favicon = toOwnAssetUrl(meta.favicon_url);

  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: ogImage ? "summary_large_image" : "summary" },
      ...(ogImage
        ? [
            { property: "og:image", content: ogImage },
            { name: "twitter:image", content: ogImage },
          ]
        : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous" as const,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
      ...(favicon ? [{ rel: "icon", href: favicon }] : []),
    ],
  };
}

function NotFoundComponent() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "var(--color-ipek-green-900)" }}>404</h1>
      <p style={{ fontSize: "1.125rem", color: "var(--color-ipek-warm-600)" }}>
        Aradığınız sayfa bulunamadı.
      </p>
      <a
        href="/"
        style={{
          display: "inline-block",
          padding: "0.75rem 2rem",
          backgroundColor: "var(--color-ipek-green-700)",
          color: "#fff",
          borderRadius: "0.5rem",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Ana Sayfaya Dön
      </a>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportHiggsfieldError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", color: "var(--color-ipek-green-900)" }}>
        Bir hata oluştu
      </h1>
      <p style={{ color: "var(--color-ipek-warm-600)" }}>
        Sayfayı yenilemeyi deneyin veya ana sayfaya dönün.
      </p>
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "var(--color-ipek-green-700)",
            color: "#fff",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Tekrar Dene
        </button>
        <a
          href="/"
          style={{
            padding: "0.75rem 1.5rem",
            border: "1px solid var(--color-ipek-green-700)",
            color: "var(--color-ipek-green-700)",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Ana Sayfa
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (!__HF_DESIGN_INSPECTOR__) return;
    void import("../module/design-inspector/runtime")
      .then(({ installHiggsfieldDesignInspector }) => {
        installHiggsfieldDesignInspector();
      })
      .catch((err) => {
        reportHiggsfieldError(
          err instanceof Error ? err : new Error("Failed to load design inspector"),
          { boundary: "higgsfield_design_inspector_import" },
        );
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
    </QueryClientProvider>
  );
}

/* ─── Site Layout: Header + Outlet + Footer + WhatsApp FAB ─── */
function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}

/* ─── HEADER ─── */
function SiteHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#fff",
        borderBottom: "1px solid var(--color-ipek-cream-200)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            fontWeight: 800,
            fontSize: "1.125rem",
            color: "var(--color-ipek-green-900)",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              backgroundColor: "var(--color-ipek-green-700)",
              color: "#fff",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: 800,
            }}
          >
            İ
          </span>
          <span>
            İpek Halı Yıkama
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
          className="ipek-desktop-nav"
        >
          <a href="/hali-yikama" style={{ color: "var(--color-ipek-warm-700)" }}>
            Halı Yıkama
          </a>
          <a href="/koltuk-yikama" style={{ color: "var(--color-ipek-warm-700)" }}>
            Koltuk Yıkama
          </a>
          <a href="/perde-yikama" style={{ color: "var(--color-ipek-warm-700)" }}>
            Perde Yıkama
          </a>
          <a href="/hizmet-bolgeleri" style={{ color: "var(--color-ipek-warm-700)" }}>
            Hizmet Bölgeleri
          </a>
          <a href="/sss" style={{ color: "var(--color-ipek-warm-700)" }}>
            SSS
          </a>
          <a href="/iletisim" style={{ color: "var(--color-ipek-warm-700)" }}>
            İletişim
          </a>
        </nav>

        {/* CTA */}
        <a
          href="tel:02462429999"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            padding: "0.5rem 1rem",
            backgroundColor: "var(--color-ipek-green-700)",
            color: "#fff",
            borderRadius: "0.5rem",
            fontWeight: 600,
            fontSize: "0.875rem",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
          className="ipek-header-cta"
          data-event="phone_click"
          data-event-category="header"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          0246 242 99 99
        </a>
      </div>

      {/* Responsive styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 768px) {
          .ipek-desktop-nav { display: none !important; }
          .ipek-header-cta { font-size: 0.75rem !important; padding: 0.375rem 0.75rem !important; }
        }
      `,
        }}
      />
    </header>
  );
}

/* ─── FOOTER ─── */
function SiteFooter() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-ipek-green-900)",
        color: "var(--color-ipek-green-100)",
        padding: "3rem 1rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Col 1 */}
        <div>
          <h3 style={{ color: "#fff", fontSize: "1.125rem", marginBottom: "0.75rem" }}>
            İpek Halı Yıkama
          </h3>
          <p style={{ fontSize: "0.875rem", opacity: 0.8, lineHeight: 1.7 }}>
            Isparta ve çevresinde profesyonel halı, koltuk ve perde yıkama hizmeti.
            Ücretsiz halı alım ve teslimat servisi.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "0.9375rem", marginBottom: "0.75rem" }}>
            Hizmetlerimiz
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem" }}>
            <li style={{ marginBottom: "0.375rem" }}>
              <a href="/hali-yikama" style={{ color: "var(--color-ipek-green-100)", opacity: 0.8 }}>
                Halı Yıkama
              </a>
            </li>
            <li style={{ marginBottom: "0.375rem" }}>
              <a
                href="/koltuk-yikama"
                style={{ color: "var(--color-ipek-green-100)", opacity: 0.8 }}
              >
                Koltuk Yıkama
              </a>
            </li>
            <li style={{ marginBottom: "0.375rem" }}>
              <a
                href="/perde-yikama"
                style={{ color: "var(--color-ipek-green-100)", opacity: 0.8 }}
              >
                Perde Yıkama
              </a>
            </li>
            <li>
              <a
                href="/hizmet-bolgeleri"
                style={{ color: "var(--color-ipek-green-100)", opacity: 0.8 }}
              >
                Hizmet Bölgeleri
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "0.9375rem", marginBottom: "0.75rem" }}>
            İletişim
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem" }}>
            <li style={{ marginBottom: "0.375rem", opacity: 0.8 }}>
              <a
                href="tel:02462429999"
                style={{ color: "var(--color-ipek-green-100)" }}
                data-event="phone_click"
                data-event-category="footer"
              >
                0246 242 99 99
              </a>
            </li>
            <li style={{ marginBottom: "0.375rem", opacity: 0.8 }}>
              <a href="/iletisim" style={{ color: "var(--color-ipek-green-100)" }}>
                İletişim Sayfası
              </a>
            </li>
            <li style={{ opacity: 0.8 }}>
              <a href="/sss" style={{ color: "var(--color-ipek-green-100)" }}>
                Sık Sorulan Sorular
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "0.9375rem", marginBottom: "0.75rem" }}>
            Bizi Takip Edin
          </h4>
          <a
            href="https://www.instagram.com/ispartaipekhaliyikama/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              color: "var(--color-ipek-green-100)",
              opacity: 0.8,
              fontSize: "0.875rem",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @ispartaipekhaliyikama
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "2rem auto 0",
          paddingTop: "1rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          textAlign: "center",
          fontSize: "0.75rem",
          opacity: 0.6,
        }}
      >
        &copy; {new Date().getFullYear()} İpek Halı Yıkama, Isparta. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

/* ─── FLOATING ACTIONS (Phone + WhatsApp) ─── */
function FloatingActions() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.25rem",
        right: "1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        zIndex: 40,
      }}
    >
      <a
        href="tel:02462429999"
        aria-label="Telefon ile arayın"
        data-event="phone_click"
        data-event-category="fab"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "52px",
          height: "52px",
          backgroundColor: "var(--color-ipek-green-700)",
          color: "#fff",
          borderRadius: "50%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          textDecoration: "none",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>
      <a
        href="https://wa.me/902462429999?text=Merhaba%2C%20hal%C4%B1%20y%C4%B1kama%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yazın"
        data-event="whatsapp_click"
        data-event-category="fab"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "52px",
          height: "52px",
          backgroundColor: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          textDecoration: "none",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  );
}
