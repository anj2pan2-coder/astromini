import { MainLayout } from '@/layouts/MainLayout'
import { Home } from '@/pages/Home'

const siteData = {
  name: 'Astromini',
  logo: null, // rendered as Phosphor <Equals> icon in Header/Footer
  copyright: 'All rights reserved.',
  nav: [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  links: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
}

export default function App() {
  return (
    <MainLayout site={siteData}>
      <Home />
    </MainLayout>
  )
}
