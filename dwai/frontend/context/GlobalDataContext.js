"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { client } from "../lib/sanity";
import {
  homepageQuery,
  partnersQuery,
  homepageGalleryQuery,
  teamsQuery,
  programsQuery,
} from "../lib/queries";

const GlobalDataContext = createContext(null);

export const GlobalDataProvider = ({ children }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["globalData"],
    queryFn: async () => {
      try {
        const [hero, partners, gallerySection, teams, programs] = await Promise.all([
          client.fetch(homepageQuery),
          client.fetch(partnersQuery),
          client.fetch(homepageGalleryQuery),
          client.fetch(teamsQuery),
          client.fetch(programsQuery),
        ]);
        return { hero, partners, gallerySection, teams, programs };
      } catch (err) {
        console.error("Error fetching global data:", err);
        throw err;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <GlobalDataContext.Provider value={{ ...data, isLoading, error }}>
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
