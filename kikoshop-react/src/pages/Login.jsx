function Login() {
  return (
    <div className="login-page">
      <h2>Connexion KikoShop</h2>
      <form className="login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  )
}
export default Login;
