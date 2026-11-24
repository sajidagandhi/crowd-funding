import Avatar from './Avatar'
import Badge from './Badge'
import type { Student } from '../types'

function Card({ student }: { student: Student }) {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-slate-800 p-8 text-slate-100 shadow-xl">
      <Avatar name={student.name} />

      <h2 className="mt-4 text-2xl font-bold">
        {student.name}
      </h2>

      <p className="mt-1 text-slate-400">
        {student.role?}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {student.skills?.map((skill) => (
          <Badge key={skill} label={skill} />
        ))}
      </div>
    </div>
  )
}

export default Card