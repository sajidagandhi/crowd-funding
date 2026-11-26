
import { useState } from "react";

function FAQCard({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl bg-slate-800 p-5 text-white">

     
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left font-semibold"
      >
        {question}

        <span>
          {open ? "▲" : "▼"}
        </span>
      </button>

      
      {open && (
        <p className="mt-4 border-t border-slate-600 pt-3 text-slate-300">
          {answer}
        </p>
      )}

    </div>
  );
}

export default FAQCard;
