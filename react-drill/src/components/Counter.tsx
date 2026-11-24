
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="space-x-3">
      <h2 className="mb-3 text-xl font-bold">
        Count: {count}
      </h2>

      <button
        onClick={() => setCount(count + 1)}
        className="rounded-lg bg-green-500 px-4 py-2 text-white"
      >
        +1
      </button>

      <button
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
        className="rounded-lg bg-red-500 px-4 py-2 text-white"
      >
        -1
      </button>

      <button
        onClick={() => setCount(0)}
        className="rounded-lg bg-gray-500 px-4 py-2 text-white"
      >
        Reset
      </button>
    </div>
  )
}

export default Counter
