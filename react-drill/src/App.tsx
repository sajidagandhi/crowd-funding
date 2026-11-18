
import Card from './components/Card'
import type { Student } from './types'

const student: Student = {
  name: "Aisha Khan",
  role: "Frontend Student",
  skills: ["HTML", "CSS", "JavaScript"],
}

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-6">
      <Card student={student} />
    </div>
  )
}

export default App 