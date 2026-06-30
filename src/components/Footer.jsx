// Footer: solid ink-black inverse section — matches bottom of screenshot
export function Footer({ site }) {
  return (
    <footer className="bg-ink-900 border-t-2 border-ink-900 mt-auto">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center justify-center w-6 h-6 rounded-[5px] text-xs"
            style={{ background: '#e84d1b', border: '1.5px solid rgba(255,255,255,0.2)' }}
          >
            {site.logo}
          </span>
          <span className="font-display text-sm font-bold text-ink-50">{site.name}</span>
          <span className="text-xs text-ink-500 ml-2">
            &copy; {new Date().getFullYear()} {site.copyright}
          </span>
        </div>
        <div className="flex gap-5">
          {site.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ink-400 hover:text-brand-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
