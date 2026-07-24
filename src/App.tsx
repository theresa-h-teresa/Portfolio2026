import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Journalism } from './components/Journalism'

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main className="mx-auto flex max-w-[1327px] flex-col gap-8 px-6 md:flex-row md:gap-16 md:px-10">
        <Sidebar />
        <div className="min-w-0 flex-1 divide-y divide-ink/10">
          <About />
          <Experience />
          <Projects />
          <Journalism />
        </div>
      </main>
    </div>
  )
}

export default App
