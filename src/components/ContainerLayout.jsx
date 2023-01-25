export function ContainerLayout({ children }) {
  return (
    <div className="h-full container max-w-3xl min-w-min mx-auto pb-32 px-2 sm:px-8">
      {children}
    </div>
  );
}
