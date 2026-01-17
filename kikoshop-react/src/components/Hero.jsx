import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h2>Découvrez la beauté avec Kiko Milano</h2>
      <p>Make up moderne, simple et élégant</p>
      <Link to="/produits" className="hero-btn">
       Voir les produits
      </Link>
    </section>
  )
}

export default Hero
