import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import INITIAL_STATE from './components/initialState';

class App extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  validationFields = () => {
    const { cardName, cardImage, cardDescription } = this.state;
    if (cardName.length > 0
      && cardImage.length > 0
      && cardDescription.length > 0) {
      return true;
    }
  };

  validationAttributes = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxAttri = 90;
    const minAttri = 0;
    const maxSum = 210;
    const intCardAttr1 = cardAttr1 * 1; // https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/#:~:text=(quantity))%3B-,How%20to%20convert%20a%20string%20to%20a%20number%20in%20JavaScript,will%20go%20before%20the%20operand.&text=We%20can%20also%20use%20the,into%20a%20floating%20point%20number.
    const intCardAttr2 = +cardAttr2; // https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/#:~:text=(quantity))%3B-,How%20to%20convert%20a%20string%20to%20a%20number%20in%20JavaScript,will%20go%20before%20the%20operand.&text=We%20can%20also%20use%20the,into%20a%20floating%20point%20number.
    const intCardAttr3 = parseInt(cardAttr3, 10);
    const AttributesSum = intCardAttr1 + intCardAttr2 + intCardAttr3;

    if (intCardAttr1 >= minAttri
      && intCardAttr1 <= maxAttri
      && intCardAttr2 >= minAttri
      && intCardAttr2 <= maxAttri
      && intCardAttr3 >= minAttri
      && intCardAttr3 <= maxAttri
      && AttributesSum <= maxSum
    ) {
      return true;
    }
  };

  handleValidations = () => {
    if (this.validationFields() && this.validationAttributes()) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    }, this.handleValidations);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    this.setState(({ registredCards }) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      registredCards: [...registredCards, newCard],
      hasTrunfo: newCard.cardTrunfo ? true : hasTrunfo,
    }));
  };

  render() {
    const { registredCards } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ... this.state }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
        />
        {
          registredCards.map(({
            cardName,
            cardDescription,
            cardImage,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardRare,
            cardTrunfo,
          }) => (
            <Card
              key={ cardName }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardImage={ cardImage }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
