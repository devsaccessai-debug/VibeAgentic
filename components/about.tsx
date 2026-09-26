'use client'

import { Reveal } from '@/components/reveal'
import * as React from 'react'

const features = [
  {
    logo: '/tech-logos/openai.svg',
    title: 'Custom AI Models',
    desc: 'Fine-tuned LLMs trained on your business data and industry logic.',
  },
  {
    logo: '/tech-logos/langgraph.svg',
    title: 'Process Automation',
    desc: 'Automating high-volume workflows, docs, and customer interactions.',
  },
  {
    logo: '/tech-logos/fastapi.svg',
    title: 'Real-Time Intelligence',
    desc: 'Ultra-low latency AI pipelines delivering decisioning in milliseconds.',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-12 md:py-16 px-5 md:px-8 border-t border-white/[0.08] bg-[#020a13]/70">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="slide-right" className="mx-auto max-w-3xl text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-[#8FEAFF]">Our Philosophy</p>
          <h2 className="font-sans text-2xl font-extrabold headline-tight text-balance md:text-4xl">
            We don't just talk about AI. <br />
            <span className="gradient-brand-text">We build systems that work.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            VibeAgentic AI is a team of software engineers, AI researchers, and automation specialists.
            We turn complex artificial intelligence into simple, powerful tools that deliver measurable growth.
          </p>
        </Reveal>

        <Reveal
          variant="zoom-in"
          stagger="[data-feature]"
          staggerSpeed={0.1}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-4xl mx-auto"
        >
          {features.map((item) => (
            <div
              key={item.title}
              data-feature
              className="group flex flex-col items-center text-center rounded-xl border border-white/10 bg-white/[0.035] p-4.5 glass-panel transition-all duration-300 hover:-translate-y-1 hover:border-[#2EAFFF]/40 hover:bg-white/[0.06] hover:shadow-[0_12px_36px_rgba(46,175,255,0.1)]"
            >
              <div className="mb-3.5 flex size-11 items-center justify-center rounded-lg border border-white/10 bg-[#061724] p-2.5 shadow-sm transition-all duration-300 group-hover:border-[#2EAFFF]">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="h-full w-full object-contain filter invert brightness-200 transition-opacity"
                />
              </div>
              <h3 className="font-sans text-base font-extrabold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground/85">{item.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
