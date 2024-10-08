import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social_web_project",
  description: "Meet social_web_app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex justify-between max-w-6xl mx-auto'>
          <div className="hidden sm:inline border-r h-screen">
            <Sidebar />
          </div>        
        <div>
        {children}
        </div>
        <div>
          <News />
        </div>
        </div>
        </body>
    </html>
  );
}
