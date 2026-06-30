import { cn } from '@/lib/utils'

export function Badge({ className, variant = 'outline', children }) {
  const variants = {
    // thin pill outline — matches "400+ free calculators" in screenshot
    outline: 'border border-ink-300 text-ink-600 bg-transparent rounded-pill px-3 py-1 text-xs',
    // filled orange
    filled:  'bg-brand-600 text-white ink-border rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wide',
    // soft salmon tint
    soft:    'bg-brand-50 text-ink-700 ink-border rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wide',
  }
  return (
    <span className={cn('inline-flex items-center font-medium', variants[variant], className)}>
      {children}
    </span>
  )
}
