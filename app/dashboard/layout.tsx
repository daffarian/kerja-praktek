import MobileNav from "@/components/Mobile-Nav"
export default function Layout({ children }: { children: React.ReactNode }){
  return (
    <>
      <MobileNav />
      {children}
    </>
  );
}