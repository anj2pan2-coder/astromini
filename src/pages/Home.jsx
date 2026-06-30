import { Lightning, PaintBrush, TextAa } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const pageData = {
  hero: {
    badge: '400+ free calculators',
    title: 'Build something minimal.',
    subtitle: 'A clean starting point for your next idea. No clutter, no sign-up.',
    cta: { primary: 'Get started', secondary: 'View source' },
    quickLinks: ['React', 'Tailwind', 'shadcn', 'Vite', 'TypeScript'],
  },
  features: [
    {
      id: 1,
      Icon: Lightning,
      title: 'Lightning fast',
      description: 'Vite-powered dev server with instant HMR.',
    },
    {
      id: 2,
      Icon: PaintBrush,
      title: 'Styled by default',
      description: 'Tailwind CSS + shadcn primitives out of the box.',
    },
    {
      id: 3,
      Icon: TextAa,
      title: 'Great typography',
      description: 'Bricolage Grotesque + Plus Jakarta Sans via Google Fonts.',
    },
  ],
}

export function Home() {
  const { hero, features } = pageData

  return (
    <div className="space-y-20">

      {/* ── Hero ── */}
      <section className="text-center space-y-5 pt-10 max-w-2xl mx-auto">
        <Badge variant="outline">{hero.badge}</Badge>

        <h1 className="font-display text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
          {hero.title}
        </h1>

        <p className="text-base text-ink-500 leading-relaxed max-w-sm mx-auto">
          {hero.subtitle}
        </p>

        <div className="flex items-center justify-center gap-3 pt-1">
          <Button variant="primary" size="lg">{hero.cta.primary}</Button>
          <Button variant="secondary" size="lg">{hero.cta.secondary}</Button>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-2 pt-1">
          {hero.quickLinks.map((label) => (
            <button key={label} className="pill-chip">{label}</button>
          ))}
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section>
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="font-display text-xl font-bold text-ink-900 tracking-tight">
            What's inside
          </h2>
          <span className="text-xs text-ink-500">3 modules · open source</span>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {features.map(({ id, Icon, title, description }) => (
            <Card key={id} className="cursor-pointer">
              <CardHeader>
                <span className="icon-chip mb-2">
                  <Icon size={22} weight="duotone" color="#111009" />
                </span>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-ink-500 leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </div>
  )
}
