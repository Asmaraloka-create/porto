import { Link } from 'react-router-dom';
import { content } from '../data/content';
import { useLang } from '../i18n';

export default function BlogList() {
  const { lang } = useLang();
  const { posts, ui: t } = content[lang];

  return (
    <div className="pt-28 px-4 pb-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-widest text-muted font-bold">{t.blogKicker}</p>
        <h1 className="font-display text-5xl md:text-6xl font-semibold mt-2">{t.blogTitle}</h1>
        <p className="text-muted mt-2">{t.blogSub}</p>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="card-hover block rounded-3xl border border-line bg-ink/[0.03] p-6">
              <p className="text-xs font-bold text-muted">{p.date}</p>
              <h2 className="font-display text-2xl font-semibold mt-2">{p.title}</h2>
              <p className="text-sm text-muted mt-2">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
