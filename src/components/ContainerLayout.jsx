export function ContainerLayout({ children }) {
  return (
    <div className="h-full container max-w-lg min-w-min mx-auto pb-32 px-2">
      {children}
    </div>
  );
}
