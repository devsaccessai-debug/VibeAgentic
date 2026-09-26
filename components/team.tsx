import { Reveal } from '@/components/reveal'
import * as React from 'react'

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

interface TeamMember {
  name: string
  role: string
  image: string
  objectPosition?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Yasir Ali',
    role: 'AI Engineer',
    image: '/yasir.jpg',
    objectPosition: 'object-[center_20%]',
  },
  {
    name: 'Hamayoon Ali',
    role: 'QA Expert',
    image: '/Hamayoon Bhutto.png',
    objectPosition: 'object-top',
  },
  {
    name: 'Abdul Manan',
    role: 'Junior AI Engineer',
    image: '/manan.jpg',
    objectPosition: 'object-[center_15%]',
  },
  {
    name: 'Muhammad Salman',
    role: 'Junior QA Expert',
    image: '/Salman.jpeg',
    objectPosition: 'object-[center_20%]',
  },
]

export function Team() {
  return (
    <section id="team" className="relative section-pad overflow-hidden px-5 md:px-8 border-t border-white/[0.08] bg-[#020a12]/80">
      <div className="pointer-events-none absolute left-[8%] top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#2EAFFF]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] bottom-16 -z-10 h-[320px] w-[320px] rounded-full bg-[#49F2B2]/8 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 text-center mx-auto max-w-3xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8FEAFF]">Leadership & Engineering</p>
          <h2 className="font-sans text-3xl font-extrabold headline-tight text-balance md:text-5xl">
            The people behind the systems
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Experienced minds. Structured solutions. Sustainable results.
          </p>
        </Reveal>

        {/* Top Featured Founder Card (Medium-Sized & Balanced) */}
        <Reveal className="mx-auto mb-10 max-w-lg">
          <article
            data-team-card
            className="group relative flex flex-col md:flex-row overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] shadow-xl glass-panel transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#2EAFFF]/40 hover:bg-white/[0.07]"
          >
            <div className="relative h-56 md:h-auto md:w-[210px] shrink-0 overflow-hidden bg-[#06111f]">
              <img
                src="/mustafa.png"
                alt="Mustafa Shoukat"
                className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-1.05"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040e19] via-transparent to-transparent md:hidden" />
            </div>

            <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#8FEAFF]">
                  Founder & AI Lead
                </span>
                <h3 className="mt-1 font-sans text-xl font-extrabold text-foreground group-hover:text-[#8FEAFF] transition-colors">
                  Mustafa Shoukat
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground/90">
                  Focused on AI automation, intelligent software architecture, and production-ready enterprise solutions.
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2.5 pt-3 border-t border-white/10">
                <a
                  href="https://www.linkedin.com/in/mustafashoukat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all duration-300 hover:border-[#2EAFFF]/40 hover:bg-[#2EAFFF]/10 hover:text-[#8FEAFF]"
                >
                  <LinkedinIcon className="size-3.5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Mustafa-Shoukat1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all duration-300 hover:border-[#2EAFFF]/40 hover:bg-[#2EAFFF]/10 hover:text-[#8FEAFF]"
                >
                  <GithubIcon className="size-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        {/* 4 Team Members Grid in a Single Row (Desktop 4 Columns) */}
        <Reveal
          stagger="[data-team-card]"
          staggerSpeed={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <article
              key={member.name}
              data-team-card
              className="group relative flex h-[360px] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-[#06111e] shadow-xl transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#2EAFFF]/50 hover:shadow-[0_20px_50px_rgba(46,175,255,0.2)]"
            >
              {/* Card Photo */}
              <img
                src={member.image}
                alt={member.name}
                className={`absolute inset-0 h-full w-full object-cover ${member.objectPosition || 'object-center'} brightness-[1.05] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-1.08`}
              />

              {/* Lightened Gradient Overlay focused ONLY at the bottom text area so face is crisp and fully visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020912] via-[#020912]/25 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Card Text Content */}
              <div className="relative z-10 p-6">
                <h3 className="font-sans text-xl font-extrabold text-foreground drop-shadow-md group-hover:text-[#8FEAFF] transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-xs font-semibold text-[#8FEAFF] drop-shadow-sm">
                  {member.role}
                </p>
              </div>

              {/* Bottom Subtle Accent Glow */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#2EAFFF] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}