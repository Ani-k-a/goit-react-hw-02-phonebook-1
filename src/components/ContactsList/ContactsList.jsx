import React from 'react';

export function ContactsList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <div>{name}</div>
          <div>{number}</div>
          <button onClick={() => deleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
