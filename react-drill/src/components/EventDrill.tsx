
import { useState } from "react";

function EventDrill() {
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="space-y-6 rounded-xl bg-slate-800 p-6 text-white">

      <h2 className="text-xl font-bold">
        React Event Practice
      </h2>

      
      <div>
        <h3 className="mb-2 font-semibold">1. Event Object</h3>

        <button
          onClick={(event) => {
            console.log(event.type, event.clientX);
          }}
          className="rounded-lg bg-indigo-600 px-4 py-2"
        >
          Check Click Position
        </button>
      </div>

     
      <div className="border-t border-slate-600 pt-4">
        <h3 className="mb-3 font-semibold">2. Counter</h3>

        <p className="mb-3 text-3xl font-bold">
          {count}
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => {
              // Both direct updates would read the same old count.
              // Functional updates use the latest pending state.
              setCount((c) => c + 1);
              setCount((c) => c + 1);
            }}
            className="rounded-lg bg-green-600 px-4 py-2"
          >
            Add 2
          </button>

          <button
            onClick={handleReset}
            className="rounded-lg bg-red-600 px-4 py-2"
          >
            Reset
          </button>
        </div>
      </div>

    </div>
  );
}

export default EventDrill;
