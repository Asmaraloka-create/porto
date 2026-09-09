import { useState } from 'react';
import { content } from '../data/content';
import { useLang } from '../i18n';
import Reveal from './Reveal';

export default function Contact() {
  const { lang } = useLang();
  const { profile, ui: t } = content[lang];
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${lang === 'id' ? 'Halo' : 'Hello'} ${profile.name} — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="px-4 py-14">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#161513] text-[#F2F0EA] p-8 md:p-14">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold">{t.contactTitle}</h2>
          <p className="mt-3 text-white/70 max-w-xl">{t.contactSub}</p>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <Reveal>
            <form onSubmit={submit} className="space-y-3">
              <input
                required
                placeholder={t.phName}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 placeholder:text-white/40 outline-none focus:border-white/50"
              />
              <input
                required
                type="email"
                placeholder={t.phEmail}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 placeholder:text-white/40 outline-none focus:border-white/50"
              />
              <textarea
                required
                rows={4}
                placeholder={t.phMsg}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 placeholder:text-white/40 outline-none focus:border-white/50"
              />
              <button className="rounded-full bg-[#F2F0EA] text-[#161513] px-6 py-3 font-bold hover:opacity-85">
                {t.send}
              </button>
              {sent && <p className="text-sm text-emerald-300">{t.sentMsg}</p>}
            </form>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-3 text-sm">
              <a href={`mailto:${profile.email}`} className="block rounded-2xl bg-white/10 border border-white/15 p-4 hover:bg-white/15">
                ✉️ {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="block rounded-2xl bg-white/10 border border-white/15 p-4 hover:bg-white/15">
                💻 GitHub — Asmaraloka-create
              </a>
              <a href={profile.instagram} target="_blank" rel="noreferrer" className="block rounded-2xl bg-white/10 border border-white/15 p-4 hover:bg-white/15">
                📸 Instagram — @c_shinesun
              </a>
              <p className="text-white/50 pt-2">{t.fastResponse}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
