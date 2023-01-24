import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";

const queryClient = new QueryClient();
// const queryClient = new QueryClient({ defaultOptions: { queries: { cacheTime: Infinity } } });

// const persister = createSyncStoragePersister({
//   storage: window.localStorage,
//   key: "OFFLINE_CACHE",
//   throttleTime: 3_000,
// });
// persistQueryClient({ queryClient, persister, maxAge: Infinity });

function QueryProvider({ children }) {
  return (
  // <PersistQueryClientProvider
  //   client={queryClient}
  //   persistOptions={{ persister }}
  // >
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  // </PersistQueryClientProvider>
  );
}

export default QueryProvider;
