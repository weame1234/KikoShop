function Products() {
  const products = [
    { name: "Rouge à lèvres", price: "120 DH" },
    { name: "Fond de teint", price: "180 DH" },
    { name: "Mascara", price: "95 DH" }
  ]

  return (
    <section className="products">
      <h2>Nos Produits</h2>

      <div className="product-list">
        {products.map((p, index) => (
          <div className="product-card" key={index}>
            <div className="image">Image</div>
            <h3>{p.name}</h3>
            <p>Produit de qualité Kiko</p>
            <span>{p.price}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
