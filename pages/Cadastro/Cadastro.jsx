import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import './CadastroUsuario.css';

function CadastroUsuarioPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar os dados para um backend, se necessário.
    console.log("Usuário cadastrado:", { nome, email, senha });
    navigate("/");  // Após o cadastro, redireciona para a página de login
  };

  return (
    <div className="cadastro-container">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Cadastro de Usuário</h2>
      <form className="grid gap-4" onSubmit={handleCadastro}>
        <div>
          <Label htmlFor="nome">Nome</Label>
          <Input 
            id="nome" 
            placeholder="Seu nome completo" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="seu@email.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <Label htmlFor="senha">Senha</Label>
          <Input 
            id="senha" 
            type="password" 
            placeholder="********" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
          />
        </div>
        <Button type="submit" className="mt-2">Cadastrar</Button>
      </form>
    </div>
  );
}

export default CadastroUsuarioPage;
