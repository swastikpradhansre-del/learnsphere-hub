import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <Chatbot />
  </div>
);

export default Layout;
