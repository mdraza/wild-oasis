import SideNavigation from "@/app/_components/SideNavigation";

function layout({ children }) {
  return (
    <div className="grid lg:grid-cols-[16rem_1fr] grid-cols-1 lg:h-full mb-15 lg:gap-12 gap-6">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

export default layout;
