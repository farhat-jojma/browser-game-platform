export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="h-7 w-48 skeleton rounded" />
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="aspect-[16/9] rounded-xl skeleton" />
        ))}
      </div>
    </div>
  );
}
