import { content } from '../data/content';
import { useLang } from '../i18n';

export default function Marquee() {
  const { lang } = useLang();
  const text = content[lang].ui.marquee;
  return (
    <div className="overflow-hidden border-y border-ink bg-ink text-cream py-3 -rotate-1 my-6">
      <div className="flex whitespace-nowrap animate-marquee font-display font-semibold uppercase tracking-wide">
        <span className="pr-4">{text.repeat(4)}</span>
        <span className="pr-4">{text.repeat(4)}</span>
      </div>
    </div>
  );
}
