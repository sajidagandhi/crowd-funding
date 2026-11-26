
import EventDrill from "./components/EventDrill";
import FAQCard from "./components/FAQCard";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <h1 className="mb-6 text-3xl font-bold text-slate-800">
        React Event Practice
      </h1>

      <EventDrill />

      <h2 className="mb-4 mt-8 text-2xl font-bold text-slate-800">
        Frequently Asked Questions
      </h2>

      <div className="mx-auto max-w-2xl space-y-4">

        <FAQCard
          question="What is React?"
          answer="React is a JavaScript library used to build user interfaces."
        />

        <FAQCard
          question="What is useState?"
          answer="useState is a React Hook that allows components to store and update state."
        />

        <FAQCard
          question="What are React props?"
          answer="Props are information passed from a parent component to a child component."
        />

      </div>

    </div>
  );
}

export default App;
