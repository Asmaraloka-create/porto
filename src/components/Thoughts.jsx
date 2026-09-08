import { Link } from 'react-router-dom';
import { content } from '../data/content';
import { useLang } from '../i18n';
import Reveal from './Reveal';

export default function Thoughts() {
  const { lang } = useLang();
  const { posts, ui: t } = content[lang];

  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">{t.thoughtsTitle}</h2>
          <p className="text-muted mt-2">{t.thoughtsSub}</p>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <Link
                to={`/blog/${p.slug}`}
                className="card-hover block rounded-3xl border border-line bg-ink/[0.03] p-6"
              >
                <p className="text-xs font-bold text-muted">{p.date}</p>
                <h3 className="font-display text-2xl font-semibold mt-2">{p.title}</h3>
                <p className="text-sm text-muted mt-2">{p.excerpt}</p>
                <p className="mt-4 text-sm font-semibold underline underline-offset-4">{t.read}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link to="/blog" className="mt-6 inline-block rounded-full border border-ink px-5 py-2.5 text-sm font-semibold hover:bg-ink hover:text-cream transition">
            {t.viewAllPosts}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
