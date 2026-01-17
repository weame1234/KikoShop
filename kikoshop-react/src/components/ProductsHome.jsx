import { Link } from "react-router-dom";
import lip1 from "../assets/products/lipstick/1.jpg";
import fond1 from "../assets/products/foundation/1.jpg";
import masc1 from "../assets/products/mascara/1.jpg";
import liner1 from "../assets/products/lipliner/1.jpg";

function ProductsHome() {
  const products = [
    { id: "lipstick", name: "Rouge à lèvres", price: "140 DH", image: lip1 },
    { id: "foundation", name: "Fond de teint", price: "180 DH", image: fond1 },
    { id: "mascara", name: "Mascara", price: "200 DH", image: masc1 },
    { id: "lipliner", name: "Lip Liner", price: "80 DH", image: liner1 },
  ];

  return (
    <section className="products-home">
      <h2 className="products-title">Nos Produits 💄</h2>
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
      <Link to="/produits" className="see-all-btn">
        Voir tous les produits
      </Link>
    </section>
  );
}

export default ProductsHome;
