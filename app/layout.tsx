import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-casino-bg">
      <head>
        <meta name="yandex-verification" content="b1454a2ec3788d55" />
        <title>Панда Казино официальный сайт — играть онлайн, зеркало рабочее Panda Casino</title>
        <meta
          name="description"
          content="Panda Casino — официальный сайт онлайн казино: зеркало рабочее Panda Casino, играть в слоты онлайн, бонус до 225% и 1500 ФС на первый депозит. Панда Казино официальный — вход, игры, выплаты."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pandacasino1.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pandacasino1.vercel.app/" />
        <meta property="og:locale" content="ru_RU" />
        <meta
          property="og:title"
          content="Панда Казино официальный сайт — играть онлайн, зеркало рабочее Panda Casino"
        />
        <meta
          property="og:description"
          content="Panda Casino — официальный сайт онлайн казино: зеркало рабочее, слоты, бонус до 225% + 1500 ФС на первый депозит. Панда Казино официальный — вход и выплаты."
        />
        <meta property="og:image" content="https://pandacasino1.vercel.app/images/p7k2-panda-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Панда Казино официальный сайт — играть онлайн, зеркало рабочее Panda Casino"
        />
        <meta
          name="twitter:description"
          content="Зеркало рабочее Panda Casino, играть в слоты онлайн, бонус до 225% + 1500 ФС. Панда Казино официальный сайт — вход, игры, выплаты."
        />
        <meta name="twitter:image" content="https://pandacasino1.vercel.app/images/p7k2-panda-hero.jpg" />
        <meta name="theme-color" content="#0b0f0e" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} bg-casino-bg font-sans text-casino-text antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
