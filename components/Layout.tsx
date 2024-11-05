// Layout.tsx

import React, { ReactNode } from "react";
import { useRouter } from "next/router"; // Importing useRouter from Next.js
import { FaHome, FaPlusCircle, FaUser, FaMedal } from "react-icons/fa"; // Importing icons from react-icons
import { useAuth } from "@/hooks/useAuth";
import Login from "@/pages/login";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter(); // Initialize useRouter
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-light-green">
      {/* Top Bar */}
      <header className="fixed top-0 w-full bg-primary text-white p-4 shadow-lg z-50">
        <div className="flex justify-between items-center">
          {/* Empty First Column */}
          <div className="w-1/3"></div>

          {/* Centered DOGR */}
          <div
            className="w-1/3 text-center font-bold text-2xl cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            HotDogity
            {/* <svg
              id="Layer_1"
              data-name="Layer 1"
              // xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 101.89"
            >
              <title>DOGR</title>
              <path d="M86.25,10.25C76.11,9.2,62.8,19.23,51,28.1,45,32.69,39.25,37,34.34,39.5c-2.46,1.26-4.85,2.39-7.12,3.47-6.24,3-11.56,5.49-14.1,8.55A18.39,18.39,0,0,0,9.8,57.16a13.24,13.24,0,0,0-.69,3.41C14.08,59,19.05,57.15,24,55A160.74,160.74,0,0,0,42,46C59.41,35.79,72,23.85,86.15,10.34l.1-.09Zm17.81-1.83a3.48,3.48,0,1,1-1.91,6.7c-.55-.16-.75.77-1,1.88C100.05,22.31,98.7,28.69,87,27.21c-1-.12-1.11.68-1.26,1.63-.84,5-1.83,11-14.73,10.28-.37,0-.45.83-.54,1.82C70,46.42,69.36,53,55.39,52.23c-1.53-.09-2.73-.23-3.7-.34s-1.15-.48-1.36-.33a25.77,25.77,0,0,0-2.4,4.24c-.52,1-1.13,2.16-2,3.72-2.33,4.33-6.82,4.2-11,4.07a13.35,13.35,0,0,0-3.45.09l-.36.21a21.5,21.5,0,0,0-1.6,2.3,3.49,3.49,0,0,1-6.05-3.49,30.76,30.76,0,0,1,2.31-3.3,6,6,0,0,1,2.62-2c2-1,4.31-.89,6.74-.82,2.12.07,4.39.14,4.68-.42.7-1.28,1.36-2.55,1.93-3.64,1.94-3.72,2.88-5.5,4.48-6.66,2-1.41,3.42-1.24,6.22-.92.87.09,2,.22,3.31.3,7.26.41,7.53-2.53,7.75-5,.42-4.59.78-8.52,7.85-8.15,6.69.35,7.13-2.28,7.5-4.47.75-4.52,1.39-8.36,9-7.4,5.33.68,6-2.27,6.47-4.73,1.07-5.07,2-9.33,9.71-7.13ZM92.54,7.1C103.43-6,118.68-.23,115.62,18a11.72,11.72,0,0,1,3.28,2.9c3.95,4.9,4.54,10.32,3.57,15.71-.91,5.08-3.17,10-5.22,14.35a83.62,83.62,0,0,1-12.74,19.74,75.58,75.58,0,0,1-16.28,14l0,0a105.45,105.45,0,0,1-16.37,9.4,88.71,88.71,0,0,1-18.5,6.15,58,58,0,0,1-17.84,1.38c-6.22-.67-12.1-2.92-16.68-7.93l-.09-.09c-.37-.42-.73-.85-1.06-1.29a17,17,0,0,1-2-3.47C.31,87.36-4.69,73.72,4.87,65.33a2.49,2.49,0,0,1-.48-1.17,18.25,18.25,0,0,1,.8-8.6,22.93,22.93,0,0,1,4.17-7.14c3.23-3.89,9-6.63,15.77-9.85,2.25-1.07,4.62-2.19,7-3.41,4.55-2.33,10.07-6.49,16-10.94C62.43,13.42,78.86,1,91.92,6.75a2.53,2.53,0,0,1,.62.35ZM81.43,45.17c-2.76,2.21-5.6,4.31-8.49,6.31A126.4,126.4,0,0,1,36.65,69.29c-5.35,1.77-9.59,3.16-13.09,5.79-.31.23-.63.5-.95.79a9.79,9.79,0,0,0-3.29,6.49,10.47,10.47,0,0,0,2.23,7.07c.23.31.49.62.77.93l.08.08c3.67,4,8.48,5.82,13.61,6.37a52.88,52.88,0,0,0,16.3-1.3,83.22,83.22,0,0,0,17.48-5.8,101.11,101.11,0,0,0,15.62-9l.18-.13a70.66,70.66,0,0,0,15.24-13.08,79.29,79.29,0,0,0,12-18.63c1.93-4.12,4.07-8.72,4.85-13.13.74-4.1.32-8.19-2.57-11.79a6.56,6.56,0,0,0-2.28-1.9,5,5,0,0,0-2.62-.42c-5.64.48-11.06,6.34-15.82,11.49-1.66,1.79-3.24,3.51-4.82,5q-4,3.76-8.14,7Z" />
            </svg> */}
          </div>

          {/* Right-Aligned Profile Icon */}
          <div className="w-1/3 flex justify-end items-center">
            <div
              className="cursor-pointer"
              onClick={() => router.push("/profile")}
            >
              <FaUser className="w-6 h-6" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-16 pb-20">{children}</main>

      {/* Bottom Navigation Bar */}
      {user && (
        <nav className="fixed bottom-0 w-full bg-white border-t border-gray-300 text-gray-700">
          <div className="flex justify-around py-3">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => router.push("/dashboard")}
            >
              <FaHome className="w-6 h-6" />
            </div>

            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => router.push("/new-post")}
            >
              <FaPlusCircle className="w-6 h-6" />
            </div>

            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => router.push("/leaderboard")}
            >
              <FaMedal className="w-6 h-6" />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Layout;
