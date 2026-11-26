import { useEffect, useState } from 'react'
import { CONSENT_KEY } from '../lib/google-ads'

type Choice = 'granted' | 'denied'

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

function readChoice(): Choice | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

// Google reklam çerezleri yalnız ziyaretçi kabul ederse açılır (Consent Mode v2).
// Varsayılan "reddedildi" durumu <head> içindeki Ads betiğinde ayarlanır.
export function ConsentBanner() {
  const [open, setOpen] = useState(false)
  useEffect(() => { setOpen(readChoice() === null) }, [])

  function choose(choice: Choice) {
    try { localStorage.setItem(CONSENT_KEY, choice) } catch { /* tercih bu oturumla sınırlı kalır */ }
    window.gtag?.('consent', 'update', {
      ad_storage: choice, ad_user_data: choice, ad_personalization: choice, analytics_storage: choice,
    })
    setOpen(false)
  }

  if (!open) return null
  return <div className="consent-banner" role="dialog" aria-live="polite" aria-label="Çerez tercihi">
    <p>Sitemizde, reklamlarımızın sonuçlarını ölçmek için Google çerezlerini yalnızca izin verirseniz kullanırız. Zorunlu olmayan çerezleri reddedebilirsiniz. <a href="/cerez-politikasi">Çerez ve gizlilik politikası</a></p>
    <div className="consent-actions">
      <button type="button" className="button button-quiet" onClick={() => choose('denied')}>Reddet</button>
      <button type="button" className="button button-primary" onClick={() => choose('granted')}>Kabul et</button>
    </div>
  </div>
}
