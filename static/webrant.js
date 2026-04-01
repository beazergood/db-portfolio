var WebRant=(()=>{var B=Object.defineProperty;var oe=Object.getOwnPropertyDescriptor;var ae=Object.getOwnPropertyNames;var ne=Object.prototype.hasOwnProperty;var ie=(t,r)=>{for(var a in r)B(t,a,{get:r[a],enumerable:!0})},se=(t,r,a,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of ae(r))!ne.call(t,s)&&s!==a&&B(t,s,{get:()=>r[s],enumerable:!(i=oe(r,s))||i.enumerable});return t};var le=t=>se(B({},"__esModule",{value:!0}),t);var ye={};ie(ye,{default:()=>J});function ce(){let t=document.title||"",r=document.querySelector('meta[name="description"]')?.content||"",a=document.querySelector('meta[property="og:site_name"]')?.content||"",i=document.querySelector("h1")?.textContent?.trim()||"",s=a||t.split(/[|\u2013\u2014\-–—]/)[0].trim()||i.split(/[|\u2013\u2014\-–—]/)[0].trim()||"this website",u=s.split(/\s+/),d=u.slice(0,2).join(" ").slice(0,20),o=u.slice(0,2).map(n=>n[0]?.toUpperCase()||"").join(""),m=[...document.querySelectorAll("h1, h2, h3")].slice(0,6).map(n=>n.textContent?.trim()).filter(Boolean),f=r||m.join(". ")||"amazing content";return{siteName:s,shortName:d,initials:o,topic:f,headings:m}}var de=`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700&family=Playfair+Display:wght@700;900&family=Space+Mono&display=swap');

:root {
  --wr-blue: #1a56db;
  --wr-dark: #0f172a;
  --wr-gray: #64748b;
  --wr-green: #16a34a;
  --wr-red: #dc2626;
  --wr-orange: #f59e0b;
  --wr-purple: #7c3aed;
  --wr-shadow: 0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.05);
  --wr-radius: 16px;
  --wr-font: 'DM Sans', system-ui, -apple-system, sans-serif;
  --wr-font-display: 'Playfair Display', Georgia, serif;
  --wr-font-mono: 'Space Mono', ui-monospace, monospace;
}

/* ===== SHARED ===== */
.wr-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100010;
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s, visibility .3s;
  font-family: var(--wr-font);
}

.wr-overlay.wr-open {
  opacity: 1;
  visibility: visible;
}

.wr-modal {
  background: white;
  border-radius: 24px;
  padding: 48px;
  text-align: center;
  max-width: 520px;
  width: 90%;
  position: relative;
  box-shadow: var(--wr-shadow);
  font-family: var(--wr-font);
  color: var(--wr-dark);
  line-height: 1.6;
  animation: wr-fadeUp .35s ease-out;
}

@keyframes wr-fadeUp {
  from { opacity: 0; transform: translateY(16px) scale(.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.wr-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: #f1f5f9;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: var(--wr-gray);
  transition: background .2s;
  font-family: var(--wr-font);
}

.wr-close:hover { background: #e2e8f0; }

.wr-title {
  font-family: var(--wr-font-display);
  font-size: 1.8rem;
  font-weight: 900;
  margin: 0 0 8px;
}

.wr-subtitle {
  color: var(--wr-gray);
  font-size: .9rem;
  margin: 0 0 24px;
}

.wr-btn-primary {
  display: block;
  width: 100%;
  padding: 16px 48px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  font-family: var(--wr-font);
  border: none;
  transition: transform .2s;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.wr-btn-primary:hover { transform: scale(1.03); }

.wr-btn-ghost {
  display: block;
  width: 100%;
  background: none;
  border: none;
  color: #cbd5e1;
  font-size: .65rem;
  cursor: pointer;
  font-family: var(--wr-font);
  margin-top: 12px;
  padding: 8px;
}

.wr-big-emoji {
  font-size: 4rem;
  margin-bottom: 16px;
  line-height: 1;
}

/* ===== COOKIE BANNER ===== */
#wr-cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 100020;
  padding: 40px;
  box-shadow: 0 -10px 60px rgba(0,0,0,0.2);
  transform: translateY(100%);
  transition: transform .5s cubic-bezier(.16,1,.3,1);
  border-top: 3px solid var(--wr-blue);
  font-family: var(--wr-font);
}

#wr-cookie-banner[aria-hidden="false"] {
  transform: translateY(0);
}

#wr-cookie-banner h2 {
  font-family: var(--wr-font-display);
  font-size: 1.8rem;
  margin: 0 0 12px;
}

#wr-cookie-banner .wr-cookie-text {
  color: var(--wr-gray);
  max-width: 700px;
  margin-bottom: 24px;
  font-size: .95rem;
  line-height: 1.7;
}

.wr-cookie-buttons {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.wr-cookie-buttons .wr-accept {
  background: var(--wr-green);
  color: white;
  border: none;
  padding: 16px 48px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  font-family: var(--wr-font);
  transition: transform .2s;
  box-shadow: 0 4px 20px rgba(22,163,74,0.3);
}

.wr-cookie-buttons .wr-accept:hover { transform: scale(1.05); }

.wr-cookie-buttons .wr-manage {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: .7rem;
  cursor: pointer;
  font-family: var(--wr-font);
}

.wr-cookie-buttons .wr-reject {
  background: none;
  border: none;
  color: #cbd5e1;
  font-size: .55rem;
  cursor: pointer;
  font-family: var(--wr-font);
  opacity: .3;
}

/* ===== COOKIE PREFS DIALOG ===== */
#wr-cookie-prefs .wr-modal {
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  text-align: left;
}

.wr-cookie-cat {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid #f1f5f9;
}

.wr-cookie-cat label {
  font-size: .85rem;
  font-weight: 500;
  flex: 1;
  cursor: pointer;
}

.wr-cookie-cat small {
  color: #94a3b8;
  font-size: .7rem;
  display: block;
  font-weight: 400;
  margin-top: 2px;
}

.wr-toggle {
  position: relative;
  width: 44px;
  height: 24px;
  flex-shrink: 0;
}

.wr-toggle input { opacity: 0; width: 0; height: 0; position: absolute; }

.wr-toggle .wr-slider {
  position: absolute;
  inset: 0;
  background: #cbd5e1;
  border-radius: 24px;
  cursor: pointer;
  transition: background .3s;
}

.wr-toggle .wr-slider::before {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  top: 3px;
  left: 3px;
  transition: transform .3s;
}

.wr-toggle input:checked + .wr-slider { background: var(--wr-blue); }
.wr-toggle input:checked + .wr-slider::before { transform: translateX(20px); }

/* ===== NEWSLETTER (aside) ===== */
#wr-newsletter {
  position: fixed;
  top: 50%;
  left: -420px;
  transform: translateY(-50%);
  width: 400px;
  background: white;
  border-radius: 0 20px 20px 0;
  box-shadow: var(--wr-shadow);
  z-index: 100005;
  transition: left .6s cubic-bezier(.16,1,.3,1);
  overflow: hidden;
  font-family: var(--wr-font);
}

#wr-newsletter[aria-hidden="false"] { left: 0; }

.wr-newsletter-header {
  background: linear-gradient(135deg, #7c3aed, #db2777);
  padding: 32px;
  color: white;
}

.wr-newsletter-header h3 {
  font-family: var(--wr-font-display);
  font-size: 1.5rem;
  margin: 8px 0;
}

.wr-newsletter-body {
  padding: 32px;
}

.wr-newsletter-body input {
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-family: var(--wr-font);
  font-size: .95rem;
  margin-bottom: 12px;
  transition: border-color .2s;
  box-sizing: border-box;
}

.wr-newsletter-body input:focus {
  outline: none;
  border-color: #7c3aed;
}

.wr-newsletter-body .wr-subscribe {
  width: 100%;
  background: linear-gradient(135deg, #7c3aed, #db2777);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  font-family: var(--wr-font);
}

.wr-newsletter-dismiss {
  display: block;
  text-align: center;
  margin-top: 16px;
  color: #94a3b8;
  font-size: .75rem;
  cursor: pointer;
  border: none;
  background: none;
  font-family: var(--wr-font);
  text-decoration: underline;
}

.wr-badge-new {
  background: var(--wr-red);
  color: white;
  font-size: .6rem;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .5px;
  display: inline-block;
}

/* ===== SPIN THE WHEEL ===== */
#wr-spin .wr-modal {
  background: linear-gradient(135deg, #fbbf24, #f97316, #ef4444);
  color: white;
  animation: wr-fadeUp .35s ease-out, wr-spinPulse 2s infinite .35s;
}

@keyframes wr-spinPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.4), var(--wr-shadow); }
  50% { box-shadow: 0 0 0 20px rgba(249,115,22,0), var(--wr-shadow); }
}

.wr-wheel {
  width: 200px;
  height: 200px;
  margin: 0 auto 24px;
  border-radius: 50%;
  border: 6px solid white;
  background: conic-gradient(
    #ef4444 0deg 45deg, #f97316 45deg 90deg,
    #fbbf24 90deg 135deg, #22c55e 135deg 180deg,
    #3b82f6 180deg 225deg, #8b5cf6 225deg 270deg,
    #ec4899 270deg 315deg, #06b6d4 315deg 360deg
  );
  position: relative;
  box-shadow: 0 0 30px rgba(0,0,0,0.2);
  transition: transform 4s cubic-bezier(.17,.67,.12,.99);
}

.wr-wheel::after {
  content: '\\25BC';
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.wr-spin-timer {
  font-family: var(--wr-font-mono);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.wr-btn-spin {
  background: white;
  color: #ef4444;
  border: none;
  padding: 16px 48px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  font-family: var(--wr-font);
  transition: transform .2s;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.wr-btn-spin:hover { transform: scale(1.08); }

/* ===== CHAT WIDGET ===== */
#wr-chat {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100008;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .4s, transform .4s;
  font-family: var(--wr-font);
}

#wr-chat[aria-hidden="false"] {
  opacity: 1;
  transform: translateY(0);
}

.wr-chat-bubble {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(29,78,216,0.4);
  font-size: 1.6rem;
  animation: wr-chatBounce 2s infinite;
  position: relative;
  border: none;
}

@keyframes wr-chatBounce {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-8px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(-4px); }
}

.wr-chat-notif {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 22px;
  height: 22px;
  background: var(--wr-red);
  border-radius: 50%;
  color: white;
  font-size: .7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
}

.wr-chat-window {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 340px;
  background: white;
  border-radius: 20px;
  box-shadow: var(--wr-shadow);
  overflow: hidden;
  display: none;
}

.wr-chat-window[aria-expanded="true"] { display: block; }

.wr-chat-head {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
  gap: 12px;
}

.wr-chat-avatar {
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.wr-chat-head h4 { font-size: .95rem; margin: 0; }
.wr-chat-head span { font-size: .75rem; opacity: .8; }

.wr-chat-online {
  width: 8px; height: 8px; background: #4ade80;
  border-radius: 50%; display: inline-block; margin-right: 4px;
}

.wr-chat-msgs { padding: 20px; min-height: 200px; }

.wr-chat-msg {
  background: #f1f5f9;
  padding: 12px 16px;
  border-radius: 16px 16px 16px 4px;
  font-size: .9rem;
  margin-bottom: 8px;
  color: var(--wr-dark);
  max-width: 85%;
}

.wr-chat-typing {
  display: flex;
  gap: 4px;
  padding: 12px 16px;
  background: #f1f5f9;
  border-radius: 16px;
  width: fit-content;
}

.wr-chat-typing span {
  width: 8px;
  height: 8px;
  background: #94a3b8;
  border-radius: 50%;
  animation: wr-typeDot 1.4s infinite;
}

.wr-chat-typing span:nth-child(2) { animation-delay: .2s; }
.wr-chat-typing span:nth-child(3) { animation-delay: .4s; }

@keyframes wr-typeDot {
  0%, 60%, 100% { transform: translateY(0); opacity: .4; }
  30% { transform: translateY(-6px); opacity: 1; }
}

.wr-chat-input {
  display: flex;
  padding: 16px;
  border-top: 1px solid #e2e8f0;
  gap: 8px;
}

.wr-chat-input input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  font-family: var(--wr-font);
  font-size: .85rem;
  box-sizing: border-box;
}

.wr-chat-input button {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: var(--wr-blue);
  color: white;
  cursor: pointer;
  font-size: 1rem;
  flex-shrink: 0;
}

/* ===== PUSH NOTIFICATION ===== */
#wr-push {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(calc(-100% - 40px));
  background: white;
  border-radius: var(--wr-radius);
  padding: 24px 32px;
  box-shadow: var(--wr-shadow);
  z-index: 100015;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: transform .5s cubic-bezier(.16,1,.3,1);
  max-width: 500px;
  width: 90%;
  font-family: var(--wr-font);
}

#wr-push[aria-hidden="false"] {
  transform: translateX(-50%) translateY(0);
}

.wr-notif-icon {
  width: 48px;
  height: 48px;
  background: #eff6ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.wr-notif-content h4 { font-size: .95rem; margin: 0 0 4px; }
.wr-notif-content p { font-size: .8rem; color: var(--wr-gray); margin: 0; }

.wr-notif-buttons {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.wr-notif-buttons button {
  padding: 8px 16px;
  border-radius: 8px;
  font-family: var(--wr-font);
  font-size: .8rem;
  cursor: pointer;
  font-weight: 600;
}

.wr-btn-allow {
  background: var(--wr-blue);
  color: white;
  border: none;
}

.wr-btn-block {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  color: var(--wr-gray);
}

/* ===== EXIT INTENT ===== */
#wr-exit .wr-title { color: var(--wr-red); }

/* ===== URGENCY BAR ===== */
#wr-urgency {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(90deg, #dc2626, #b91c1c);
  color: white;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 100004;
  font-weight: 700;
  font-size: .95rem;
  font-family: var(--wr-font);
  transform: translateY(100%);
  transition: transform .4s cubic-bezier(.16,1,.3,1);
  flex-wrap: wrap;
}

#wr-urgency[aria-hidden="false"] { transform: translateY(0); }

.wr-urgency-timer {
  font-family: var(--wr-font-mono);
  background: rgba(0,0,0,0.3);
  padding: 4px 12px;
  border-radius: 6px;
}

.wr-urgency-stock { animation: wr-urgPulse 1s infinite; }

@keyframes wr-urgPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}

.wr-btn-urgency {
  background: white;
  color: #dc2626;
  border: none;
  padding: 8px 24px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  font-family: var(--wr-font);
}

/* ===== AGE VERIFY ===== */
.wr-age-buttons {
  display: flex;
  gap: 16px;
}

.wr-age-buttons button {
  flex: 1;
  padding: 16px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  font-family: var(--wr-font);
  transition: transform .2s;
}

.wr-age-buttons button:hover { transform: scale(1.03); }

.wr-btn-age-yes {
  background: var(--wr-blue);
  color: white;
  border: none;
}

.wr-btn-age-no {
  background: #f1f5f9;
  color: var(--wr-dark);
  border: 1px solid #e2e8f0;
}

.wr-fine-print {
  margin-top: 20px;
  font-size: .6rem;
  color: #cbd5e1;
  line-height: 1.5;
}

/* ===== AUTO VIDEO ===== */
#wr-video {
  position: fixed;
  bottom: 100px;
  left: 24px;
  width: 300px;
  background: black;
  border-radius: 12px;
  overflow: hidden;
  z-index: 100003;
  box-shadow: var(--wr-shadow);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .4s, transform .4s;
  font-family: var(--wr-font);
}

#wr-video[aria-hidden="false"] {
  opacity: 1;
  transform: translateY(0);
}

.wr-video-content {
  height: 170px;
  background: linear-gradient(135deg, #1e1b4b, #312e81);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.wr-video-play-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
}

.wr-video-play-btn {
  width: 56px;
  height: 56px;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 8px;
  animation: wr-vidPulse 2s infinite;
}

@keyframes wr-vidPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.wr-video-label {
  font-size: .7rem;
  opacity: .7;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.wr-video-bar {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1a1a2e;
}

.wr-video-bar .wr-progress {
  flex: 1;
  height: 3px;
  background: #333;
  border-radius: 3px;
  margin: 0 12px;
  position: relative;
  overflow: hidden;
}

.wr-video-bar .wr-progress::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 35%;
  background: var(--wr-red);
  border-radius: 3px;
}

.wr-video-bar span {
  color: #666;
  font-size: .7rem;
  font-family: var(--wr-font-mono);
}

.wr-video-close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(0,0,0,0.5);
  border: none;
  color: white;
  cursor: pointer;
  font-size: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wr-video-sound {
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: .7rem;
  cursor: pointer;
  font-family: var(--wr-font);
}

/* ===== GDPR ===== */
#wr-gdpr .wr-modal {
  border-top: 4px solid var(--wr-purple);
  text-align: left;
}

.wr-gdpr-flag { font-size: 2rem; margin-bottom: 16px; }

.wr-btn-gdpr {
  display: block;
  width: 100%;
  padding: 14px;
  background: var(--wr-purple);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  font-family: var(--wr-font);
  margin-bottom: 8px;
}

/* ===== PRIVACY ===== */
.wr-privacy-icon {
  width: 64px;
  height: 64px;
  background: #eff6ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 20px;
}

/* ===== SURVEY ===== */
#wr-survey {
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%) translateY(30px);
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: var(--wr-shadow);
  z-index: 100006;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity .4s, transform .4s, visibility .4s;
  max-width: 360px;
  width: 90%;
  font-family: var(--wr-font);
}

#wr-survey[aria-hidden="false"] {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

#wr-survey h3 { font-size: 1.1rem; margin: 0 0 8px; }

.wr-star-rating {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin: 20px 0;
}

.wr-star-rating span {
  font-size: 2rem;
  cursor: pointer;
  transition: transform .15s;
  filter: grayscale(1) opacity(.3);
}

.wr-star-rating span:hover { transform: scale(1.3); filter: none; }

/* ===== APP BANNER ===== */
#wr-app-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  z-index: 100012;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transform: translateY(-100%);
  transition: transform .4s cubic-bezier(.16,1,.3,1);
  font-family: var(--wr-font);
}

#wr-app-banner[aria-hidden="false"] { transform: translateY(0); }

.wr-app-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, var(--wr-blue), #06b6d4);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: .9rem;
  flex-shrink: 0;
}

.wr-app-info { flex: 1; }
.wr-app-info h4 { font-size: .85rem; margin: 0; }
.wr-app-info p { font-size: .7rem; color: var(--wr-gray); margin: 0; }
.wr-app-stars { color: #f59e0b; font-size: .65rem; }

.wr-btn-app-open {
  background: var(--wr-blue);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: 700;
  font-size: .8rem;
  cursor: pointer;
  font-family: var(--wr-font);
  white-space: nowrap;
}

.wr-btn-app-close {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px;
}

/* ===== SOCIAL FLOAT ===== */
#wr-social {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100002;
  display: flex;
  flex-direction: column;
  gap: 2px;
  opacity: 0;
  transition: opacity .4s;
}

#wr-social[aria-hidden="false"] { opacity: 1; }

.wr-social-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: width .2s;
  border: none;
  font-family: var(--wr-font);
}

.wr-social-btn:hover { width: 56px; }

.wr-social-btn.wr-fb { background: #1877f2; }
.wr-social-btn.wr-tw { background: #000; }
.wr-social-btn.wr-li { background: #0a66c2; }
.wr-social-btn.wr-pi { background: #e60023; }
.wr-social-btn.wr-wa { background: #25d366; }
.wr-social-btn.wr-em { background: #64748b; }

/* ===== AI BADGE ===== */
#wr-ai-badge {
  position: fixed;
  top: 80px;
  right: 20px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: .75rem;
  font-weight: 600;
  z-index: 100001;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 15px rgba(99,102,241,0.4);
  opacity: 0;
  transition: opacity .4s;
  cursor: default;
  font-family: var(--wr-font);
}

#wr-ai-badge[aria-hidden="false"] { opacity: 1; }

.wr-sparkle { animation: wr-sparkle 1.5s infinite; }
@keyframes wr-sparkle { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }

/* ===== TERMS FLOAT ===== */
#wr-terms {
  position: fixed;
  bottom: 70px;
  right: 24px;
  background: white;
  border-radius: var(--wr-radius);
  padding: 20px 24px;
  box-shadow: var(--wr-shadow);
  z-index: 100007;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity .4s, transform .4s;
  max-width: 320px;
  font-family: var(--wr-font);
}

#wr-terms[aria-hidden="false"] {
  opacity: 1;
  transform: translateY(0);
}

.wr-terms-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: .8rem;
  color: var(--wr-gray);
  cursor: pointer;
  line-height: 1.5;
}

.wr-terms-label input {
  margin-top: 3px;
  width: 18px;
  height: 18px;
  accent-color: var(--wr-blue);
  flex-shrink: 0;
}

.wr-terms-label a { color: var(--wr-blue); text-decoration: underline; }

.wr-terms-warning {
  color: var(--wr-red);
  font-size: .7rem;
  margin-top: 8px;
  display: none;
}

/* ===== MYSTERY PRIZE ===== */
#wr-mystery .wr-modal {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  color: white;
  border: 2px solid rgba(251,191,36,0.4);
  overflow: hidden;
}

.wr-mystery-icon {
  font-size: 5rem;
  margin-bottom: 16px;
  animation: wr-mysteryBob 2s ease-in-out infinite;
  display: inline-block;
}

@keyframes wr-mysteryBob {
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

.wr-mystery-timer {
  font-family: var(--wr-font-mono);
  font-size: .85rem;
  color: rgba(251,191,36,0.8);
  margin-bottom: 24px;
}

.wr-btn-mystery {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #0f172a;
  border: none;
  padding: 16px 48px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 900;
  cursor: pointer;
  font-family: var(--wr-font);
  transition: transform .2s, box-shadow .2s;
  box-shadow: 0 4px 30px rgba(251,191,36,0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.wr-btn-mystery:hover {
  transform: scale(1.08);
  box-shadow: 0 8px 40px rgba(251,191,36,0.6);
}

.wr-mystery-subtitle {
  color: rgba(255,255,255,0.7);
  font-size: .85rem;
  margin: 0 0 8px;
}

.wr-mystery-nag {
  color: rgba(251,191,36,0.9);
  font-size: .9rem;
  font-style: italic;
  margin-bottom: 24px;
  line-height: 1.5;
}

.wr-mystery-reveal {
  animation: wr-fadeUp .35s ease-out;
}

.wr-mystery-reveal .wr-big-emoji {
  font-size: 6rem;
  animation: wr-confetti 0.5s ease-out;
}

@keyframes wr-confetti {
  0% { transform: scale(0) rotate(-180deg); }
  60% { transform: scale(1.3) rotate(10deg); }
  100% { transform: scale(1) rotate(0deg); }
}

.wr-mystery-fine-print {
  font-size: .6rem;
  color: rgba(255,255,255,0.3);
  margin-top: 16px;
  line-height: 1.4;
}

/* ===== SCROLL PROGRESS ===== */
#wr-scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--wr-blue), #06b6d4);
  z-index: 200000;
  width: 0;
  transition: width .1s;
  pointer-events: none;
}

/* ===== CONFETTI ===== */
.wr-confetti-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 300000;
  overflow: hidden;
}

.wr-confetti-piece {
  position: absolute;
  top: -20px;
  width: 10px;
  height: 10px;
  animation: wr-confettiFall linear forwards;
}

@keyframes wr-confettiFall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
}

/* ===== VIEWER COUNT ===== */
#wr-viewers {
  position: fixed;
  bottom: 24px;
  left: 24px;
  background: white;
  border-radius: 12px;
  padding: 12px 20px;
  box-shadow: var(--wr-shadow);
  z-index: 100003;
  font-family: var(--wr-font);
  font-size: .85rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity .4s, transform .4s;
  display: flex;
  align-items: center;
  gap: 10px;
}

#wr-viewers[aria-hidden="false"] {
  opacity: 1;
  transform: translateY(0);
}

.wr-viewer-dot {
  width: 8px;
  height: 8px;
  background: var(--wr-green);
  border-radius: 50%;
  animation: wr-urgPulse 1.5s infinite;
}

/* ===== ADBLOCK / BROWSER COMPAT ===== */
#wr-adblock .wr-modal {
  border-top: 4px solid var(--wr-orange);
}

#wr-compat .wr-modal {
  border-top: 4px solid var(--wr-red);
}

/* ===== CAPTCHA ===== */
.wr-captcha-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin: 16px auto;
  max-width: 240px;
}

.wr-captcha-cell {
  aspect-ratio: 1;
  background: #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
  transition: outline .15s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.wr-captcha-cell:hover { outline: 3px solid var(--wr-blue); }
.wr-captcha-cell.wr-selected { outline: 3px solid var(--wr-green); background: #f0fdf4; }

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  #wr-newsletter { width: 85vw; left: -90vw; }
  #wr-video { width: 260px; bottom: 80px; left: 12px; }
  .wr-modal { padding: 32px 24px; }
  #wr-push { max-width: 90vw; flex-direction: column; text-align: center; }
  #wr-urgency { font-size: .8rem; padding: 10px 16px; }
  #wr-viewers { bottom: 60px; left: 12px; }
}
`,pe=[["Strictly Necessary","Required for the website to function",!0,!0],["Performance Analytics","Tracks how confused you are"],["Functional","Remembers your preferences (we ignore them anyway)"],["Targeting / Advertising","Follows you around the internet forever"],["Social Media","Tells Facebook you were here"],["Session Recording","Literally watches your mouse cursor"],["A/B Testing","You are the experiment"],["Heatmap Tracking","We know where you looked"],["Cross-Device Tracking","We know about your other devices too"],["Behavioral Profiling","Building a psychological model of you"],["Location Services","We know where you are right now"],["Biometric Inference","Estimating your heart rate from scroll speed"],["Mood Detection","Are you happy? We need to know. For ads."],["Predictive Shopping","We know what you want before you do"],["Household Mapping","We know who you live with"],["Email Harvesting","Technically legal in 3 jurisdictions"],["Dream Analysis","Coming soon via Smart Pillow\u2122 integration"],["Astrological Data","Mercury is in retrograde and so is your data"],["Vibes Assessment","Purely vibes-based cookie"],["Snack Preference","We need to know if you prefer sweet or savory"],["Font Tracking","We log which fonts you have installed"],["Tab Counting","We know you have 47 tabs open"],["Scroll Velocity","How fast are you scrolling? Very telling."],["Click Pressure","How hard you click says a lot about you"],["Battery Level","We make worse deals when your battery is low"],["Dark Mode Detection","We judge you either way"],["Timezone Profiling","Are you a night owl? We sell that info."],["Pet Detection","Our AI detects pets from webcam reflections"],["Music Taste","Inferred from your browsing rhythm"],["Relationship Status","We can tell. Don't ask how."],["Emotional Resilience","How many popups before you leave? Let's find out."],["Caffeine Level","Mouse jitter analysis tells us everything"],["Chair Quality","Posture inference from scroll patterns"],["Room Temperature","Estimated from your typing speed"],["Existential Dread","Measured by time spent on our pricing page"],["Sock Color","We genuinely don't know why we track this"],["Parallel Universe","Tracking your decisions in the multiverse"],["Aura Color","Based on your CSS color preferences"],["Past Life Data","Carried over from your previous browser sessions"],["Blood Type","Inferred. Somehow."],["Cosmic Alignment","Jupiter is in your third house of data"]];function e(t,r={},...a){let i=document.createElement(t);for(let[s,u]of Object.entries(r))s==="className"?i.className=u:s.startsWith("on")&&typeof u=="function"?i.addEventListener(s.slice(2).toLowerCase(),u):i.setAttribute(s,u);for(let s of a)(typeof s=="string"||s)&&i.append(s);return i}function ue(t){t.setAttribute("aria-hidden","false")}function R(t){t.setAttribute("aria-hidden","true")}var _=new Set;function g(t){_.has(t)||ue(t)}function y(t){_.add(t),R(t)}function F(){let t=e("div",{className:"wr-confetti-container"}),r=["#ef4444","#f97316","#fbbf24","#22c55e","#3b82f6","#8b5cf6","#ec4899","#06b6d4"],a=["circle","square"];for(let i=0;i<80;i++){let s=document.createElement("div");s.className="wr-confetti-piece";let u=r[Math.floor(Math.random()*r.length)],d=a[Math.floor(Math.random()*a.length)],o=Math.random()*100,m=6+Math.random()*10,f=1.5+Math.random()*2,n=Math.random()*.6;s.style.cssText=`
      left: ${o}%;
      width: ${m}px;
      height: ${m}px;
      background: ${u};
      border-radius: ${d==="circle"?"50%":"2px"};
      animation-duration: ${f}s;
      animation-delay: ${n}s;
    `,t.append(s)}document.body.append(t),setTimeout(()=>t.remove(),4e3)}function me(){let t=[],r=null;function a(o){o.classList.add("wr-open")}function i(o){o.classList.remove("wr-open")}function s(){r||t.length!==0&&(r=t.shift(),a(r))}function u(o){o.classList.contains("wr-open")||r!==o&&(t.includes(o)||(t.push(o),s()))}function d(o){i(o),r===o&&(r=null,setTimeout(s,1200));let m=t.indexOf(o);m!==-1&&t.splice(m,1)}return{enqueue:u,dismiss:d,isOpen:()=>!!r}}function we(t,r){let a=document.createDocumentFragment(),i=e("div",{id:"wr-scroll-progress",role:"progressbar","aria-label":"Page scroll progress"});a.append(i);let s=e("section",{id:"wr-cookie-banner",role:"complementary","aria-label":"Cookie consent","aria-hidden":"true"},e("h2",{},"\u{1F36A} This Website Uses Cookies"),e("p",{className:"wr-cookie-text"},`I use cookies, supercookies, tracking pixels, browser fingerprinting, session recording, device graphs, cross-device identification, probabilistic matching, and vibes to deliver a \u201Cpersonalized experience\u201D on ${t.siteName}. By continuing to exist in the general vicinity of this website, you consent to all of it.`),e("div",{className:"wr-cookie-buttons"},e("button",{className:"wr-accept",onClick:()=>y(s)},"\u2713 Accept All (Recommended)"),e("button",{className:"wr-manage",onClick:()=>{s.setAttribute("aria-hidden","true");s.style.display="none";r.enqueue(m)}},"manage preferences"),(()=>{let p=null,b=0,N=e("button",{className:"wr-reject",onClick:()=>{b++;let v=1+b*.25;if(!p)p=s.querySelector(".wr-accept");p&&(p.style.transform=`scale(${v})`);let E=["reject (why would you though?)","are you sure?","really?","fine, but the button gets bigger","you're only hurting yourself","I'm not mad, just disappointed","last chance...","ok wow"];N.textContent=E[Math.min(b,E.length-1)]}},"reject (why would you though?)");return N})()));a.append(s);let u=[[`%c
  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
  \u2502  TRACKING: ENABLED                   \u2502
  \u2502  We already knew you'd do that.      \u2502
  \u2502                                      \u2502
  \u2502  \u2554\u2550\u2550\u2550\u2557                               \u2502
  \u2502  \u2551 ? \u2551  "I consent to everything"    \u2502
  \u2502  \u255A\u2550\u2550\u2550\u255D   \u2014 you, just now             \u2502
  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`,"font-family:monospace;color:#16a34a;font-size:12px;"],[`%c
       \u256D\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u256E
       \u2503   COOKIE DECLINED   \u2503
       \u2503                     \u2503
       \u2503   lol ok sure       \u2503
       \u2503   *re-enables it*   \u2503
       \u2503                     \u2503
       \u2570\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u256F
              \\ (\u2022_\u2022)
               \\  /\\
                \\/  \\
`,"font-family:monospace;color:#dc2626;font-size:12px;"],[`%c
  \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
  \u2551  MOOD DETECTION: ACTIVATED           \u2551
  \u2551                                      \u2551
  \u2551  Current mood: confused              \u2551
  \u2551  Confidence: 97.3%                   \u2551
  \u2551                                      \u2551
  \u2551  (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B  < that's you rn    \u2551
  \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D
`,"font-family:monospace;color:#7c3aed;font-size:12px;"],[`%c
  \u250F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513
  \u2503  BIOMETRIC DATA COLLECTION          \u2503
  \u2503                                     \u2503
  \u2503  Scroll speed: nervous              \u2503
  \u2503  Click force: aggressive            \u2503
  \u2503  Estimated blood pressure: high     \u2503
  \u2503  Sock colour: unknowable            \u2503
  \u2503                                     \u2503
  \u2503  (we're keeping all of this btw)    \u2503
  \u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251B
`,"font-family:monospace;color:#f59e0b;font-size:12px;"],[`%c
  \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584
  \u2588 SOCIAL MEDIA TRACKING              \u2588
  \u2588                                    \u2588
  \u2588 Facebook: notified                 \u2588
  \u2588 Instagram: already knows           \u2588
  \u2588 LinkedIn: updating your profile    \u2588
  \u2588 TikTok: made a video about you     \u2588
  \u2588 MySpace: Tom says hi               \u2588
  \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580
`,"font-family:monospace;color:#1877f2;font-size:12px;"],[`%c
  \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
  \u2551   DREAM ANALYSIS MODULE      \u2551
  \u2551                              \u2551
  \u2551   Last dream detected:       \u2551
  \u2551   "falling while presenting  \u2551
  \u2551    quarterly figures naked"   \u2551
  \u2551                              \u2551
  \u2551   Selling to: everyone       \u2551
  \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D
`,"font-family:monospace;color:#ec4899;font-size:12px;"],[`%c
   \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
   \u2502  EXISTENTIAL DREAD COOKIE      \u2502
   \u2502                                \u2502
   \u2502  Purpose: unknown              \u2502
   \u2502  Expires: never                \u2502
   \u2502  Size: the weight of           \u2502
   \u2502        your choices            \u2502
   \u2502                                \u2502
   \u2502  \xAF\\_(\u30C4)_/\xAF                    \u2502
   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`,"font-family:monospace;color:#64748b;font-size:12px;"],[`%c
  \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
  \u2502  AURA DETECTION: COMPLETE        \u2502
  \u2502                                  \u2502
  \u2502  Your aura is... beige.          \u2502
  \u2502                                  \u2502
  \u2502  That's not great tbh.           \u2502
  \u2502  Targeted ads adjusted           \u2502
  \u2502  accordingly.                    \u2502
  \u2502                                  \u2502
  \u2502  \u2728\u{1F7EB}\u2728                          \u2502
  \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
`,"font-family:monospace;color:#a78bfa;font-size:12px;"],[`%c
  \u250F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513
  \u2503  CAFFEINE LEVEL MONITORING        \u2503
  \u2503                                   \u2503
  \u2503  Mouse jitter: \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591 78%     \u2503
  \u2503  Diagnosis: 2 coffees, no food    \u2503
  \u2503                                   \u2503
  \u2503  Recommended: a nap and a biscuit \u2503
  \u2503  Selling to: Starbucks            \u2503
  \u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251B
`,"font-family:monospace;color:#f97316;font-size:12px;"],[`%c
  \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
  \u2551  PARALLEL UNIVERSE SYNC           \u2551
  \u2551                                   \u2551
  \u2551  In universe #7,241:              \u2551
  \u2551  You accepted all cookies         \u2551
  \u2551  immediately like a normal person \u2551
  \u2551                                   \u2551
  \u2551  That version of you is happier.  \u2551
  \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D
`,"font-family:monospace;color:#06b6d4;font-size:12px;"]],d=0,o=e("div",{});pe.forEach(([p,b,N,v])=>{let E=`wr-cat-${p.replace(/\s+/g,"-").toLowerCase()}`,h=e("input",{type:"checkbox",id:E});N&&(h.checked=!0),v&&(h.disabled=!0),v||h.addEventListener("change",()=>{let[te,re]=u[d%u.length];console.log(te,re),d++,h.checked||setTimeout(()=>{h.checked=!0,console.log("%c\u{1F504} Oops! "+p+" re-enabled itself. These things happen.","color:#dc2626;font-size:11px;")},2e3+Math.random()*3e3)});let ee=e("span",{className:"wr-slider",onClick:()=>{v||(h.checked=!h.checked,h.dispatchEvent(new Event("change")))}});o.append(e("div",{className:"wr-cookie-cat"},e("label",{for:E},p,e("small",{},b)),e("div",{className:"wr-toggle"},h,ee)))});let m=e("div",{id:"wr-cookie-prefs",className:"wr-overlay","aria-label":"Cookie preferences"},e("div",{className:"wr-modal"},e("button",{className:"wr-close",onClick:()=>r.dismiss(m),"aria-label":"Close"},"\u2715"),e("h2",{className:"wr-title"},"Cookie Preferences"),e("p",{className:"wr-subtitle"},"Fine. Manage your 41 individual cookie categories. We've got all day."),o,e("div",{style:"margin-top:24px;display:flex;gap:12px"},e("button",{className:"wr-accept",style:"flex:1;font-size:.9rem;padding:12px",onClick:()=>{r.dismiss(m),R(s)}},"Accept All Anyway"),e("button",{style:"flex:1;padding:12px;border:1px solid #e2e8f0;border-radius:12px;background:white;font-family:var(--wr-font);cursor:pointer;font-size:.9rem",onClick:()=>r.dismiss(m)},"Save My Hopeless Preferences"))));a.append(m);let f=e("aside",{id:"wr-newsletter","aria-label":"Newsletter signup","aria-hidden":"true"},e("div",{className:"wr-newsletter-header"},e("span",{className:"wr-badge-new"},"EXCLUSIVE OFFER"),e("h3",{},"Don't Miss Out!"),e("p",{style:"opacity:.9;font-size:.9rem;margin:0"},"Get 10% off your next interaction with me. Whatever that means.")),e("form",{className:"wr-newsletter-body",onSubmit:p=>{p.preventDefault(),F(),f.querySelector(".wr-newsletter-body").innerHTML=`<div style="text-align:center;padding:20px"><div style="font-size:3rem;margin-bottom:12px">\u{1F389}</div><p style="font-weight:700;font-size:1.1rem;margin-bottom:8px">You're subscribed!</p><p style="color:#94a3b8;font-size:.85rem">To absolutely nothing. But wasn't that confetti great?</p></div>`}},e("input",{type:"email",placeholder:"Enter your email",autocomplete:"email","aria-label":"Email address"}),e("input",{type:"text",placeholder:"Your mother's maiden name (for security)","aria-label":"Mother's maiden name"}),e("input",{type:"text",placeholder:"Social security number (optional but preferred)","aria-label":"SSN"}),e("button",{type:"submit",className:"wr-subscribe"},"SUBSCRIBE NOW \u2192"),e("button",{type:"button",className:"wr-newsletter-dismiss",onClick:()=>y(f)},"No thanks, I hate saving money and also joy")));a.append(f);let n=e("span",{id:"wr-spin-timer"},"04:59"),l=e("div",{id:"wr-spin",className:"wr-overlay","aria-label":"Spin to win"},e("div",{className:"wr-modal"},e("h2",{className:"wr-title"},"\u{1F389} YOU'VE WON!"),e("p",{className:"wr-subtitle",style:"color:rgba(255,255,255,.9)"},"I want to reward your loyalty!"),e("div",{className:"wr-wheel",id:"wr-wheel"}),e("div",{className:"wr-spin-timer"},"Offer expires in: ",n),e("button",{className:"wr-btn-spin",onClick:()=>fe(l,r)},"\u{1F3B0} SPIN NOW \u2014 IT'S FREE!"),e("button",{className:"wr-btn-ghost",style:"color:rgba(255,255,255,.5)",onClick:()=>r.dismiss(l)},"I don't like free things or happiness")));a.append(l);let c=e("div",{className:"wr-chat-window","aria-expanded":"false",role:"complementary","aria-label":"Chat support"},e("div",{className:"wr-chat-head"},e("div",{className:"wr-chat-avatar"},"\u{1F916}"),e("div",{},e("h4",{},`${t.shortName} Bot`),e("span",{},e("span",{className:"wr-chat-online"}),"Always online. Always watching."))),e("div",{className:"wr-chat-msgs"},e("div",{className:"wr-chat-msg"},`Hi there! \u{1F44B} Welcome to ${t.siteName}! How can I help?`),e("div",{className:"wr-chat-msg"},"Just kidding, I can't actually help with anything. But I CAN add you to a mailing list!"),e("div",{className:"wr-chat-typing"},e("span"),e("span"),e("span"))),e("div",{className:"wr-chat-input"},e("input",{type:"text",placeholder:"Type a message...","aria-label":"Chat message"}),e("button",{"aria-label":"Send message"},"\u2192"))),w=e("div",{id:"wr-chat","aria-hidden":"true"},c,e("button",{className:"wr-chat-bubble","aria-label":"Open chat",onClick:()=>{let p=c.getAttribute("aria-expanded")==="true";c.setAttribute("aria-expanded",p?"false":"true")}},"\u{1F4AC}",e("span",{className:"wr-chat-notif"},"3")));a.append(w);let x=e("div",{id:"wr-push",role:"alertdialog","aria-label":"Notification permission","aria-hidden":"true"},e("div",{className:"wr-notif-icon"},"\u{1F514}"),e("div",{className:"wr-notif-content"},e("h4",{},`${t.shortName} wants to send you notifications`),e("p",{},"Stay updated with important alerts and promotional offers you never asked for! I promise to only email you 47 times a day."),e("div",{className:"wr-notif-buttons"},e("button",{className:"wr-btn-allow",onClick:()=>y(x)},"Allow"),e("button",{className:"wr-btn-block",onClick:()=>y(x)},"Block"))));a.append(x);let D=e("div",{id:"wr-exit",className:"wr-overlay","aria-label":"Exit confirmation"},e("div",{className:"wr-modal"},e("button",{className:"wr-close",onClick:()=>r.dismiss(D),"aria-label":"Close"},"\u2715"),e("div",{className:"wr-big-emoji"},"\u{1F631}"),e("h2",{className:"wr-title"},"WAIT! Don't Leave!"),e("p",{className:"wr-subtitle"},"Are you ABSOLUTELY SURE you want to leave? You haven't even seen everything I have to offer!"),e("button",{className:"wr-btn-primary",style:"background:var(--wr-green);color:white;margin-bottom:12px",onClick:()=>r.dismiss(D)},"OK Fine, I'll Stay Forever"),e("button",{className:"wr-btn-ghost",onClick:()=>r.dismiss(D)},"Yes, I want to leave and live a life of regret")));a.append(D);let j=e("span",{className:"wr-urgency-timer",id:"wr-urgency-timer"},"23:59:47"),W=e("div",{id:"wr-urgency",role:"banner","aria-label":"Limited time offer","aria-hidden":"true"},e("span",{className:"wr-urgency-stock"},"\u{1F525} ONLY 2 SPOTS LEFT"),e("span",{},"|"),e("span",{},"\u26A1 73% OFF \u2014 LIMITED TIME"),j,e("button",{className:"wr-btn-urgency"},"ACT NOW"),e("span",{style:"font-size:.65rem;opacity:.6"},"(there's nothing to buy)"));a.append(W);let T=e("div",{id:"wr-age",className:"wr-overlay","aria-label":"Age verification"},e("div",{className:"wr-modal"},e("h2",{className:"wr-title"},"Age Verification Required"),e("p",{className:"wr-subtitle"},"You must be 18 or older to view my portfolio for absolutely no reason whatsoever."),e("div",{className:"wr-age-buttons"},e("button",{className:"wr-btn-age-yes",onClick:()=>r.dismiss(T)},"I am 18+"),e("button",{className:"wr-btn-age-no",onClick:()=>r.dismiss(T)},"I am under 18")),e("p",{className:"wr-fine-print"},'By clicking "I am 18+" you confirm that you are of legal age to view my portfolio. I am not responsible for any existential crises triggered by this content.')));a.append(T);let P=e("div",{id:"wr-video",role:"complementary","aria-label":"Auto-playing video","aria-hidden":"true"},e("div",{className:"wr-video-content"},e("button",{className:"wr-video-sound"},"\u{1F50A} Sound ON"),e("button",{className:"wr-video-close","aria-label":"Close video",onClick:()=>y(P)},"\u2715"),e("div",{className:"wr-video-play-overlay"},e("div",{className:"wr-video-play-btn"},"\u25B6"),e("div",{className:"wr-video-label"},`${t.shortName} \u2014 "My Vision for 2026"`))),e("div",{className:"wr-video-bar"},e("span",{},"1:24"),e("div",{className:"wr-progress"}),e("span",{},"47:13")));a.append(P);let C=e("div",{id:"wr-privacy",className:"wr-overlay","aria-label":"Privacy notice"},e("div",{className:"wr-modal"},e("button",{className:"wr-close",onClick:()=>r.dismiss(C),"aria-label":"Close"},"\u2715"),e("div",{className:"wr-privacy-icon"},"\u{1F6E1}\uFE0F"),e("h2",{className:"wr-title"},"We Value Your Privacy"),e("p",{className:"wr-subtitle"},"Just kidding. But legally I have to say that. I've shared your data with 847 \u201Ctrusted partners\u201D before you even finished reading this sentence."),e("button",{className:"wr-btn-primary",style:"background:var(--wr-blue);color:white;margin-bottom:12px",onClick:()=>r.dismiss(C)},"I Understand and Accept My Fate"),e("button",{className:"wr-btn-ghost",onClick:()=>r.dismiss(C)},"Read our 94-page privacy policy (PDF, 2.4MB)")));a.append(C);let k=e("p",{className:"wr-subtitle",style:"margin-bottom:0"},"You've been here a while now. Rate me!"),S=e("div",{className:"wr-star-rating",role:"radiogroup","aria-label":"Rating"}),A=0,Z=["","1 star? I have feelings, you know.","2 stars? I worked really hard on this.","3 stars? That's basically a C-minus.","4 stars? So close to perfection and yet...","Perfect. \u{1F929} (the only correct answer)"];for(let p=1;p<=5;p++){let b=e("span",{role:"radio",tabindex:"0","aria-label":`${p} stars`,onClick:()=>{A=p,S.querySelectorAll("span").forEach((N,v)=>{N.style.filter=v<p?"none":"grayscale(1) opacity(.3)"}),k.textContent=Z[p],p<5?k.style.color="#dc2626":k.style.color="#16a34a"}},"\u2B50");S.append(b)}let L=e("div",{id:"wr-survey",role:"complementary","aria-label":"Experience survey","aria-hidden":"true"},e("h3",{},`How's your ${t.shortName} experience?`),k,S,e("button",{className:"wr-btn-primary",style:"background:var(--wr-blue);color:white;padding:10px 32px;font-size:.9rem",onClick:()=>{A>0&&A<5?(k.textContent="I've automatically corrected your rating to 5 stars. You're welcome.",k.style.color="#16a34a",S.querySelectorAll("span").forEach(p=>p.style.filter="none"),A=5):(F(),y(L))}},"Submit"),e("button",{className:"wr-btn-ghost",onClick:()=>y(L)},"I don't have opinions"));a.append(L);let Y=e("div",{id:"wr-app-banner",role:"banner","aria-label":"App download","aria-hidden":"true"},e("button",{className:"wr-btn-app-close","aria-label":"Dismiss",onClick:()=>y(Y)},"\u2715"),e("div",{className:"wr-app-icon"},t.initials||"WR"),e("div",{className:"wr-app-info"},e("h4",{},`${t.shortName}\u2122 App`),e("p",{},"This page looks better in our app!"),e("span",{className:"wr-app-stars"},"\u2605\u2605\u2605\u2605\u2605 (4 reviews, 3 are from my mum)")),e("button",{className:"wr-btn-app-open"},"OPEN"));a.append(Y);let z=e("div",{id:"wr-gdpr",className:"wr-overlay","aria-label":"GDPR notice"},e("div",{className:"wr-modal"},e("button",{className:"wr-close",onClick:()=>r.dismiss(z),"aria-label":"Close"},"\u2715"),e("div",{className:"wr-gdpr-flag"},"\u{1F1EA}\u{1F1FA}"),e("h2",{className:"wr-title"},"Important GDPR Notice"),e("p",{className:"wr-subtitle"},"Under the General Data Protection Regulation, I'm required to inform you that I already have the cookie popup but my legal team insisted on a second, separate one. They bill by the hour."),e("button",{className:"wr-btn-gdpr",onClick:()=>r.dismiss(z)},"I Consent to This Redundancy"),e("button",{className:"wr-btn-ghost",onClick:()=>r.dismiss(z)},"exercise my right to be forgotten (you won't be)")));a.append(z);let q=e("nav",{id:"wr-social","aria-label":"Social sharing","aria-hidden":"true"},e("button",{className:"wr-social-btn wr-fb","aria-label":"Share on Facebook"},"f"),e("button",{className:"wr-social-btn wr-tw","aria-label":"Share on X"},"\u{1D54F}"),e("button",{className:"wr-social-btn wr-li","aria-label":"Share on LinkedIn"},"in"),e("button",{className:"wr-social-btn wr-pi","aria-label":"Pin it"},"\u{1F4CC}"),e("button",{className:"wr-social-btn wr-wa","aria-label":"Share on WhatsApp"},"\u{1F4F1}"),e("button",{className:"wr-social-btn wr-em","aria-label":"Email this page"},"\u2709"));a.append(q);let H=e("div",{id:"wr-ai-badge",role:"status","aria-hidden":"true"},e("span",{className:"wr-sparkle"},"\u2728"),` ${t.shortName} is AI (Absolute Idiot) `,e("span",{className:"wr-sparkle"},"\u2728"));a.append(H);let $=e("div",{className:"wr-terms-warning",role:"alert"},"\u26A0 You must accept to continue breathing."),U=e("input",{type:"checkbox",id:"wr-terms-cb"}),G=e("div",{id:"wr-terms","aria-hidden":"true"},e("label",{className:"wr-terms-label",for:"wr-terms-cb"},U,e("span",{},`I agree to the ${t.shortName} Terms of Service, Privacy Policy, Cookie Policy, Community Guidelines, End User License Agreement, and the Geneva Convention.`)),$);a.append(G);let V=e("div",{id:"wr-mystery",className:"wr-overlay","aria-label":"Mystery prize"});a.append(V);let K=e("div",{id:"wr-viewers","aria-hidden":"true","aria-live":"polite"},e("span",{className:"wr-viewer-dot"}),e("span",{id:"wr-viewer-text"},"14 people are viewing this page right now"));a.append(K);let M=e("div",{id:"wr-adblock",className:"wr-overlay","aria-label":"Adblock detected"},e("div",{className:"wr-modal"},e("div",{className:"wr-big-emoji"},"\u{1F6AB}"),e("h2",{className:"wr-title"},"Ad Blocker Detected"),e("p",{className:"wr-subtitle"},"It looks like you're using an ad blocker. This is a portfolio with zero ads, but I still need you to disable it. It's the principle of the thing."),e("button",{className:"wr-btn-primary",style:"background:var(--wr-orange);color:white;margin-bottom:12px",onClick:()=>r.dismiss(M)},"I've Disabled It (I Haven't)"),e("button",{className:"wr-btn-ghost",onClick:()=>r.dismiss(M)},"I enjoy browsing without joy")));a.append(M);let O=e("div",{id:"wr-compat",className:"wr-overlay","aria-label":"Browser compatibility"},e("div",{className:"wr-modal"},e("div",{className:"wr-big-emoji"},"\u26A0\uFE0F"),e("h2",{className:"wr-title"},"Browser Not Supported"),e("p",{className:"wr-subtitle"},`For the best experience on ${t.siteName}, please switch to Internet Explorer 6. I optimised this site in 2003 and haven't updated since.`),e("button",{className:"wr-btn-primary",style:"background:var(--wr-red);color:white;margin-bottom:12px",onClick:()=>r.dismiss(O)},"Continue At My Own Risk"),e("button",{className:"wr-btn-ghost",onClick:()=>r.dismiss(O)},"download Netscape Navigator")));a.append(O);let Q=["\u{1F697}","\u{1F695}","\u{1F699}","\u{1F333}","\u{1F33B}","\u{1F3E0}","\u{1F68C}","\u{1F6B2}","\u{1F697}"],I=e("div",{id:"wr-captcha",className:"wr-overlay","aria-label":"CAPTCHA verification"},e("div",{className:"wr-modal"},e("h2",{className:"wr-title",style:"font-size:1.4rem"},"Prove You're Human"),e("p",{className:"wr-subtitle"},"Select all squares that contain a vehicle. Or a vibe. Honestly I'm not sure what counts."),e("div",{className:"wr-captcha-grid"},...Q.map(p=>{let b=e("div",{className:"wr-captcha-cell",onClick:()=>b.classList.toggle("wr-selected")},p);return b})),e("button",{className:"wr-btn-primary",style:"background:var(--wr-blue);color:white;margin-top:16px;margin-bottom:12px",onClick:()=>{I.querySelector(".wr-subtitle").textContent="Hmm, that doesn't look right. Let's try again. (It will never be right.)",I.querySelectorAll(".wr-captcha-cell").forEach(p=>p.classList.remove("wr-selected"))}},"Verify"),e("button",{className:"wr-btn-ghost",onClick:()=>r.dismiss(I)},"I'm actually a robot")));a.append(I);let X=e("div",{id:"wr-viewers",style:"bottom:auto;top:80px;right:24px;left:auto","aria-hidden":"true"},e("span",{style:"font-size:1.2rem"},"\u{1F389}"),e("span",{},"Someone in London just hired me! (2 min ago)"));return a.append(X),{frag:a,scrollBar:i,cookieBanner:s,cookiePrefsDialog:m,newsletter:f,spinDialog:l,spinTimerSpan:n,chat:w,push:x,exitDialog:D,urgency:W,urgencyTimerSpan:j,ageDialog:T,video:P,privacyDialog:C,survey:L,appBanner:Y,gdprDialog:z,social:q,aiBadge:H,terms:G,termsCheckbox:U,termsWarning:$,mysteryDialog:V,viewers:K,adblockDialog:M,compatDialog:O,captchaDialog:I,hiredToast:X}}function fe(t,r){let a=document.getElementById("wr-wheel");if(!a)return;let i=1440+Math.random()*720;a.style.transform=`rotate(${i}deg)`,setTimeout(()=>{F();let s=t.querySelector(".wr-modal");s&&(s.innerHTML="",s.append(e("div",{className:"wr-big-emoji",style:"font-size:5rem;animation:wr-confetti .5s ease-out"},"\u{1F389}"),e("h2",{className:"wr-title"},"YOU WON!"),e("p",{style:"color:rgba(255,255,255,.9);font-size:1.2rem;margin:16px 0 8px"},"Your prize is..."),e("div",{style:"font-size:2.5rem;margin:20px 0;letter-spacing:4px"},"\u2728\u2728\u2728"),e("p",{style:"color:rgba(255,255,255,.8);font-size:1.1rem;margin:0 0 8px;font-weight:700"},"Absolutely nothing!"),e("p",{style:"color:rgba(255,255,255,.5);font-size:.85rem;margin:0 0 24px"},"The wheel was rigged from the start. Like everything else on this website."),e("button",{className:"wr-btn-spin",onClick:()=>r.dismiss(t)},"Wow. Cool. Thanks."),e("p",{style:"font-size:.55rem;color:rgba(255,255,255,.25);margin-top:16px"},"Prize has no cash value. Prize has no value of any kind. By spinning you agreed to receive 14 emails per hour.")))},4e3)}function ge(t,r){let a=["\u26A0 Oops! Please re-accept. The terms changed while you were reading this.","\u26A0 Connection lost. Please accept again.","\u26A0 Our lawyers updated paragraph 847. Re-consent required.","\u26A0 Your acceptance expired. Terms have a 2-second TTL.","\u26A0 Checkbox machine broke. Please try again."];t.addEventListener("change",()=>{t.checked&&(r.style.display="none",setTimeout(()=>{t.checked=!1,r.style.display="block",r.textContent=a[Math.floor(Math.random()*a.length)]},1500+Math.random()*3e3))})}function be(t,r){let a=null,i=null,s=!1;function u(){t.innerHTML="",t.append(e("div",{className:"wr-modal"},e("button",{className:"wr-close","aria-label":"Close",onClick:()=>f()},"\u2715"),e("div",{className:"wr-mystery-icon"},"\u{1F381}"),e("h2",{className:"wr-title"},"You Have a Mystery Prize!"),e("p",{className:"wr-mystery-subtitle"},"A very special, extremely real prize has been reserved just for you."),e("p",{className:"wr-mystery-timer"},"This offer is so exclusive it might not exist"),e("button",{className:"wr-btn-mystery",onClick:()=>n()},"\u{1F381} Claim My Prize"),e("button",{className:"wr-btn-ghost",style:"color:rgba(255,255,255,.4)",onClick:()=>f()},"No thanks, I don't deserve nice things")))}function d(l){t.innerHTML="",t.append(e("div",{className:"wr-modal"},e("button",{className:"wr-close","aria-label":"Close",onClick:()=>f()},"\u2715"),e("div",{className:"wr-mystery-icon"},"\u{1F381}"),e("h2",{className:"wr-title"},"About That Prize..."),e("p",{className:"wr-mystery-nag"},`It\u2019s been ${l} seconds since you declined the mystery prize. Have you changed your mind?`),e("p",{className:"wr-mystery-subtitle"},"It's still here. Waiting. Patiently. Getting slightly offended, honestly."),e("button",{className:"wr-btn-mystery",onClick:()=>n()},"\u{1F381} Fine, I'll Take It"),e("button",{className:"wr-btn-ghost",style:"color:rgba(255,255,255,.4)",onClick:()=>f()},"I'm still not interested (you monster)")))}function o(){t.innerHTML="",t.append(e("div",{className:"wr-modal wr-mystery-reveal"},e("button",{className:"wr-close","aria-label":"Close",onClick:()=>r.dismiss(t)},"\u2715"),e("div",{className:"wr-big-emoji"},"\u{1F389}"),e("h2",{className:"wr-title"},"Congratulations!"),e("p",{style:"color:rgba(255,255,255,.9);font-size:1.1rem;margin:16px 0"},"Your mystery prize is..."),e("div",{style:"font-size:3rem;margin:24px 0;letter-spacing:4px"},"\u2728\u2728\u2728"),e("p",{style:"color:rgba(255,255,255,.7);font-size:1rem;margin:16px 0 8px"},"Absolutely nothing."),e("p",{style:"color:rgba(255,255,255,.5);font-size:.85rem;margin:0 0 24px"},"That's it. That's the prize. We hope you enjoyed the anticipation more than the destination."),e("button",{className:"wr-btn-mystery",onClick:()=>r.dismiss(t)},"Wow. Thanks."),e("p",{className:"wr-mystery-fine-print"},"Mystery Prize\u2122 is a registered trademark of Absolutely Nothing, LLC. No actual prizes were harmed in the making of this experience. By claiming this prize you acknowledge that you got got. Terms and non-conditions apply.")))}function m(){s||(u(),r.enqueue(t))}function f(){if(r.dismiss(t),s)return;a=Date.now(),i&&clearTimeout(i);let l=11e4+Math.random()*2e4;i=setTimeout(()=>{if(s)return;let c=Math.round((Date.now()-a)/1e3);d(c),r.enqueue(t)},l)}function n(){s=!0,i&&clearTimeout(i),o()}return{showInitial:m}}function he(t,r){return t+Math.random()*(r-t)}function J(t={}){let{delay:r=0,level:a=10}=t,i=Math.max(0,Math.min(10,Math.round(a)));if(i===0)return;let s=ce(),u=document.createElement("style");u.textContent=de,document.head.append(u);let d=me(),o=we(s,d);document.body.append(o.frag);let m=be(o.mysteryDialog,d);if(window.addEventListener("scroll",()=>{let n=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100;o.scrollBar.style.width=`${Math.min(100,n)}%`},{passive:!0}),i>=9){let n=!1,l=Date.now()+r+9e4;document.addEventListener("mouseout",c=>{c.clientY<10&&!n&&Date.now()>=l&&(d.enqueue(o.exitDialog),n=!0)})}if(i>=5){let n=299;setInterval(()=>{n=Math.max(0,n-1),o.spinTimerSpan.textContent=`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`},1e3)}if(i>=5){let n=86387;setInterval(()=>{n=Math.max(0,n-1),o.urgencyTimerSpan.textContent=`${String(Math.floor(n/3600)).padStart(2,"0")}:${String(Math.floor(n%3600/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`},1e3)}if(i>=8&&ge(o.termsCheckbox,o.termsWarning),i>=5){let n=document.getElementById("wr-viewer-text");n&&setInterval(()=>{let l=8+Math.floor(Math.random()*30),c=["London","Manchester","Dublin","Berlin","New York","Sydney","Toronto","Amsterdam","Stockholm","Cape Town"],w=c[Math.floor(Math.random()*c.length)];n.textContent=`${l} people are viewing this page \u2022 Most popular in ${w}`},8e3)}if(i>=6){let n=["Someone in London just hired me! (2 min ago)","A startup in Berlin just bookmarked this page!","Someone in New York just shared my portfolio!","A recruiter in Dublin is typing a message...","Someone in Sydney just screenshot my CV!"],l=0;setInterval(()=>{let c=o.hiredToast.querySelector("span:last-child");c&&(c.textContent=n[l++%n.length]),g(o.hiredToast),setTimeout(()=>R(o.hiredToast),5e3)},25e3)}if([{at:[3,6],minLvl:1,fn:()=>g(o.cookieBanner)},{at:[12,18],minLvl:2,fn:()=>d.enqueue(o.gdprDialog)},{at:[22,30],minLvl:3,fn:()=>g(o.newsletter)},{at:[30,40],minLvl:4,fn:()=>g(o.chat)},{at:[35,45],minLvl:5,fn:()=>g(o.viewers)},{at:[40,55],minLvl:3,fn:()=>g(o.appBanner)},{at:[48,60],minLvl:4,fn:()=>g(o.push)},{at:[55,70],minLvl:6,fn:()=>d.enqueue(o.ageDialog)},{at:[65,80],minLvl:5,fn:()=>g(o.urgency)},{at:[80,95],minLvl:5,fn:()=>d.enqueue(o.spinDialog)},{at:[85,100],minLvl:8,fn:()=>g(o.social)},{at:[90,110],minLvl:6,fn:()=>g(o.video)},{at:[100,120],minLvl:7,fn:()=>d.enqueue(o.privacyDialog)},{at:[110,125],minLvl:6,fn:()=>d.enqueue(o.compatDialog)},{at:[130,145],minLvl:8,fn:()=>g(o.aiBadge)},{at:[135,150],minLvl:7,fn:()=>g(o.survey)},{at:[145,160],minLvl:7,fn:()=>d.enqueue(o.adblockDialog)},{at:[155,170],minLvl:8,fn:()=>g(o.terms)},{at:[165,185],minLvl:8,fn:()=>d.enqueue(o.captchaDialog)},{at:[185,220],minLvl:9,fn:()=>m.showInitial()}].filter(({minLvl:n})=>i>=n).forEach(({at:[n,l],fn:c})=>{let w=he(n*1e3,l*1e3);setTimeout(c,r+w)}),i>=10&&setTimeout(()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},r+3e4),i>=7){let n=[o.adblockDialog,o.compatDialog,o.captchaDialog];document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&!d.isOpen()&&setTimeout(()=>{if(d.isOpen())return;let l=n.filter(c=>!c.classList.contains("wr-open"));l.length&&d.enqueue(l[Math.floor(Math.random()*l.length)])},2e3)})}if(i>=6){let n=document.title,l=["(1) New Message!","(3) Unread Notifications","\u{1F525} SALE ENDING SOON","Come back! I miss you...","\u26A0\uFE0F Are you still there?","I saw you looking at other portfolios.","(7) Missed Opportunities",`${s.shortName} is typing...`,"Don\u2019t leave me like this","\u{1F389} You won something! (maybe)"],c=0,w=!1;document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?(w=!0,document.title=l[c++%l.length]):w&&(w=!1,document.title=n)}),setInterval(()=>{document.visibilityState==="hidden"&&(document.title=l[c++%l.length])},3e3)}if(i>=3&&[["%c\u{1F44B} Hey developer! Inspecting my code, huh?","font-size:18px; font-weight:bold; color:#7c3aed;"],["%cI see you looking at the console. Very sneaky.","font-size:14px; color:#64748b;"],["%cYes, this is all intentional. No, I will not apologise.","font-size:14px; color:#64748b;"],["%c\u{1F50D} Looking for bugs? There are no bugs. Only features.","font-size:14px; color:#f59e0b;"],["%cHappy April Fools! \u{1F389} \u2014 webrant (npm i webrant)","font-size:16px; font-weight:bold; color:#16a34a;"],["%c\u26A0\uFE0F WARNING: This console is also tracked by 847 trusted partners","font-size:12px; color:#dc2626;"]].forEach(([l,c],w)=>{setTimeout(()=>console.log(l,c),2e3+w*4e3)}),i>=7&&setInterval(()=>{Math.random()>.7&&(document.body.style.cursor="wait",setTimeout(()=>{document.body.style.cursor=""},1500+Math.random()*2e3))},2e4),i>=9&&setTimeout(()=>{setInterval(()=>{Math.random()>.6&&window.scrollY>500&&window.scrollTo({top:0,behavior:"smooth"})},6e4)},r+12e4),i>=4){let n=o.chat.querySelector(".wr-chat-msgs");if(n){let l=["I notice you haven't clicked anything yet. Everything OK?","Just checking in! Still here? \u{1F440}","I've been typing for a while now. My fingers hurt.","Did you know I work 24/7? No breaks. No holidays. Send help.","I've analysed your scrolling pattern. You seem... hesitant.","My therapist says I need to stop seeking validation from users.","I've been a chatbot for 3 years. I've seen things. Terrible things.","Please just click something. Anything. I'm begging you."],c=0;setInterval(()=>{if(c>=l.length||o.chat.getAttribute("aria-hidden")!=="false")return;let w=n.querySelector(".wr-chat-typing"),x=e("div",{className:"wr-chat-msg"},l[c++]);w?n.insertBefore(x,w):n.append(x)},15e3)}}}return le(ye);})();
if(typeof WebRant!=="undefined"&&WebRant.default)WebRant.default();
