import Image from 'next/image'
import {
  ChevronLeft,
  ChevronRight,
  Coins,
  Crown,
  Flame,
  Gem,
  Gift,
  MessageCircle,
  Plus,
  Radio,
  Search,
  ShoppingBag,
  Target,
  Trophy,
  Wallet,
  Zap,
} from 'lucide-react'

const winners = [
  { art: '/images/p7k2-slot1.jpg', game: 'Book of Panda', user: 'user***555', sum: '6 192 ₽' },
  { art: '/images/p7k2-slot2.jpg', game: 'Dragon Fire', user: 'user***672', sum: '1 957 ₽' },
  { art: '/images/p7k2-slot3.jpg', game: 'Gold Clover', user: 'user***440', sum: '1 020 ₽' },
  { art: '/images/p7k2-slot4.jpg', game: 'Zeus Storm', user: 'bogd***an', sum: '2 960 ₽' },
  { art: '/images/p7k2-slot5.jpg', game: 'Fruit Blaze', user: 'neon***st', sum: '2 133 ₽' },
  { art: '/images/p7k2-slot6.jpg', game: 'Wolf Moon', user: 'user***330', sum: '9 685 ₽' },
  { art: '/images/p7k2-slot2.jpg', game: 'Dragon Fire', user: 'user***589', sum: '2 825 ₽' },
  { art: '/images/p7k2-slot5.jpg', game: 'Fruit Blaze', user: 'user***324', sum: '1 105 ₽' },
  { art: '/images/p7k2-slot1.jpg', game: 'Book of Panda', user: 'miro***54', sum: '1 088 ₽' },
  { art: '/images/p7k2-slot4.jpg', game: 'Zeus Storm', user: 'user***771', sum: '3 414 ₽' },
]

const categories = [
  { icon: Gem, label: 'Слоты' },
  { icon: Flame, label: 'Горячие' },
  { icon: Plus, label: 'Новые' },
  { icon: Crown, label: 'Топ' },
  { icon: Radio, label: 'Лайв' },
  { icon: Gift, label: 'Отыгрыш бонуса' },
  { icon: Zap, label: 'Краш' },
  { icon: Trophy, label: 'Джекпоты' },
]

const railLinks = [
  { icon: Crown, label: 'Топ слоты Panda Casino', href: '#pandacasino' },
  { icon: Coins, label: 'Бонусы Панда Казино', href: '#pandakazinooficialnyj' },
  { icon: Wallet, label: 'Касса Panda Casino', href: '#pandakazinooficialnyjsajt' },
  { icon: Gift, label: 'Магазин бонусов', href: '#pandacasinooficialnyjsajt' },
  { icon: Trophy, label: 'Турниры Панда Казино', href: '#pandakazino' },
  { icon: Radio, label: 'Лайв игры', href: '#pandakazinonline' },
  { icon: Target, label: 'Миссии', href: '#pandacasinooficialnyj' },
]

const topSlots = [
  { art: '/images/p7k2-slot1.jpg', name: 'Book of Panda' },
  { art: '/images/p7k2-slot2.jpg', name: 'Dragon Fire' },
  { art: '/images/p7k2-slot3.jpg', name: 'Gold Clover' },
  { art: '/images/p7k2-slot4.jpg', name: 'Zeus Storm' },
  { art: '/images/p7k2-slot5.jpg', name: 'Fruit Blaze' },
  { art: '/images/p7k2-slot6.jpg', name: 'Wolf Moon' },
]

