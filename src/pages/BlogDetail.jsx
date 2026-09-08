import { Link, useParams } from 'react-router-dom';
import { content } from '../data/content';
import { useLang } from '../i18n';

export default function BlogDetail() {
  const { slug } = useParams();
  const { lang } = useLang();
  const { posts, postBodies, ui: t } = content[lang];
  const p = posts.find((x) => x.slug === slug);
  if (!p) {
    return (
      <div className="pt-28 px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-semibold">{t.notFound}</h1>
          <Link to="/blog" className="underline">← Blog</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="pt-28 px-4 pb-14">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-bold text-muted">{p.date}</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mt-2">{p.title}</h1>
        <p className="text-muted mt-2">{p.excerpt}</p>
        <div className="mt-6 space-y-4 leading-relaxed">
          {(postBodies[p.slug] || []).map((par, i) => (
            <p key={i}>{par}</p>
          ))}
        </div>
        <div className="mt-8 flex gap-6 text-sm font-semibold">
          <Link to="/blog" className="underline underline-offset-4">{t.allPosts}</Link>
          <Link to="/" className="underline underline-offset-4">{t.home}</Link>
        </div>
      </article>
    </div>
  );
}
