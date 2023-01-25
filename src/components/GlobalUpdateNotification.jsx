import { useIsFetching } from "@tanstack/react-query";

export function GlobalUpdateNotification() {
  const isFetching = useIsFetching();

  if (!isFetching) return null;

  return (
    <div
      className="fixed top-0 left-0
      ml-2 mt-2 py-1 px-2 whitespace-nowrap  font-bold bg-blue-500 rounded-full z-10
      flex items-center
      shadow-md shadow-blue-300 drop-shadow-lg"
    >
      <div className="border-4 border-l-transparent border-white animate-spin  w-3 h-3 rounded-lg" role="status" />
      <span className="ml-2 text-sm  text-white">Updating...</span>
    </div>
  );
}
