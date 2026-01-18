// src/utilities/highlight.tsx
import { ReactNode } from "react";

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="font-semibold text-gray-900">
      {children}
    </span>
  );
}
