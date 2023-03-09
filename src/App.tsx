import * as React from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const getData = () => {

        axios.get('https://localhost:7207/WeatherForecast/GetTestString')
            .then(function (response) {
                // eslint-disable-next-line no-debugger
                debugger;
                console.log(response);
            })
            .catch(function (error) {
                // eslint-disable-next-line no-debugger
                debugger;
                console.log(error);
            });
    }

    return (
        <div className="App">

        <button onClick={() => getData()} > kliknij aby załadować dane</button>

            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
        </div>
    );
}

export default App;
