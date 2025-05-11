import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de login
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login - Dev Barber</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="seu@email.com" required />

          <label htmlFor="senha">Senha</label>
          <input id="senha" type="password" placeholder="********" required />

          <button type="submit" className="login-button">Entrar</button>

          <p className="login-divider">ou</p>

          <button
            type="button"
            className="register-button"
            onClick={() => navigate('/cadastro-usuario')}
          >
            Cadastrar novo usuário
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
