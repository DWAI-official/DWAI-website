"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { GlobalDataProvider } from "../context/GlobalDataContext";

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalDataProvider>
        {children}
      </GlobalDataProvider>
    </QueryClientProvider>
  );
}
