/* ============================================================
   EMERGENCYDENTISTCA.COM — SHARED HEADER + FOOTER
   Paste this <script src="_shared.js"></script> tag into every
   page just before </body> and it will inject the header/footer.
   ============================================================ */

const SITE = {
  phone: '1-800-000-0000',          // ← EDIT: your tracked call number
  phoneTel: '18000000000',          // ← EDIT: digits only for href="tel:"
  name: 'EmergencyDentistCA',
  tagline: 'We help Californians find emergency dentists fast — 24/7, no wait.',
};

/* ── HEADER ── */
document.body.insertAdjacentHTML('afterbegin', `
<header class="sh">
  <div class="sh-inner">
    <a href="/index.html" class="sh-logo">Emergency<span>Dentist</span>CA</a>
    <nav class="sh-nav">
      <a href="/index.html">Home</a>
      <a href="/services.html">Dental Services</a>
      <a href="/about.html">About Us</a>
    </nav>
    <a href="tel:${SITE.phoneTel}" class="sh-cta">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.12 6.12l1.27-.84a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      <span class="sh-cta-label">Call Now — Free</span>
      <span class="sh-cta-num">${SITE.phone}</span>
    </a>
    <button class="sh-hamburger" onclick="document.querySelector('.sh-nav').classList.toggle('sh-open')" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`);

/* ── FOOTER ── */
document.body.insertAdjacentHTML('beforeend', `
<footer class="sf">
  <div class="sf-inner">
    <div class="sf-brand">
      <div class="sf-logo">Emergency<span>Dentist</span>CA</div>
      <p class="sf-mission">We help Californians find emergency dentists fast — day or night, with or without insurance. No appointments needed. Just fast, real help when it hurts.</p>
      <a href="tel:${SITE.phoneTel}" class="sf-call">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.12 6.12l1.27-.84a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        ${SITE.phone}
      </a>
    </div>
    <div class="sf-col">
      <div class="sf-col-title">Find a Dentist</div>
      <a href="/index.html#finder">Dentist Finder</a>
      <a href="/index.html#estimator">Cost Estimator</a>
      <a href="/services.html">All Dental Services</a>
    </div>
    <div class="sf-col">
      <div class="sf-col-title">Company</div>
      <a href="/about.html">About Us</a>
      <a href="/privacy.html">Privacy Policy</a>
      <a href="/terms.html">Terms of Use</a>
    </div>
    <div class="sf-col">
      <div class="sf-col-title">Top Cities</div>
      <a href="/emergency-dentist-los-angeles/">Los Angeles</a>
      <a href="/emergency-dentist-san-diego/">San Diego</a>
      <a href="/emergency-dentist-san-francisco/">San Francisco</a>
      <a href="/emergency-dentist-fresno/">Fresno</a>
      <a href="/emergency-dentist-sacramento/">Sacramento</a>
      <a href="/emergency-dentist-bakersfield/">Bakersfield</a>
    </div>
  </div>
  <div class="sf-bottom">
    <div class="sf-copy">&copy; ${new Date().getFullYear()} EmergencyDentistCA.com · California Emergency Dental Resource · Not a dental office. We connect patients with providers.</div>
    <div class="sf-legal">
      <a href="/privacy.html">Privacy Policy</a>
      <a href="/terms.html">Terms of Use</a>
    </div>
  </div>
</footer>`);

/* ── SHARED STYLES (injected once) ── */
const css = `
/* reset nav offset for fixed header */
body { padding-top: 70px; }

/* ── SITE HEADER ── */
.sh { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: #0D1B2A; border-bottom: 1px solid rgba(255,255,255,0.08); }
.sh-inner { max-width: 1080px; margin: 0 auto; padding: 0 20px; height: 70px; display: flex; align-items: center; gap: 20px; }
.sh-logo { font-family: 'Fraunces', serif; font-weight: 600; font-size: 17px; color: #fff; text-decoration: none; white-space: nowrap; }
.sh-logo span { color: #E74C3C; }
.sh-nav { display: flex; gap: 4px; margin-left: 8px; }
.sh-nav a { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.65); text-decoration: none; padding: 6px 12px; border-radius: 6px; transition: all .15s; white-space: nowrap; }
.sh-nav a:hover { color: #fff; background: rgba(255,255,255,0.08); }
.sh-cta { margin-left: auto; display: flex; align-items: center; gap: 10px; background: #C0392B; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-family: 'DM Sans', sans-serif; transition: background .15s; white-space: nowrap; flex-shrink: 0; }
.sh-cta:hover { background: #E74C3C; }
.sh-cta-label { font-size: 11px; font-weight: 500; opacity: 0.85; letter-spacing: 0.04em; text-transform: uppercase; }
.sh-cta-num { font-size: 15px; font-weight: 700; letter-spacing: -0.3px; }
.sh-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 8px; margin-left: 8px; }
.sh-hamburger span { display: block; width: 22px; height: 2px; background: rgba(255,255,255,0.7); border-radius: 2px; }
@media (max-width: 720px) {
  .sh-nav { display: none; position: absolute; top: 70px; left: 0; right: 0; background: #0D1B2A; flex-direction: column; padding: 12px 20px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); }
  .sh-nav.sh-open { display: flex; }
  .sh-cta-label { display: none; }
  .sh-cta-num { font-size: 13px; }
  .sh-hamburger { display: flex; }
}

/* ── SITE FOOTER ── */
.sf { background: #0D1B2A; color: rgba(255,255,255,0.7); margin-top: 80px; }
.sf-inner { max-width: 1080px; margin: 0 auto; padding: 56px 20px 40px; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
@media (max-width: 760px) { .sf-inner { grid-template-columns: 1fr 1fr; gap: 32px; } }
@media (max-width: 480px) { .sf-inner { grid-template-columns: 1fr; } }
.sf-logo { font-family: 'Fraunces', serif; font-weight: 600; font-size: 20px; color: #fff; margin-bottom: 14px; }
.sf-logo span { color: #E74C3C; }
.sf-mission { font-size: 13px; line-height: 1.7; color: rgba(255,255,255,0.55); margin-bottom: 18px; max-width: 280px; }
.sf-call { display: inline-flex; align-items: center; gap: 8px; background: #C0392B; color: #fff; text-decoration: none; font-size: 14px; font-weight: 700; padding: 10px 18px; border-radius: 8px; transition: background .15s; letter-spacing: -0.2px; }
.sf-call:hover { background: #E74C3C; }
.sf-col-title { font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.4); margin-bottom: 14px; }
.sf-col a { display: block; font-size: 13px; color: rgba(255,255,255,0.6); text-decoration: none; margin-bottom: 9px; transition: color .15s; }
.sf-col a:hover { color: #fff; }
.sf-bottom { max-width: 1080px; margin: 0 auto; padding: 20px 20px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
.sf-copy { font-size: 11px; color: rgba(255,255,255,0.3); line-height: 1.5; }
.sf-legal { display: flex; gap: 16px; }
.sf-legal a { font-size: 11px; color: rgba(255,255,255,0.4); text-decoration: none; }
.sf-legal a:hover { color: rgba(255,255,255,0.7); }
`;
const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

/* ── ACTIVE NAV HIGHLIGHT ── */
const cur = window.location.pathname.replace(/\/$/, '') || '/index.html';
document.querySelectorAll('.sh-nav a').forEach(a => {
  if (a.getAttribute('href') === cur || (cur.endsWith('index.html') && a.getAttribute('href') === '/index.html')) {
    a.style.color = '#fff';
    a.style.background = 'rgba(255,255,255,0.1)';
  }
});
