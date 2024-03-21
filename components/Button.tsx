'use client'
import { Button } from "./ui/button";

export function ButtonRefresh({action, children}:{action:any,children:React.ReactNode}){
  return(
    <Button onClick={()=>action}>{children}</Button>
  )
}