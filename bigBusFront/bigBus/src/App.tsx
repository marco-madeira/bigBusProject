import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { AppRoutes } from "./routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
