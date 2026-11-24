
import type { Student } from "../types";

export default function IdCard({
  student,
}: {
  student: Student;
}) {
  const initials = student.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">

     
      <div className="bg-indigo-600 p-4 text-center text-white">
        <h2 className="text-lg font-bold">
          Batch 2026 - React Beginners
        </h2>
        <p className="text-sm text-indigo-100">
          STUDENT IDENTITY CARD
        </p>
      </div>

      
      <div className="p-6 text-center">

       
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-700">
          {initials}
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-800">
          {student.name}
        </h3>

        
        {student.id === "s1" && (
          <span className="mt-2 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
            Class Rep
          </span>
        )}

        <div className="mt-5 space-y-3 border-t border-slate-200 pt-4 text-left">

          <p className="text-sm text-slate-600">
            Roll Number:
            <span className="float-right font-semibold text-slate-800">
              {student.rollNumber}
            </span>
          </p>

          <p className="text-sm text-slate-600">
            Valid Till:
            <span className="float-right font-semibold text-slate-800">
              {student.validTill}
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

