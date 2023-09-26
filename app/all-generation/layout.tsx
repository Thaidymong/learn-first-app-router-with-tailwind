import SidebarScreen from "@/src/screenPage/Sidebar/Sidebarscreen";

export default function WrapperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-3 w-[100%]">
        <SidebarScreen />
        {children}
      </div>
    </>
  );
}
