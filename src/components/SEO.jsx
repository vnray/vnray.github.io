import { personalInfo } from '../data/portfolio'

export default function SEO() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.role,
    "url": "https://yourusername.github.io/portfolio/",
    "sameAs": [
      personalInfo.social.github,
      personalInfo.social.linkedin,
      personalInfo.social.twitter,
    ],
    "knowsAbout": ["React", "React Native", "JavaScript", "TypeScript", "Frontend Development", "Mobile App Development"],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${personalInfo.name} - Portfolio`,
    "url": "https://yourusername.github.io/portfolio/",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([schema, websiteSchema], null, 2),
      }}
    />
  )
}
