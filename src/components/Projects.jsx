import { useState } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import { useLang } from '../i18n';
import Reveal from './Reveal';

function WorkThumb({ p }) {
  const [failed, setFailed] = useState(false);
  const showImg = p.image && !failed;

  return (
    <div className="relative h-44 overflow-hidden">
      {/* art background — selalu ada biar nggak polos */}
      <div className={`absolute inset-0 bg-gradient-to-br ${p.art || 'from-stone-400 to-stone-600'}`} />
      <div className="absolute inset-0 thumb-dots opacity-60" />
      <span className="absolute inset-0 grid place-items-center font-display text-6xl drop-shadow-lg select-none">
        {p.emoji}
      </span>
      {showImg && (
        <img
          src={p.image}
          alt={`Screenshot ${p.title}`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="work-img absolute inset-0 h-full w-full object-cover object-top"
        />
      )}
    </div>
  );
}

export function ProjectCard({ p, index = 0 }) {
  const { lang } = useLang();
  const { ui: t } = content[lang];
  const isInternal = p.demo && p.demo.startsWith('#');
  const demoBtn = p.demo ? (
    isInternal ? (
      <a href={p.demo} className="text-sm font-semibold underline underline-offset-4">
        {t.contactMe}
      </a>
    ) : (
      <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm font-semibold underline underline-offset-4">
        {t.visit}
      </a>
    )
  ) : (
    <span className="text-sm font-semibold text-muted">{t.soon}</span>
  );

  return (
    <Reveal delay={(index % 4) * 80}>
      <div className="card-hover overflow-hidden rounded-3xl border border-line bg-ink/[0.03]">
        <WorkThumb p={p} />
        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-muted">{p.category}</p>
          <h3 className="font-display text-2xl font-semibold mt-1">{p.title}</h3>
          <p className="text-sm text-muted mt-2 leading-relaxed">{p.desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((tech) => (
              <span key={tech} className="text-xs rounded-full border border-line px-2.5 py-1">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            {demoBtn}
            <Link to={`/work/${p.slug}`} className="text-sm font-semibold">
              {t.details}
            </Link>
          </div>
          <p className="mt-2 text-xs font-semibold">
            <span className="inline-block rounded-full bg-ink text-cream px-2.5 py-1">{p.status}</span>
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const { projects, ui: t } = content[lang];

  return (
    <section id="work" className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold">{t.workTitle}</h2>
              <p className="text-muted mt-2">{t.workSub}</p>
            </div>
            <Link to="/work" className="hidden sm:inline rounded-full border border-ink px-5 py-2.5 text-sm font-semibold hover:bg-ink hover:text-cream transition">
              {t.viewAllWork}
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
