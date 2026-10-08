import CasinoHero from '@/components/casino-hero'
import SeoSheet from '@/components/seo-sheet'
import SiteFooter from '@/components/site-footer'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <CasinoHero />
      <SeoSheet />
      <SiteFooter />
    </main>
  )
}
