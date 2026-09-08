import { useEffect, useRef, useState } from 'react';

const WORDS =
  'Dari ide ke aksi. Produk digital yang bersih dan sederhana, dibangun untuk belajar cepat, tetap simpel, dan berguna di dunia nyata.'.split(
    ' '
  );

// Teks menyala per kata mengikuti scroll, ala Quote Section Framer
export default function ScrollQuote() {
  const refs = useRef([]);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.7;
      let count = 0;
      for (const el of refs.current) {
        if (!el) continue;
        if (el.getBoundingClientRect().top < line) count++;
        else break;
      }
      setLit((prev) => (prev === count ? prev : count));
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
    <section id="quote-section" className="px-5 py-28 md:py-36 border-t border-line">
      <p
        className="mx-auto max-w-3xl text-center font-body font-medium"
        style={{ fontSize: 'clamp(24px, 4.5vw, 36px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
      >
        {WORDS.map((w, i) => (
          <span
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`quote-word${i < lit ? ' lit' : ''}`}
          >
            {w}
          </span>
        ))}
      </p>
      <p className="mt-6 text-center text-xs tracking-[0.2em] uppercase text-ink/40">
        Scroll pelan — kata-katanya menyala
      </p>
    </section>
  );
}
