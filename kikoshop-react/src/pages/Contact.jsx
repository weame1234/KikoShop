function Contact() {
  return (
    <section className="contact">
      <h2>Contactez-nous</h2>
      <form>
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea placeholder="Votre message" rows="5" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}
