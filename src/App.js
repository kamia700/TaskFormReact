import './App.css';
import { Component } from "react";
import PageTemplate from './components/PageTemplate.component';
import Form from './components/Form.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'usd',
      text: ' '
    };
  }

  onRadioChange = (evt) => {
    this.setState({value: evt.target.value, name: evt.target.name})
  }

  onInputChange = (evt) => {
    this.setState({text: evt.target.value})
  }

  onClickSave = (e) => {
    e.preventDefault();
    if(this.state.text === '') {
      this.setState({text: localStorage.getItem('text')});
    }
    localStorage.setItem('text', this.state.text);
    localStorage.setItem('radio', this.state.value);
  }

  onClickLoad = (e) => {
    e.preventDefault();
    let storageText = localStorage.getItem('text');
    let storageRadio = localStorage.getItem('radio');
    if(storageText) {
      this.setState({text: storageText});
    }
    if(storageRadio) {
      this.setState({value: storageRadio});
    }
  }

  render() {
    const { value, text } = this.state;
    return (
      <div className="App">
        <header className="header" />
        <PageTemplate>
          <Form onInputChange = { this.onInputChange }
          onRadioChange = { this.onRadioChange }
          onClickSave = { this.onClickSave }
          onClickLoad = { this.onClickLoad }
          value = { value }
          text = { text } />
        </PageTemplate>
        <footer className="footer"/>
      </div>
    );
  }
}
export default App;
