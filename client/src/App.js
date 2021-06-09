import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
})

api.interceptors.request.use(
  function(config) {
    config.headers.withCredentials = true;
    return config
  },
  function(err) {
    return Promise.reject(err)
  }
)

function App() {

  const set_cookie = async () => {

    try {

      const response = await api.get('/set-cookie')
      console.log(response)

    } catch (err) {
      console.log(err)
    }

  }

  const get_cookie = async () => {

    try {

      const response = await api.get('/get-cookie')
      console.log(response)

    } catch (err) {
      console.log(err)
    }

  }

  const remove_cookie = async () => {

    try {

      const response = await api.get('/remove-cookie')
      console.log(response)

    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={get_cookie}>Get Cookie</button>
        <button onClick={set_cookie}>Set Cookie</button>
        <button onClick={remove_cookie}>Remove Cookie</button>
      </header>
    </div>
  );
}

export default App;
