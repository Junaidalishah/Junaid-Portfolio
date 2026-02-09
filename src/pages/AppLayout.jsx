import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_auto_1fr] pt-16 lg:grid-cols-[28rem_1fr] lg:grid-rows-[auto_1fr]">
        <Sidebar />

        <main className="mx-auto w-full max-w-4xl rounded-2xl bg-white px-4 py-6 shadow-sm dark:bg-gray-800 sm:px-6 sm:py-8 lg:mx-8 lg:mt-16 lg:px-8 lg:py-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
