import React from 'react';
import propTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <div className="border-green">
          <h2 data-testid="name-card">{cardName}</h2>
          <img src={cardImage} alt={cardName} data-testid="image-card" />
          <p className="description" data-testid="description-card">
            {cardDescription}
          </p>
          <div className="card-content">
            <p className="attribute" data-testid="attr1-card">
              <span>Atributo 1</span>
              {cardAttr1}
            </p>

            <p className="attribute" data-testid="attr2-card">
              <span>Atributo 2</span>
              {cardAttr2}
            </p>

            <p className="attribute" data-testid="attr3-card">
              <span>Atributo 3</span>
              {cardAttr3}
            </p>

            <p className="rarity" data-testid="rare-card">
              <span>Raridade:</span>
              <span>{cardRare}</span>
            </p>
            {cardTrunfo ? (
              <p data-testid="trunfo-card" className="trunfo">
                 Super Trunfo
              </p>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;
