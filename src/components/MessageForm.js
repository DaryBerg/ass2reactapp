import React, { useState } from 'react';
import './MessageForm.css'

const MessageForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      const newMessage = { name, message };
      setMessages([...messages, newMessage]);
      setName('');
      setMessage('');
    } else {
      // Handle validation or display an error message
      alert('Please enter both name and message.');
    }
  };

  return (
    <div id="messageForm">
      <h2>Leave me a Message!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      <div id="messages">
        <h2>Messages from others</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              {msg.name}: {msg.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessageForm;
