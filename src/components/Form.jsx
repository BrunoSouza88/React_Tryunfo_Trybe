import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name-input">
          <input type="text" name="name-input" id="" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          <textarea
            name="description-input"
            id=""
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          <input
            type="number"
            name="attr1-input"
            id=""
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr1-input">
          <input
            type="number"
            name="attr1-input"
            id=""
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr1-input">
          <input
            type="number"
            name="attr3-input"
            id=""
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          <input
            type="text"
            name="image-input"
            id=""
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          <select
            name="rare-input"
            id=""
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            name="trunfo-input"
            id=""
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
