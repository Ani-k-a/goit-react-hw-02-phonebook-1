import React from 'react';

export function Filter({ handleChange, value }) {
  return (
    <label>
      Find contacts by name
      <input onChange={handleChange} value={value} type="text" name="filter" />
    </label>
  );
}
