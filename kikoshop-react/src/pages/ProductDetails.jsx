import { useParams } from "react-router-dom";

import lip1 from "../assets/products/lipstick/1.jpg";
import lip2 from "../assets/products/lipstick/2.jpg";


import fond1 from "../assets/products/foundation/1.jpg";
import fond2 from "../assets/products/foundation/2.jpg";

import masc1 from "../assets/products/mascara/1.jpg";
import masc2 from "../assets/products/mascara/2.jpg";

import liner1 from "../assets/products/lipliner/1.jpg";
import liner2 from "../assets/products/lipliner/2.jpg";

function ProductDetails() {
  const { id } = useParams();

  const products = {
    lipstick: {
      name: "Rouge à lèvres",
      price: "120 DH",
      description: "Rouge à lèvres KikoShop, longue tenue et couleur intense.",
      images: [lip1, lip2],
    },
    foundation: {
      name: "Fond de teint",
      price: "180 DH",
      description: "Fond de teint léger et naturel.",
      images: [fond1, fond2],
    },
    mascara: {
      name: "Mascara",
      price: "95 DH",
      description: "Mascara volume extrême.",
      images: [masc1, masc2],
    },
    lipliner: {
    name: "Lip Liner",
    price: "80 DH",
    description: "creamy colour comfort lip liner.",
    images: [liner1, liner2],
},


  };

  const product = products[id];

  if (!product) return <h2>Produit introuvable</h2>;

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <strong>{product.price}</strong>

      <div className="gallery">
        {product.images.map((img, i) => (
          <img key={i} src={img} alt={product.name} />
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
