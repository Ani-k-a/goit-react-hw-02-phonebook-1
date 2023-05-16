import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export function Filter({ handleChange, value }) {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        onChange={handleChange}
        value={value}
        type="text"
        name="filter"
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
