
import IdCard from "./components/IdCard";
import type { Student } from "./types";

const students: Student[] = [
  {
    id: "s1",
    name: "Harsh Patel",
    rollNumber: "101",
    validTill: 2026,
  },
  {
    id: "s2",
    name: "Priya Sharma",
    rollNumber: "102",
    validTill: 2026,
  },
  {
    id: "s3",
    name: "Rahul Mehta",
    rollNumber: "103",
    validTill: 2026,
  },
  {
    id: "s4",
    name: "Neha Shah",
    rollNumber: "104",
    validTill: 2027,
  },
  {
    id: "s5",
    name: "Aina Desai",
    rollNumber: "105",
    validTill: 2027,
  },
  {
    id: "s6",
    name: "Ananya Joshi",
    rollNumber: "106",
    validTill: 2027,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">

      
      <div className="mx-auto mb-8 max-w-6xl">
        <h1 className="text-3xl font-bold text-slate-800">
          Student ID Gallery
        </h1>

        <p className="mt-2 text-slate-500">
          {students.length} students enrolled
        </p>
      </div>

      
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {students.map((student) => (
          <IdCard
            key={student.id}
            student={student}
          />
        ))}

      </div>
    </div>
  );
}

export default App;
