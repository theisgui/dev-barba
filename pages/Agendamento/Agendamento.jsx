import './Agendamento.css';

function Agendamento() {
  return (
    <div className="agendamento">
      <h2>Agende seu Horário</h2>
      <form>
        <input type="text" placeholder="Nome completo" />
        <input type="tel" placeholder="Telefone" />
        <input type="date" />
        <input type="time" />
        <button type="submit">Confirmar Agendamento</button>
      </form>
    </div>
  );
}

export default Agendamento;
