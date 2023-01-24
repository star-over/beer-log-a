import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import QueryProvider from "./store/QueryProvider";

ReactDOM.createRoot(document.getElementById("root"))
  .render(
    <QueryProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  );
