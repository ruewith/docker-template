import React from "react";
import axios from "axios";

import "./App.css";

const App = () => {
    const makeApiRequest = () => {
        axios.get("/api/testwithcurrentuser").then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="app">
            <div className="container">
                <h1>React App</h1>
                <button onClick={makeApiRequest}>Make Request</button>
                <p>Hello from dev!!!</p>
            </div>
        </div>
    );
};

export default App;
