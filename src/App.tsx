import { Sidebar } from './components/Sidebar'
import { FishTank } from './components/FishTank'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Journalism } from './components/Journalism'

// The Experience section (components/Experience.tsx, data in data/content.ts) is kept
// but not shown for now.

function App() {
  return (
    // No background here: the page colour comes from <body>, so the fish tank's flood
    // layer (fixed, behind the content) can turn the page blue when the tank breaks.
    <div className="min-h-screen">
      <main className="mx-auto flex max-w-[1327px] flex-col gap-8 px-6 md:flex-row md:gap-16 md:px-10">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <FishTank />
          <div className="divide-y divide-ink/10">
            <About />
            <Projects />
            <Journalism />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
