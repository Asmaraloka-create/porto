import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { content } from '../data/content';
import { useLang } from '../i18n';

export default function WorkDetail() {
  const { slug } = useParams();
  const { lang } = useLang();
  const { projects, ui: t } = content[lang];
  const p = projects.find((x) => x.slug === slug);
  const [failed, setFailed] = useState(false);

  if (!p) {
    return (
      <div className="pt-28 px-4 pb-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-semibold">{t.notFound}</h1>
          <Link to="/work" className="underline">{t.allWork}</Link>
        </div>
      </div>
    );
  }

  const showImg = p.image && !failed;

  return (
    <div className="pt-28 px-4 pb-14">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-muted">{p.category}</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mt-2">{p.title}</h1>
        <p className="mt-3 text-muted leading-relaxed">{p.longDesc}</p>
        <div className="relative mt-6 h-64 rounded-3xl overflow-hidden border border-line">
          <div className={`absolute inset-0 bg-gradient-to-br ${p.art || 'from-stone-400 to-stone-600'}`} />
          <div className="absolute inset-0 thumb-dots opacity-60" />
          <span className="absolute inset-0 grid place-items-center text-7xl">{p.emoji}</span>
          {showImg && (
            <img
              src={p.image}
              alt={`Screenshot ${p.title}`}
              onError={() => setFailed(true)}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          )}
        </div>
        {p.progress && (
          <div className="mt-4">
            <div className="h-2 rounded-full bg-ink/10 overflow-hidden">
              <div className="h-full bg-ink rounded-full" style={{ width: `${p.progress}%` }} />
            </div>
            <p className="text-xs text-muted mt-1">{t.progressNote(p.progress)}</p>
          </div>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((tech) => (
            <span key={tech} className="text-xs rounded-full border border-line px-3 py-1.5">{tech}</span>
          ))}
        </div>
        <p className="mt-3 text-sm font-bold">
          {t.status} <span className="rounded-full bg-ink text-cream px-3 py-1">{p.status}</span>
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.demo && !p.demo.startsWith('#') && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="rounded-full bg-ink text-cream px-6 py-3 font-bold hover:opacity-80">
              {t.openDemo}
            </a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="rounded-full border border-ink px-6 py-3 font-bold hover:bg-ink hover:text-cream transition">
              GitHub
            </a>
          )}
        </div>
        <div className="mt-8 flex gap-6 text-sm font-semibold">
          <Link to="/work" className="underline underline-offset-4">{t.allWork}</Link>
          <Link to="/" className="underline underline-offset-4">{t.home}</Link>
        </div>
      </div>
    </div>
  );
}
