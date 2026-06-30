import { Separator } from '@/components/ui/separator'

export function Footer({ site }) {
  return (
    <footer className="mt-auto">
      <Separator />
      <div className="mx-auto max-w-4xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. {site.copyright}
        </p>
        <div className="flex gap-4">
          {site.links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
