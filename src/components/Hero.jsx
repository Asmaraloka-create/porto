import { content } from '../data/content';
import { useLang } from '../i18n';
import Reveal from './Reveal';

// Judul raksasa muncul per huruf dengan blur, ala hero Framer
function BlurTitle({ text }) {
  return (
    <h1 className="hero-giant uppercase mt-4 text-[16vw] md:text-[9.5rem]" aria-label={text}>
      {text.split('').map((ch, i) => (
        <span key={i} className="blur-letter" style={{ animationDelay: `${0.15 + i * 0.06}s` }} aria-hidden="true">
          {ch}
        </span>
      ))}
    </h1>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const { profile, ui: t } = content[lang];

  return (
    <section className="pt-28 md:pt-36 pb-8 px-4">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center justify-between text-xs md:text-sm font-semibold tracking-widest uppercase text-muted">
            <span>/{t.heroSince} {profile.since}</span>
            <span>©2026</span>
            <span className="hidden sm:inline">{profile.location}</span>
          </div>
        </Reveal>
        <BlurTitle key={lang} text={profile.role} />
        <Reveal delay={700}>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-ink px-4 py-1.5 text-sm font-semibold">
              🎓 {profile.name} — {profile.location}
            </span>
            <span className="rounded-full bg-ink text-cream px-4 py-1.5 text-sm">
              {t.heroStack}
            </span>
          </div>
          <p className="mt-6 max-w-xl text-[15px] text-muted">{t.heroHint}</p>
        </Reveal>
      </div>
    </section>
  );
}
