import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-bold leading-none cursor-pointer select-none disabled:pointer-events-none disabled:opacity-40 hard-press',
  {
    variants: {
      variant: {
        // orange-red — the "Search" button from screenshot
        primary:   'bg-brand-600 text-white ink-border shadow-hard-sm hover:bg-brand-500',
        // white card button
        secondary: 'bg-card text-ink-900 ink-border shadow-hard-sm',
        // brand-tinted soft
        soft:      'bg-brand-50 text-ink-900 ink-border shadow-hard-sm',
        // no border/shadow — text only
        ghost:     'bg-transparent text-ink-700 border-2 border-transparent hover:bg-sunken',
        // pill outline — quick-link chips below search
        outline:   'bg-transparent text-ink-600 border-[1.5px] border-ink-300 rounded-pill hover:bg-card hover:border-ink-900 shadow-none',
      },
      size: {
        xs: 'h-8 px-3 text-xs rounded-md',
        sm: 'h-[38px] px-4 text-sm rounded-md',
        md: 'h-[46px] px-5 text-base rounded-md',
        lg: 'h-[54px] px-8 text-lg rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
}
