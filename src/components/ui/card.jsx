import { cn } from '@/lib/utils'

// Matches the white cards in the screenshot:
// white bg · 2px black border · 12px radius · 4px hard shadow · press-in on hover/click
export function Card({ className, children }) {
  return (
    <div
      className={cn(
        'bg-card ink-border rounded-md shadow-hard-sm hard-press',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children }) {
  return <div className={cn('flex flex-col gap-1.5 p-6', className)}>{children}</div>
}

export function CardTitle({ className, children }) {
  return (
    <h3 className={cn('font-display text-lg font-bold text-ink-900 leading-snug tracking-tight', className)}>
      {children}
    </h3>
  )
}

export function CardContent({ className, children }) {
  return <div className={cn('px-6 pb-6 pt-0', className)}>{children}</div>
}
