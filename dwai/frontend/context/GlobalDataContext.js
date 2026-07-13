"use client";


import { createContext, useContext, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { sanityFetch } from "../lib/sanity";
import { globalDataQuery } from "../lib/queries";

const GlobalDataContext = createContext(null);

// Export fetcher for Server Prefetching in layout.js
export const fetchGlobalData = async () => {
  return sanityFetch({ query: globalDataQuery });
};

export const GlobalDataProvider = ({ children }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["globalData"],
    queryFn: fetchGlobalData,
    staleTime: 1000 * 60 * 60, // 1 hour - Global data rarely changes
    refetchOnWindowFocus: false,
    refetchOnMount: false, // Rely on hydration from server
    retry: 1,
  });

  // Memoize context value to prevent unnecessary re-renders of consumers
  const value = useMemo(() => ({
    ...data,
    isLoading,
    error
  }), [data, isLoading, error]);

  return (
    <GlobalDataContext.Provider value={value}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = () => {
  const context = useContext(GlobalDataContext);
  if (!context) {
    throw new Error("useGlobalData must be used within a GlobalDataProvider");
  }
  return context;
};
