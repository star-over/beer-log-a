/* eslint-disable object-curly-newline */
// import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { persistQueryClient, PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

const queryClient = new QueryClient({ defaultOptions: {
  queries: {
    refetchOnWindowFocus: false,
  }
}
});

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       cacheTime: 1000 * 60 * 1, // 1 minute
//       refetchOnWindowFocus: false,
//     }
//   }
// });

// const persister = createSyncStoragePersister({
//   storage: window.localStorage,
//   key: "OFFLINE_CACHE",
//   throttleTime: 3_000,
// });
// persistQueryClient({ queryClient, persister, maxAge: Infinity });

function QueryProvider({ children }) {
  return (
  // <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  /* </PersistQueryClientProvider> */
  );
}

export default QueryProvider;
