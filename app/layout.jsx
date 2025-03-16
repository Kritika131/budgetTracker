import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({subsets:["latin"]})
export const metadata ={
  title:"Budget Tracker",
  description:"One stop Finance Platform"
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={`${inter.className}`}
      >
        {/* header */}
        <Header/>
        <main className="min-h-screen">
          <Toaster richColors/>

        {children}
        </main>
        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container px-4 text-center text-gray-600 mx-auto">
            <p>Made by Kritika 🙃</p>
          </div>
        </footer>
      </body>
    </html>
        </ClerkProvider>
  );
}
