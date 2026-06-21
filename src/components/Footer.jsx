import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="py-8 px-6 border-t border-white/[0.03]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-xs font-mono">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: 'About', id: 'about' },
            { label: 'Work', id: 'projects' },
            { label: 'Contact', id: 'contact' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors font-mono"
            >
              {label.toLowerCase()}
            </button>
          ))}
          <button
            onClick={() => scrollTo('hero')}
            className="text-xs text-gray-600 hover:text-[#FF6B35] transition-colors font-mono"
          >
            &uarr; top
          </button>
        </div>
      </div>
    </footer>
  )
}