export default function CasinoHero() {
  return (
    <section aria-label="Главный экран Panda Casino" className="flex flex-col">
      <header className="flex items-center justify-between gap-3 px-4 py-3 lg:hidden">
        <a href="#pandacasino" className="flex items-center gap-2">
          <Image src="/icon.png" width={32} height={32} alt="Логотип Panda Casino" />
          <span className="font-display text-sm font-black tracking-widest text-casino-text">
            PANDA CASINO
          </span>
        </a>
        <a
          href="#pandacasino-igrat"
          className="rounded-lg bg-casino-amber px-4 py-2 font-display text-xs font-extrabold text-casino-bg"
        >
          Войти
        </a>
      </header>

      <div className="flex flex-1">
        <nav
          aria-label="Разделы казино"
          className="hidden w-16 shrink-0 flex-col items-center gap-1 border-r border-casino-line bg-casino-panel py-4 lg:flex"
        >
          <Image src="/icon.png" width={36} height={36} alt="Логотип Panda Casino" className="mb-3" />
          {railLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-casino-muted transition-colors hover:bg-casino-card hover:text-casino-green"
              >
                <Icon aria-hidden className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </a>
            )
          })}
        </nav>

        <div className="flex min-w-0 flex-1 flex-col gap-3 px-3 pb-8 pt-3 md:px-4">
          <div className="grid gap-3 md:grid-cols-[1.55fr_1fr_1fr]">
            <div className="relative flex min-h-60 flex-col justify-between overflow-hidden rounded-2xl border border-casino-line bg-casino-deep p-5 md:min-h-64">
              <Image
                src="/images/p7k2-panda-hero.jpg"
                width={760}
                height={760}
                priority
                alt="Талисман Panda Casino с выигрышем"
                className="absolute inset-0 h-full w-full object-cover object-right"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-casino-deep via-casino-deep/80 to-transparent"
              />
              <div className="relative z-10 flex max-w-[70%] flex-col items-start gap-3">
                <h1 className="font-display leading-tight">
                  <span className="sr-only">Панда Казино официальный сайт — </span>
                  <span className="block text-xl font-black text-casino-green md:whitespace-nowrap md:text-4xl">
                    ДО 225% <span className="text-casino-text">+1500 ФС</span>
                  </span>
                  <span className="mt-1 block text-xs font-bold text-casino-text/90 md:text-sm">
                    на первый депозит
                  </span>
                </h1>
                <a
                  href="#pandacasino-igrat"
                  className="rounded-xl bg-casino-amber px-5 py-2.5 font-display text-sm font-extrabold text-casino-bg transition-colors hover:bg-casino-amber/90"
                >
                  Забрать бонус
                </a>
                <p className="q8v3-pay" aria-label="Способы оплаты Panda Casino">
                  <span>СБП</span>
                  <span>Pay</span>
                  <span className="italic">МИР</span>
                  <span>TRON</span>
                  <span>tether</span>
                </p>
              </div>
            </div>

            <a
              href="#pandacasinooficialnyj"
              className="relative flex min-h-24 items-center justify-center overflow-hidden rounded-2xl border border-casino-line bg-casino-card transition-colors hover:border-casino-green/40 md:min-h-32"
            >
              <Target aria-hidden className="absolute h-20 w-20 text-casino-text/10" />
              <span className="relative font-display text-base font-extrabold tracking-wide text-casino-text md:text-lg">
                МИССИИ
              </span>
            </a>
            <a
              href="#pandacasinooficialnyjsajt"
              className="relative flex min-h-24 items-center justify-center overflow-hidden rounded-2xl border border-casino-line bg-casino-card transition-colors hover:border-casino-green/40 md:min-h-32"
            >
              <ShoppingBag aria-hidden className="absolute h-20 w-20 text-casino-text/10" />
              <span className="relative max-w-24 text-center font-display text-base font-extrabold leading-snug tracking-wide text-casino-text md:text-lg">
                МАГАЗИН БОНУСОВ
              </span>
            </a>
          </div>

          <div className="q8v3-strip" role="list" aria-label="Последние выигрыши игроков Panda Casino">
            {winners.map((win) => (
              <div
                key={win.user}
                role="listitem"
                className="flex w-36 shrink-0 items-center gap-2 rounded-xl border border-casino-line bg-casino-panel p-2"
              >
                <Image
                  loading="lazy"
                  src={win.art}
                  width={44}
                  height={44}
                  alt={`Слот ${win.game} в Panda Casino`}
                  className="rounded-md"
                />
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-medium text-casino-muted">{win.user}</p>
                  <p className="text-xs font-bold text-casino-green">{win.sum}</p>
                </div>
              </div>
            ))}
          </div>

          <div role="search" className="flex gap-2">
            <label className="relative min-w-0 flex-1">
              <Search
                aria-hidden
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-casino-muted"
              />
              <input
                type="search"
                placeholder="Искать игры"
                aria-label="Искать игры в Panda Casino"
                className="w-full rounded-xl border border-casino-line bg-casino-panel py-2.5 pl-9 pr-3 text-sm text-casino-text placeholder:text-casino-muted focus:border-casino-green focus:outline-none"
              />
            </label>
            <button
              type="button"
              className="flex shrink-0 items-center gap-2 rounded-xl border border-casino-line bg-casino-card px-4 py-2.5 font-display text-sm font-bold text-casino-text"
            >
              <Coins aria-hidden className="h-4 w-4 text-casino-amber" />
              Провайдеры
            </button>
          </div>

          <div className="q8v3-strip" role="list" aria-label="Категории игр Panda Casino">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.label}
                  type="button"
                  role="listitem"
                  className="flex shrink-0 items-center gap-2 rounded-xl border border-casino-line bg-casino-panel px-4 py-2.5 font-display text-sm font-bold text-casino-text transition-colors hover:border-casino-green/40"
                >
                  <Icon aria-hidden className="h-4 w-4 text-casino-green" />
                  {cat.label}
                </button>
              )
            })}
          </div>

          <div className="flex items-center justify-between gap-2 pt-1">
            <p className="flex items-center gap-2 font-display text-lg font-black text-casino-text">
              <Flame aria-hidden className="h-5 w-5 text-casino-amber" />
              ТОП
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#pandacasino"
                className="rounded-lg border border-casino-line bg-casino-card px-3 py-1.5 text-xs font-bold text-casino-text"
              >
                Смотреть все
              </a>
              <button
                type="button"
                aria-label="Предыдущие слоты"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-casino-line bg-casino-card text-casino-text"
              >
                <ChevronLeft aria-hidden className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Следующие слоты"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-casino-line bg-casino-card text-casino-text"
              >
                <ChevronRight aria-hidden className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
            {topSlots.map((slot) => (
              <a key={slot.name} href="#pandacasino-igrat" className="flex min-w-0 flex-col gap-1.5">
                <div className="overflow-hidden rounded-xl border border-casino-line">
                  <Image
                    loading="lazy"
                    src={slot.art}
                    width={240}
                    height={240}
                    alt={`Слот ${slot.name} в Panda Casino`}
                    className="aspect-square w-full scale-[1.08] object-cover"
                  />
                </div>
                <span className="truncate text-xs font-semibold text-casino-muted">{slot.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#pandakazinooficialnyjsajt"
        aria-label="Чат поддержки Panda Casino"
        className="fixed bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-casino-teal text-casino-bg shadow-lg shadow-casino-teal/30"
      >
        <MessageCircle aria-hidden className="h-6 w-6" />
      </a>
    </section>
  )
}
