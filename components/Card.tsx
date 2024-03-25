import React from "react";
export function DisplayCard({ children }: { children: React.ReactNode }) {
  return <div className="shadow-xl dark:border-[1px] dark:border-slate-600 rounded-[30px]">{children}</div>;
}