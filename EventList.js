// src/components/EventList.js
import React from 'react';

const EventList = ({ events, onUpdateEvent, onDeleteEvent }) => {
  return (
    <div>
      <h2>Lista de Eventos</h2>
      {events.length === 0 ? (
        <p>Nenhum evento cadastrado.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h3>{event.nome}</h3>
              <p>Data: {event.data}</p>
              <p>Hora: {event.horaInicio} - {event.horaFim}</p>
              <p>Local: {event.local}</p>
              <p>Responsável: {event.responsavel}</p>
              <p>Descrição: {event.descricao}</p>
              <button onClick={() => onDeleteEvent(event.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
