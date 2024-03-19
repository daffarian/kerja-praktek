import React from "react";
export function DisplayCard({ children }: { children: React.ReactNode }) {
  return <div className="display-card">{children}</div>;
}