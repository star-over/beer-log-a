import { useIsFetching } from "@tanstack/react-query";

export function GlobalUpdateNotification() {
  const isFetching = useIsFetching();

  if (!isFetching) return null;

  return (
    <div
      className="fixed top-0 left-0
      z-10 ml-2 mt-2 flex items-center  whitespace-nowrap rounded-full bg-blue-500 py-1
      px-2 font-bold
      shadow-md shadow-blue-300 drop-shadow-lg"
    >
      <div className="h-3 w-3 animate-spin rounded-lg  border-4 border-white border-l-transparent" role="status" />
      <span className="ml-2 text-sm  text-white">Updating...</span>
    </div>
  );
}
