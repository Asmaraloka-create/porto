import { Link, useLocation, useNavigate } from 'react-router-dom';
import { content } from '../data/content';
import LangToggle, { useLang } from '../i18n';

export default function Navbar() {
  const { lang } = useLang();
  const { profile, ui: t } = content[lang];
  const navigate = useNavigate();
  const location = useLocation();

  // Pindah ke section home dari halaman mana pun (hormati basename /porto/)
  const goSection = (e, id) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  const linkCls = 'hover:opacity-60 cursor-pointer';

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <nav className="flex items-center justify-between rounded-full border border-line bg-cream/85 backdrop-blur px-4 py-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-cream font-black">
              C
            </span>
            <span className="font-display font-semibold tracking-tight">{profile.name}</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a onClick={(e) => goSection(e, 'bio')} className={linkCls}>{t.navBio}</a>
            <a onClick={(e) => goSection(e, 'services')} className={linkCls}>{t.navServices}</a>
            <Link to="/work" className="hover:opacity-60">{t.navWork}</Link>
            <Link to="/blog" className="hover:opacity-60">{t.navBlog}</Link>
            <a
              onClick={(e) => goSection(e, 'contact')}
              className="rounded-full bg-ink text-cream px-4 py-2 hover:opacity-80 cursor-pointer"
            >
              {t.navTalk}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="md:hidden rounded-full bg-ink text-cream px-4 py-2 text-sm"
            >
              {t.navContact}
            </a>
            <LangToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
