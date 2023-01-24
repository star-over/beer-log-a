export function ContainerLayout({ children }) {
  return (
  // <div className="h-full mx-auto max-w-7xl sm:px-6 lg:px-8 bg-slate-300">
    <div className="h-full container max-w-3xl min-w-min mx-auto pb-32 px-2 sm:px-8">
      {children}
    </div>
  // </div>
  );
}
