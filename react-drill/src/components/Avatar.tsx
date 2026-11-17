
function Avatar({ name }: { name: string }) {
  const initials = name
    .trim()
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white">
      {initials}
    </div>
  )
}

export default Avatar
