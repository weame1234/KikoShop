import { Link } from "react-router-dom";
import lip1 from "../assets/products/lipstick/1.jpg";
import lip2 from "../assets/products/lipstick/2.jpg";
import fond1 from "../assets/products/foundation/1.jpg";
import fond2 from "../assets/products/foundation/2.jpg";
import masc1 from "../assets/products/mascara/1.jpg";
import masc2 from "../assets/products/mascara/2.jpg";
import liner1 from "../assets/products/lipliner/1.jpg";
import liner2 from "../assets/products/lipliner/2.jpg";

function ProductsPage() {
  const products = [
    { id: "lipstick", name: "Rouge à lèvres", price: "120 DH", image: lip1 },
    { id: "lipstick2", name: "Rouge à lèvres Pink", price: "130 DH", image: lip2 },
    
    { id: "foundation", name: "Fond de teint", price: "180 DH", image: fond1 },
    { id: "foundation2", name: "Fond de teint Light", price: "190 DH", image: fond2 },
    { id: "mascara", name: "Mascara", price: "95 DH", image: masc1 },
    { id: "mascara2", name: "Mascara Volume", price: "110 DH", image: masc2 },
    { id: "lipliner", name: "Lip Liner", price: "80 DH", image: liner1 },
    { id: "lipliner2", name: "Lip Liner Pink", price: "90 DH", image: liner2 },
    
  ];

  return (
    <section className="products-page">
      <h2 className="products-title">Tous les produits 💄</h2>
      <div className="product-list">
        {products.map((p) => (
          <Link to={`/produit/${p.id}`} key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <div className="product-info">
              <h3>{p.name}</h3>
              <span className="price">{p.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
