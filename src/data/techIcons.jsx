import { useState } from 'react'
import claudeImg from '../assets/logos/claude.jpeg'
import chatgptImg from '../assets/logos/chatgpt-logo.jpg'
import cursorImg from '../assets/logos/cursor.jpeg'
import opencodeImg from '../assets/logos/opencode.png'
import antigravityImg from '../assets/logos/antigravity.jpeg'

const CDN = 'https://cdn.simpleicons.org'

const slugs = {
  React: 'react',
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  'Next.js': 'nextdotjs',
  HTML: 'html5',
  CSS: 'css3',
  Bootstrap: 'bootstrap',
  'Tailwind CSS': 'tailwindcss',
  'Node.js': 'nodedotjs',
  Express: 'express',
  MongoDB: 'mongodb',
  Redux: 'redux',
  'React Native': 'react',
  'Android (Kotlin)': 'kotlin',
  'iOS (Swift)': 'swift',
  Git: 'git',
  'VS Code': 'visualstudiocode',
  Figma: 'figma',
  Postman: 'postman',
  Docker: 'docker',
  AWS: 'amazonwebservices',
  Firebase: 'firebase',
  Jest: 'jest',
}

const localImages = {
  Claude: claudeImg,
  ChatGPT: chatgptImg,
  Cursor: cursorImg,
  OpenCode: opencodeImg,
  Antigravity: antigravityImg,
}

function BrandImg({ name, slug, size, className }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#888" opacity="0.35" />
        <text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#888" fontFamily="system-ui">
          {name[0]}
        </text>
      </svg>
    )
  }

  return (
    <img
      src={`${CDN}/${slug}`}
      width={size}
      height={size}
      alt={name}
      className={className}
      style={{ display: 'block' }}
      onError={() => setErrored(true)}
    />
  )
}

function LocalImg({ src, name, size }) {
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={name}
      style={{ display: 'block', objectFit: 'contain', filter: 'brightness(3)' }}
    />
  )
}

function Fallback({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#888" opacity="0.35" />
      <text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#888" fontFamily="system-ui">
        {name[0]}
      </text>
    </svg>
  )
}

export const techIcons = Object.fromEntries([
  ...Object.entries(slugs).map(([name, slug]) => [
    name,
    ({ size = 20, className }) => (
      <BrandImg name={name} slug={slug} size={size} className={className} />
    ),
  ]),
  ...Object.entries(localImages).map(([name, src]) => [
    name,
    ({ size = 20 }) => (
      <LocalImg src={src} name={name} size={size} />
    ),
  ]),
])

export function getTechIcon(name, props = {}) {
  const Icon = techIcons[name]
  if (Icon) return <Icon {...props} />
  return <Fallback name={name} {...props} />
}
