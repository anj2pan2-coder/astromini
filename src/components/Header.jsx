import { Equals } from '@phosphor-icons/react'

export function Header({ site }) {
  return (
    <header className="sticky top-0 z-10 bg-[#faf7f2]/90 backdrop-blur-sm border-b border-ink-900">
      <div className="mx-auto max-w-5xl px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-[6px]"
            style={{ background: '#e84d1b', border: '1.5px solid #111009' }}
          >
            <Equals size={14} weight="bold" color="#111009" />
          </span>
          <span className="font-display text-[15px] font-bold text-ink-900 tracking-tight">
            {site.name}
          </span>
        </div>

        <nav className="flex gap-6">
          {site.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
