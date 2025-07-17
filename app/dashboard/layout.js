import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex flex-col flex-grow ml-64">
        <Header/>
        <main className="p-6 bg-[#f5f8fd] min-h-screen mt-16">{children}</main>
      </div>
    </div>
  );
}
