import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsHome from './components/ProductsHome'
import ProductsPage from './pages/ProductsPage'
import Footer from './components/Footer'
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* الصفحة الرئيسية: Hero + 4 منتجات */}
        <Route path="/" element={<><Hero /><ProductsHome /></>} />

        {/* صفحة جميع المنتجات */}
        <Route path="/produits" element={<ProductsPage />} />

        {/* صفحة تفاصيل أي منتج */}
        <Route path="/produit/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
