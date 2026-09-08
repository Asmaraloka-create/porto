import { Link } from 'react-router-dom';
import { content } from '../data/content';
import { useLang } from '../i18n';
import { ProjectCard } from '../components/Projects';

export default function WorkList() {
  const { lang } = useLang();
  const { projects, ui: t } = content[lang];

  return (
    <div className="pt-28 px-4 pb-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-widest text-muted font-bold">{t.listKicker}</p>
        <h1 className="font-display text-5xl md:text-6xl font-semibold mt-2">{t.listTitle}</h1>
        <p className="text-muted mt-2">{t.listSub}</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} />
          ))}
        </div>
        <Link to="/" className="mt-8 inline-block text-sm font-semibold underline underline-offset-4">
          {t.backHome}
        </Link>
      </div>
    </div>
  );
}
