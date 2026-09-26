'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { navigate, scrollToSection } from '@/lib/router'
import { useModals } from '@/lib/modal-context'
import { BrandLogo } from '@/components/brand-logo'
import * as React from 'react'

const links = [
  { href: '#top', label: 'Home', hasChevron: false },
  { href: '#services', label: 'Services', hasChevron: true },
  { href: '#industries', label: 'Industries', hasChevron: true },
  { href: '#process', label: 'Process', hasChevron: true },
  { href: '#team', label: 'Team', hasChevron: false },
  { href: '#contact', label: 'Contact', hasChevron: false },
]

function NavbarLogo({ mobile = false }: { mobile?: boolean }) {
  return <BrandLogo size={mobile ? 30 : 36} />
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { openStrategyCall } = useModals()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // If user refreshes or loads page with a hash like #contact, scroll and clean URL
    if (window.location.hash) {
      const hash = window.location.hash
      setTimeout(() => {
        scrollToSection(hash)
      }, 100)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#020a13]/80 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <a
        href="#top"
        onClick={handleLogoClick}
        className="absolute top-1/2 left-[max(1.5rem,calc((100vw-80rem)/2))] -translate-y-1/2 transition-opacity hover:opacity-90 md:left-[max(3rem,calc((100vw-80rem)/2))]"
        aria-label="VibeAgentic home"
      >
        <NavbarLogo />
      </a>

      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12"
      >
        <span className="invisible shrink-0" aria-hidden="true">
          <NavbarLogo />
        </span>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1.5 glass-panel md:flex">
          {links.filter((l) => l.href !== '#top').map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:bg-white/10 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center md:block">
          <button
            type="button"
            onClick={() => openStrategyCall()}
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-foreground px-6 py-2.5 text-xs font-bold text-background transition-all duration-300 hover:bg-foreground/90 hover:scale-[1.02] shadow-[0_0_20px_rgba(46,175,255,0.2)] cursor-pointer"
          >
            Book a Strategy Call
          </button>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-foreground transition-all hover:bg-white/15 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="size-5" />
        </button>
      </nav>

      {/* Clean, Authentic Mobile Menu matching reference design */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[#051624] px-7 py-8 text-white md:hidden">
          {/* Top Bar with Header Logo & Top-Right Close Icon */}
          <div className="flex items-center justify-between">
            <a
              href="#top"
              onClick={(e) => {
                handleLogoClick(e)
                setOpen(false)
              }}
              className="flex items-center"
              aria-label="VibeAgentic home"
            >
              <NavbarLogo mobile />
            </a>
            <button
              type="button"
              className="flex size-10 items-center justify-center text-white transition-opacity hover:opacity-80"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="size-7" />
            </button>
          </div>

          {/* Vertical Menu Link List - Positioned near top */}
          <div className="mt-6 flex flex-col space-y-4 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleLinkClick(e, link.href)
                  setOpen(false)
                }}
                className="group flex items-center justify-between text-left transition-colors"
              >
                <span className="font-sans text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[#8FEAFF]">
                  {link.label}
                </span>
                {link.hasChevron && (
                  <ChevronRight className="size-5 text-[#2EAFFF] transition-transform group-hover:translate-x-1" />
                )}
              </a>
            ))}
          </div>

          {/* Bottom Action Floating Pill */}
          <div className="pt-6">
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                openStrategyCall()
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-sans text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95 cursor-pointer"
            >
              <span>Book a Strategy Call</span>
              <ChevronRight className="size-4 text-[#8FEAFF]" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}