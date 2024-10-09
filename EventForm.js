// src/components/EventForm.js
import React, { useState } from 'react';

const EventForm = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    data: '',
    horaInicio: '',
    horaFim: '',
    descricao: '',
    local: '',
    responsavel: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { ...formData, id: Date.now().toString() }; // Cria um ID único
    onAddEvent(newEvent);
    setFormData({ id: '', nome: '', data: '', horaInicio: '', horaFim: '', descricao: '', local: '', responsavel: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome do Evento" value={formData.nome} onChange={handleChange} required />
      <input type="date" name="data" value={formData.data} onChange={handleChange} required />
      <input type="time" name="horaInicio" value={formData.horaInicio} onChange={handleChange} required />
      <input type="time" name="horaFim" value={formData.horaFim} onChange={handleChange} required />
      <textarea name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleChange} required />
      <input type="text" name="local" placeholder="Local" value={formData.local} onChange={handleChange} required />
      <input type="text" name="responsavel" placeholder="Responsável" value={formData.responsavel} onChange={handleChange} required />
      <button type="submit">Adicionar Evento</button>
    </form>
  );
};

export default EventForm;
