import React, { useState, createContext, useContext, useEffect } from "react";
import {sectionName} from '../lib/data.ts';

import { links } from "../lib/data.ts";

type SectionName = (typeof links)[number]["name"];


type ActiveSectionContextProviderProps ={
  children:React.ReactNode,
}

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}:ActiveSectionContextProviderProps) {

  useEffect(()=>{
    // console.log(sectionName);
  })

  const [activeSection, setActiveSection] = useState<SectionName>("Todolist");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); 
  // we need to keep track of this to disable the observer temporarily when user clicks on a link
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}