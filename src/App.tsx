import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Solutions from "@/pages/Solutions";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
