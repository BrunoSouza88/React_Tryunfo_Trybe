import React from 'react';
// import PropTypes from 'prop-types';
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

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ... this.state }
          onInputChange={ this.handleChange }
        />
        <Card
          { ...this.state }
        />
      </div>
    );
  }
}

// App.propTypes = {
// cardName: PropTypes.string.isRequired,
// cardDescription: PropTypes.string.isRequired,
// cardAttr1: PropTypes.string.isRequired,
// cardAttr2: PropTypes.string.isRequired,
// cardAttr3: PropTypes.string.isRequired,
// cardImage: PropTypes.string.isRequired,
// cardRare: PropTypes.string.isRequired,
// cardTrunfo: PropTypes.bool.isRequired,
// // hasTrunfo: PropTypes.bool.isRequired,
// isSaveButtonDisabled: PropTypes.bool.isRequired,
// onInputChange: PropTypes.func.isRequired,
// onSaveButtonClick: PropTypes.func.isRequired,
// };

export default App;
