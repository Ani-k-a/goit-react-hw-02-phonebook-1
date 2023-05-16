import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const isContactExists = this.props.addContact({
      id: nanoid(6),
      ...this.state,
    });
    if (!isContactExists) {
      this.reset();
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
        <button className={css.button}>Add contact</button>
      </form>
    );
  }
}

Form.propTypes = {
  addContact: PropTypes.func,
};
