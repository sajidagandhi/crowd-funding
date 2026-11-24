
function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-300">
      {label}
    </span>
  )
}

export default Badge
