import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      myDeck: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name, type, value, checked } = target;
    if (type === 'checkbox') {
      this.setState({ cardTrunfo: checked }, this.buttonEnabler);
    } else {
      this.setState({ [name]: value }, this.buttonEnabler);
    }
  };

  trunfoHandler = () => {
    const { myDeck } = this.state;
    const validade = myDeck.some((card) => card.cardTrunfo);
    if (validade) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  handleDelete = (chosenCard) => {
    const { myDeck } = this.state;
    const filtered = myDeck.filter((card) => card.cardName !== chosenCard);
    if (chosenCard.cardTrunfo === true) {
      this.setState({ hasTrunfo: false });
    }
    this.setState({ myDeck: [...filtered] }, this.trunfoHandler);
  };

  buttonEnabler = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const noventa = 90;
    const duzentosEDez = 210;
    const enable = (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && cardAttr3 !== ''
      && Number(cardAttr1) >= 0
      && Number(cardAttr1) <= noventa
      && Number(cardAttr2) >= 0
      && Number(cardAttr2) <= noventa
      && Number(cardAttr3) >= 0
      && Number(cardAttr3) <= noventa
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= duzentosEDez
    );

    this.setState({ isSaveButtonDisabled: !enable });
  };

  onSaveButtonClick = (event) => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    event.preventDefault();
    this.setState(
      (prevState) => ({
        myDeck: [
          ...prevState.myDeck,
          {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          },
        ],
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      }),
      this.trunfoHandler,
    );
  };

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
      hasTrunfo,
      myDeck,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <>
        <section className="container">
          <section className="col-form">
          <Form
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            S
          />
          </section>
          <section className="col-card">
            <h2 className="preview-title">Pré-visualização</h2>
            <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardTrunfo={ cardTrunfo }
          />
          </section>
        </section>
        <section className="cardList">
               {myDeck.map((card) => (
          <div key={ card.cardName } className="container-card">
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="button"
               className="btn-remove-card"
              data-testid="delete-button"
              onClick={ () => this.handleDelete(card.cardName) }
            >
              Excluir
            </button>
          </div>
        ))}
        </section>
      </>
    );
  }
}

export default App;
