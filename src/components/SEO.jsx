import { useEffect } from 'react'
import { personalInfo, skills, projects } from '../data/portfolio'

const SITE_URL = 'https://vnray.github.io'

export default function SEO() {
  useEffect(() => {
    document.title = `${personalInfo.name} - ${personalInfo.role} | Portfolio`

    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', `${personalInfo.role} with 4+ years of experience building performant web applications using React, Node.js, MongoDB, and modern JavaScript.`)
  }, [])

  const allSkills = [
    ...skills.frontend.map(s => s.name),
    ...skills.backend.map(s => s.name),
    ...skills.mobile.map(s => s.name),
    ...skills.tools,
  ]

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.role,
    "url": SITE_URL,
    "email": personalInfo.email,
    "sameAs": [
      personalInfo.social.github,
      personalInfo.social.linkedin,
    ],
    "knowsAbout": allSkills,
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${personalInfo.name} - Portfolio`,
    "url": SITE_URL,
    "description": `${personalInfo.role} portfolio showcasing projects in React, Node.js, MongoDB, and modern web development.`,
  }

  const worksSchemas = projects.filter(p => p.liveUrl && p.liveUrl !== 'https://example.com').map((p) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": p.title,
    "description": p.description,
    "url": p.liveUrl,
    "keywords": p.tech?.join(', '),
  }))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([personSchema, websiteSchema, ...worksSchemas], null, 2),
      }}
    />
  )
}
