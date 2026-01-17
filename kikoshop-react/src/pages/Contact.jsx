function Contact() {
  return (
    <div className="contact-page">
      <h2>Contactez KikoMilano</h2>
      <p>Email: contact@kikoshop.com</p>
      <p>Téléphone: +212 600000000</p>
      <form>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default Contact
