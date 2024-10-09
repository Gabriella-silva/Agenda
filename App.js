// src/App.js
import React, { useState } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const updateEvent = (id, updatedEvent) => {
    setEvents(events.map(event => (event.id === id ? updatedEvent : event)));
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="App">
      <h1>Agenda de Compromissos</h1>
      <EventForm onAddEvent={addEvent} />
      <EventList events={events} onUpdateEvent={updateEvent} onDeleteEvent={deleteEvent} />
    </div>
  );
}

export default App;
