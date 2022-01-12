import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      onInputChange,
      onSaveButtonClick,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.props;
    return (
      <div className="form">
        <form>
          <label htmlFor="cardName">
            Nome
            <input
              value={ cardName }
              name="cardName"
              id="cardName"
              onChange={ onInputChange }
              type="text"
              data-testid="name-input"
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição
            <input
              value={ cardDescription }
              name="cardDescription"
              id="cardDescription"
              onChange={ onInputChange }
              type="textarea"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="cardAttr1">
            Attr1
            <input
              value={ cardAttr1 }
              name="cardAttr1"
              id="cardAttr1"
              onChange={ onInputChange }
              type="number"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="cardAttr2">
            Attr2
            <input
              value={ cardAttr2 }
              name="cardAttr2"
              id="cardAttr2"
              onChange={ onInputChange }
              type="number"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="cardAttr3">
            Attr3
            <input
              value={ cardAttr3 }
              id="cardAttr3"
              name="cardAttr3"
              onChange={ onInputChange }
              type="number"
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="imagem">
            Imagem
            <input
              value={ cardImage }
              name="cardImage"
              id="imagem"
              onChange={ onInputChange }
              type="text"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="cardRare">
            Raridade
            <select
              value={ cardRare }
              name="cardRare"
              id="cardRare"
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            Super Trunfo
            {hasTrunfo ? (
              'Você já tem um Super Trunfo em seu baralho'
            ) : (
              <input
                checked={ cardTrunfo }
                id="cardTrunfo"
                name="cardTrunfo"
                onChange={ onInputChange }
                type="checkbox"
                data-testid="trunfo-input"
              />
            )}
          </label>
          <button
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
