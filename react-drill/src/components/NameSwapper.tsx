
import { useState } from "react"

function NameSwapper() {
  const [name, setName] = useState("Aisha")

  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">
        Name: {name}
      </h2>

      <button
        onClick={() =>
          setName(name === "Aisha" ? "Rohit" : "Aisha")
        }
        className="rounded-lg bg-purple-500 px-4 py-2 text-white"
      >
        Change Name
      </button>
    </div>
  )
}

export default NameSwapper
