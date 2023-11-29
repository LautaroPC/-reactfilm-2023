import React, { useState } from 'react'
import { useAuth } from '../../../core/auth/hooks/use_auth'
import './login_view.css'

const LoginView = () => {
  const { login } = useAuth()

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    
    try {
      const { email, password } = Object.fromEntries(new FormData(e.target));
      if (!email || !password) throw new Error("Todos los campos son obligatorios");
      if (e.target.email.value !== "admin@example" || e.target.password.value !== "admin")
        throw new Error("La credencial ingresada es incorrecta");
      await login(email, password);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-div">
      <div className="lala">
        <h1> LOGIN </h1>
        <form onSubmit={handleSubmit}>
          <h4> Usuario </h4>
          <input type="email" name="email" />
          <h4> Contraseña </h4>
          <input type="password" name="password" />
          <br />
          <button type="submit">Iniciar Sesion</button>
          <p>{error}</p>
        </form>
      </div>
    </div>

  )
}

export default LoginView
