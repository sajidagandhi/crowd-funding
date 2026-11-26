
function EventDrill() {
  return (
    <div className="rounded-xl bg-slate-800 p-6 text-white">
      <h2 className="mb-4 text-xl font-bold">
        Event Object Drill
      </h2>

      <button
        onClick={(event) => {
          console.log(event.type, event.clientX);
        }}
        className="rounded-lg bg-indigo-600 px-4 py-2"
      >
        Click me
      </button>
    </div>
  );
}

export default EventDrill;
