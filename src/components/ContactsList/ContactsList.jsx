import React from 'react';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

export function ContactsList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <div className={css.name}>{name}</div>
          <div>{number}</div>
          <button className={css.button} onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
