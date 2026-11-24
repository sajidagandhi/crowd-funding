
import LikeButton from "./components/LikeButton"
import Counter from "./components/Counter"
import NameSwapper from "./components/NameSwapper"

function App() {
  return (
    <div className="min-h-screen space-y-8 bg-slate-900 p-10 text-white">

      <div>
        <h1 className="mb-3 text-2xl font-bold">
          1. Like Button
        </h1>
        <LikeButton />
      </div>

      <div>
        <h1 className="mb-3 text-2xl font-bold">
          2. Counter
        </h1>
        <Counter />
      </div>

      <div>
        <h1 className="mb-3 text-2xl font-bold">
          3. Name Swapper
        </h1>
        <NameSwapper />
      </div>

    </div>
  )
}

export default App
