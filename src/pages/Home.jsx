import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const pageData = {
  hero: {
    title: 'Build something minimal.',
    subtitle: 'A clean starting point for your next idea.',
    tag: 'Open Source',
  },
  features: [
    {
      id: 1,
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Vite-powered dev server with instant HMR.',
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Styled by Default',
      description: 'Tailwind CSS + shadcn primitives out of the box.',
    },
    {
      id: 3,
      icon: '🔤',
      title: 'Great Typography',
      description: 'Inter + Playfair Display via Google Fonts.',
    },
  ],
}

export function Home() {
  const { hero, features } = pageData

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center space-y-4 pt-8">
        <Badge variant="outline">{hero.tag}</Badge>
        <h1 className="font-display text-5xl font-bold tracking-tight">{hero.title}</h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">{hero.subtitle}</p>
      </section>

      {/* Features */}
      <section>
        <h2 className="font-display text-2xl font-semibold mb-6 text-center">What's inside</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {features.map((feature) => (
            <Card key={feature.id}>
              <CardHeader>
                <div className="text-3xl mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
