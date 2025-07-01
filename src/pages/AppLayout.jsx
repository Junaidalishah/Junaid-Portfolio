import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_auto_1fr] pt-16 lg:grid-cols-[28rem_1fr] lg:grid-rows-[auto_1fr]">
        <Sidebar />

        <main className="mx-auto mr-40 mt-16 w-[800px] max-w-4xl rounded-2xl bg-white px-6 py-8 shadow-sm lg:py-12 dark:bg-gray-800">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
