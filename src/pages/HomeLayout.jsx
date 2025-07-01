import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function HomeLayout() {
  return (
    <main className="bg-green-700 px-8 pt-0 sm:pt-10 md:pt-12">
      <MainNav />
      <Outlet />
    </main>
  );
}

export default HomeLayout;
