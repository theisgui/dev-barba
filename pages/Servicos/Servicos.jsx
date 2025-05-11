import './Servicos.css';

function Servicos() {
  return (
    <div className="servicos">
      <h2>Serviços</h2>
      <div className="servico-cards">
        <div className="card"><h3>Corte Masculino</h3><p>R$30</p></div>
        <div className="card"><h3>Barba</h3><p>R$20</p></div>
        <div className="card"><h3>Sobrancelha</h3><p>R$15</p></div>
        <div className="card"><h3>Pacote Completo</h3><p>R$60</p></div>
      </div>
    </div>
  );
}

export default Servicos;
