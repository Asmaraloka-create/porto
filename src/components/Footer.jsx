import { content } from '../data/content';
import { useLang } from '../i18n';

export default function Footer() {
  const { lang } = useLang();
  const { profile } = content[lang];

  return (
    <footer className="px-4 pb-10 pt-4 border-t border-line">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>©2026 {profile.name} — {profile.location}</p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</a>
          <a href={profile.instagram} target="_blank" rel="noreferrer" className="hover:text-ink">Instagram</a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink">Email</a>
        </div>
      </div>
    </footer>
  );
}
