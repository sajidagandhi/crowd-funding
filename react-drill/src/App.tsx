
import Avatar from './components/Avatar'

type Student = {
  name: string
  role: string
  skills: string[]
}

const student: Student = {
  name: "Aisha Khan",
  role: "Frontend Student",
  skills: ["HTML", "CSS", "JavaScript"],
}

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-slate-100">
      <div className="rounded-xl bg-slate-800 p-8">
        <Avatar name={student.name} />

        <h1 className="mt-4 text-3xl font-bold">
          {student.name}
        </h1>

        <p>{student.role}</p>

        <p>Skills: {student.skills.join(", ")}</p>
      </div>
    </div>
  )
}

export default App
