import { linkEvent, Component } from 'inferno';
import './App.css';

async function handleClick() {
  const url = "http://localhost:5000";
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange() {
    const data = await handleClick();
    const quote = data["Nietzsche says"];
    this.setState({value: quote})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="nietszche" alt="uncle nietzsche" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/1280px-Nietzsche187a.jpg" width="25%" height="25%" />
          <button type="button" onClick={linkEvent(this, this.handleChange)} className="button-49" role="button">Nietszche says</button>
          {this.state.value !== '' && <p className="text-sm">{this.state.value}</p>}
        </header>
      </div>
    );
  }
}
