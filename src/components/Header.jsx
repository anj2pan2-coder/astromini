import { Separator } from '@/components/ui/separator'

export function Header({ site }) {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{site.logo}</span>
          <span className="font-display text-xl font-bold tracking-tight">{site.name}</span>
        </div>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          {site.nav.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <Separator />
    </header>
  )
}
