const hashtags = [
  { tag: '#pandacasino', href: '#pandacasino' },
  { tag: '#pandacasinozerkalo', href: '#pandacasinozerkalo' },
  { tag: '#pandacasinoigrat', href: '#pandacasinoigrat' },
  { tag: '#pandacasinooficialnyj', href: '#pandacasinooficialnyj' },
  { tag: '#pandacasinooficialnyjsajt', href: '#pandacasinooficialnyjsajt' },
  { tag: '#pandakazino', href: '#pandakazino' },
  { tag: '#pandakazinozerkalo', href: '#pandakazinozerkalo' },
  { tag: '#pandakazinozerkalorabochee', href: '#pandakazinozerkalorabochee' },
  { tag: '#pandakazinoigrat', href: '#pandakazinoigrat' },
  { tag: '#pandakazinonline', href: '#pandakazinonline' },
  { tag: '#pandakazinooficialnyj', href: '#pandakazinooficialnyj' },
  { tag: '#pandakazinooficialnyjsajt', href: '#pandakazinooficialnyjsajt' },
]

export default function SiteFooter() {
  return (
    <footer className="flex flex-col gap-4 border-t border-casino-line bg-casino-panel px-4 py-8 md:px-8">
      <p className="font-display text-sm font-black tracking-widest text-casino-text">PANDA CASINO</p>
      <nav aria-label="Поиск по разделам сайта через хэштеги" className="q8v3-tags">
        {hashtags.map((item) => (
          <a key={item.tag} href={item.href} className="q8v3-tag">
            {item.tag}
          </a>
        ))}
      </nav>
      <p className="text-xs leading-relaxed text-casino-muted">
        © 2026 Panda Casino. Панда Казино официальный сайт — pandacasino1.vercel.app. 18+ Азартные
        игры могут вызывать зависимость. Играйте ответственно и только на те средства, которые готовы
        потерять.
      </p>
    </footer>
  )
}
