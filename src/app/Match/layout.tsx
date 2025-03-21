import Navbar from "../Navbar/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      {children}
    </div>
  );
}
