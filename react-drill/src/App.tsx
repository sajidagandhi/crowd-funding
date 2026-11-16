
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
         <h1 className="text-4xl font-bold">React Drill - Week 1</h1>
       </div>
     )
   }
   
   
   export default App
   