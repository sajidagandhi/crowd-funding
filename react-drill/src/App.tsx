
import Card from './components/Card'
import type { Student } from './types'

   const students: Student[] = [
     { id: "s1", name: "Aisha Khan", role: "Frontend Student", skills: ["HTML", "CSS", "JS"] },
     { id: "s2", name: "Rohit Verma", role: "Frontend Student", skills: ["HTML", "Tailwind"] },
     { id: "s3", name: "Sara Ali", role: "JS Learner", skills: ["JavaScript", "DOM"] },
     { id: "s4", name: "Dev Patel", role: "Frontend Student", skills: ["CSS", "React basics"] },
     { id: "s5", name: "Meera Nair", role: "Designer + Coder", skills: ["Figma", "HTML"] },
     {id: "s6",name: "Kabir Joshi",role: "Java Developer",skills: ["Java", "SQL"]},
 
   ]
   

function App() {
  return (
       <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
     {students.map((student) => (
       <ProfileCard key={student.id} student={student} />
     ))}
   </div>
   )
}

export default App
