'use client'

import { navigate, scrollToSection } from '@/lib/router'
import { Mail, Phone, MapPin } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scrollToSection(href)
      }, 100)
    } else {
      scrollToSection(href)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (window.location.pathname !== '/') {
      navigate('/')
    } else {
      scrollToSection('#top')
    }
  }

  return (
    <footer className="relative border-t border-white/[0.1] bg-[#020912]/90 backdrop-blur-md px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <a
            href="#top"
            onClick={handleLogoClick}
            className="transition-opacity hover:opacity-90 w-fit block cursor-pointer"
          >
            <BrandLogo size={28} />
          </a>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:text-cyan-brand cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-px bg-white/[0.08] w-full" />

        {/* High Contrast Contact Details Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm font-medium text-foreground">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href="mailto:vibeagenticai@gmail.com"
              className="inline-flex items-center gap-2 text-foreground/90 transition-colors duration-300 hover:text-cyan-brand"
            >
              <Mail className="size-4 text-cyan-brand shrink-0" />
              <span><strong className="text-cyan-brand">Email:</strong> vibeagenticai@gmail.com</span>
            </a>

            <a
              href="tel:+923126938208"
              className="inline-flex items-center gap-2 text-foreground/90 transition-colors duration-300 hover:text-cyan-brand"
            >
              <Phone className="size-4 text-cyan-brand shrink-0" />
              <span><strong className="text-cyan-brand">Phone:</strong> +92 312 6938208</span>
            </a>

            <div className="inline-flex items-center gap-2 text-foreground/90">
              <MapPin className="size-4 text-cyan-brand shrink-0" />
              <span><strong className="text-cyan-brand">Location:</strong> Rahim Yar Khan, Punjab, Pakistan</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/[0.08] w-full" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-medium text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} VibeAgentic AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span 
              onClick={() => navigate('/privacy-policy')}
              className="hover:text-cyan-brand transition-colors duration-300 cursor-pointer"
            >
              Privacy Policy
            </span>
            <span 
              onClick={() => navigate('/terms-conditions')}
              className="hover:text-cyan-brand transition-colors duration-300 cursor-pointer"
            >
              Terms & Conditions
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
