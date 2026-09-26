'use client'

import { Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import * as React from 'react'

const reviews = [
  {
    name: 'Ayesha Khan',
    title: 'CTO • HealthTech Inc',
    logo: '/health-review.jpg',
    company: 'HealthTech Inc',
    quote: 'VibeAgentic automated our patient support workflow and reduced manual work by over 60%. The team delivered exactly what they promised with zero downtime.',
  },
  {
    name: 'Michael Chen',
    title: 'Operations Director • ManufacturePro',
    logo: '/maunfacture-review.jpg',
    company: 'ManufacturePro',
    quote: 'We replaced repetitive internal processes with AI automation. Deployment was smooth and the productivity gains across our team were immediate.',
  },
  {
    name: 'Sarah Johnson',
    title: 'Founder • RetailFlow',
    logo: '/retail-review.jpg',
    company: 'RetailFlow',
    quote: 'The AI chatbot and automation system significantly improved our customer response time while drastically cutting operational costs.',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative section-pad overflow-hidden px-5 md:px-8 border-t border-white/10 bg-[#040c16]/70">
      <div className="pointer-events-none absolute left-[-12%] top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-[#2EAFFF]/8 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#8FEAFF]">Client Feedback</p>
          <h2 className="font-sans text-3xl font-extrabold headline-tight text-balance md:text-5xl">
            Trusted by teams building with AI
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Companies rely on VibeAgentic to automate workflows, build custom AI systems, and scale business operations.
          </p>
        </Reveal>

        <Reveal
          stagger="[data-testimonial-card]"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <article
              key={review.name}
              data-testimonial-card
              className="group relative flex flex-col w-full rounded-2xl border border-white/10 bg-[#06111f]/80 p-6 shadow-lg backdrop-blur-md transition-all duration-300 ease-out hover:border-[#2EAFFF]/40 hover:-translate-y-1.5"
            >
              {/* Header: User Provided Logo & Yellow Stars */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white/10 p-0.5 shadow-sm">
                    <img
                      src={review.logo}
                      alt={review.company}
                      className="h-full w-full object-cover rounded-md"
                    />
                  </div>
                  <span className="font-sans text-xs font-extrabold tracking-wider text-foreground uppercase">
                    {review.company}
                  </span>
                </div>
                
                <div className="flex gap-1 text-[#F59E0B]" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-[#F59E0B] stroke-[#F59E0B]" aria-hidden="true" />
                  ))}
                </div>
              </div>

              {/* Client Info */}
              <div className="mt-5">
                <h3 className="font-sans text-base font-extrabold text-foreground leading-tight">
                  {review.name}
                </h3>
                <p className="mt-0.5 font-sans text-xs font-medium text-muted-foreground">
                  {review.title}
                </p>
              </div>

              {/* Quote */}
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90 font-medium">
                "{review.quote}"
              </blockquote>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}