import { useEffect, useState } from 'react';
import { content } from '../data/content';
import { useLang } from '../i18n';
import Reveal from './Reveal';

export default function Testimonials() {
  const { lang } = useLang();
  const { testimonials, ui: t } = content[lang];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // auto-muter tiap 4 detik ala slider Framer
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, testimonials.length]);

  useEffect(() => {
    setIndex(0);
  }, [lang]);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const item = testimonials[index];

  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold">{t.testiTitle}</h2>
              <p className="text-muted mt-2">{t.testiSub}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={prev} aria-label="prev" className="h-10 w-10 rounded-full border border-ink hover:bg-ink hover:text-cream transition">←</button>
              <button onClick={next} aria-label="next" className="h-10 w-10 rounded-full border border-ink hover:bg-ink hover:text-cream transition">→</button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="card-hover mt-8 rounded-3xl border border-line bg-ink/[0.03] p-6 md:p-10 relative overflow-hidden"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-dashed border-ink/15 animate-spin-slow" />
            <div key={`${lang}-${index}`} className="carousel-enter">
              <blockquote className="font-display text-xl md:text-3xl font-medium leading-snug max-w-3xl">
                “{item.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="thumb-bg grid h-12 w-12 place-items-center rounded-full border border-line font-display font-semibold text-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-muted text-xs">{item.role}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-ink' : 'w-4 bg-ink/15 hover:bg-ink/30'}`}
                />
              ))}
              <span className="ml-auto text-xs text-muted">
                {index + 1} / {testimonials.length} {paused ? '• paused' : '• auto'}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
