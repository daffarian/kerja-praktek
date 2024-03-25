import React from "react";
export function DisplayCard({ children }: { children: React.ReactNode }) {
  return <div className="shadow-xl rounded-b-[30px]">{children}</div>;
}