import { useEffect, useRef, useState } from 'react';
import { content } from '../data/content';
import { useLang } from '../i18n';
import Reveal from './Reveal';

function FacePhoto({ src, alt, fallback }) {
  const [failed, setFailed] = useState(false);
  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }
  return fallback;
}

// Foto portrait utuh yang nempel (sticky) + flip depan↔belakang mengikuti scroll,
// ala Sticky Avatar di contoh Majd
function StickyPortrait({ profile, t }) {
  const innerRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const parent = document.getElementById('bio-grid');
      const inner = innerRef.current;
      if (!parent || !inner) return;
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh + 200;
      const passed = 200 - rect.top;
      const p = Math.min(1, Math.max(0, total > 0 ? passed / total : 0));
      inner.style.transform = `perspective(1200px) rotateY(${p * 180}deg)`;
      if (barRef.current) barRef.current.style.width = `${p * 100}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="md:sticky md:top-28 self-start">
      <div className="flip-scene relative mx-auto w-full max-w-[340px]">
        <div ref={innerRef} className="flip-inner aspect-[4/5]">
          {/* FOTO DEPAN */}
          <div className="flip-face thumb-bg relative aspect-[4/5] overflow-hidden rounded-[20px] border border-line">
            <FacePhoto
              src={profile.photo}
              alt={`Foto ${profile.name}`}
              fallback={
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-700 via-stone-800 to-neutral-900" />
                  <div className="absolute inset-0 thumb-dots opacity-50" />
                  <span className="absolute inset-0 grid place-items-center font-display text-[7rem] font-semibold text-ink/20">
                    C
                  </span>
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-ink/60 bg-cream/85 px-3 py-1 rounded-full border border-line">
                    {t.frontNote}
                  </span>
                </>
              }
            />
          </div>
          {/* FOTO BELAKANG */}
          <div className="flip-face flip-back thumb-bg relative aspect-[4/5] overflow-hidden rounded-[20px] border border-line">
            <FacePhoto
              src={profile.photoBack}
              alt={`${profile.name} — back`}
              fallback={
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-neutral-900" />
                  <div className="absolute inset-0 thumb-dots opacity-50" />
                  <div className="absolute inset-0 grid place-items-center p-6 text-center">
                    <div>
                      <p className="font-display text-3xl font-semibold">{profile.location}</p>
                      <p className="mt-1 text-xs tracking-[0.2em] uppercase text-ink/50">
                        {profile.since}
                      </p>
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-ink/60 bg-cream/85 px-3 py-1 rounded-full border border-line">
                    {t.backNote}
                  </span>
                </>
              }
            />
          </div>
        </div>
        {/* progress flip */}
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-ink/10">
          <div ref={barRef} className="h-full w-0 bg-ink rounded-full" />
        </div>
        <p className="mt-2 text-center text-xs text-muted">{t.stickyNote}</p>
      </div>
    </div>
  );
}

export default function Bio() {
  const { lang } = useLang();
  const { profile, ui: t } = content[lang];

  return (
    <section id="bio" className="px-4 py-14">
      <div id="bio-grid" className="mx-auto max-w-6xl grid md:grid-cols-[340px_1fr] gap-10 items-start">
        <StickyPortrait profile={profile} t={t} />
        <div>
          <Reveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted font-semibold">{t.bioKicker}</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2">{profile.bioTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed">{profile.bioText}</p>
            <p className="mt-3 text-muted leading-relaxed">{profile.bioSub}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-ink text-cream px-6 py-3 font-semibold hover:opacity-80"
              >
                {t.getStarted}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink px-6 py-3 font-semibold hover:bg-ink hover:text-cream transition"
              >
                GitHub
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 rounded-3xl border border-line bg-ink/[0.03] p-6">
              <p className="text-xs uppercase tracking-widest text-muted font-semibold">
                {t.factsTitle}
              </p>
              <ul className="mt-4 space-y-3 text-[15px]">
                {t.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div className="mt-8">
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-muted font-semibold">{t.journeyTitle}</p>
            </Reveal>
            <div className="mt-4 space-y-3">
              {t.journey.map((j, i) => (
                <Reveal key={j.year} delay={i * 60}>
                  <div className="card-hover flex gap-4 rounded-2xl border border-line bg-ink/[0.03] p-5">
                    <span className="font-display font-semibold text-lg w-16 shrink-0">{j.year}</span>
                    <p className="text-sm text-muted">{j.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
