"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const RootProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default RootProviders;
