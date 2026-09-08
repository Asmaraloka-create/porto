import { content } from '../data/content';
import { useLang } from '../i18n';
import Reveal from './Reveal';

export default function Services() {
  const { lang } = useLang();
  const { services, ui: t } = content[lang];

  return (
    <section id="services" className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">{t.servicesTitle}</h2>
          <p className="text-muted mt-2">{t.servicesSub}</p>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="card-hover rounded-3xl border border-line bg-ink/[0.03] p-6 h-full">
                <p className="text-xs font-bold text-muted">0{i + 1}</p>
                <h3 className="font-display text-xl font-semibold mt-2">{s.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {s.items.map((it) => (
                    <li key={it} className="rounded-full border border-line px-3 py-1.5">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
