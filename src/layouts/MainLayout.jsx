import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function MainLayout({ site, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header site={site} />
      <main className="flex-1 mx-auto w-full max-w-4xl px-6 py-12">
        {children}
      </main>
      <Footer site={site} />
    </div>
  )
}
