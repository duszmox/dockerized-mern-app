import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;
console.log(baseURL);
//fetch data from the server

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(baseURL)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, data } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1 className="text-3xl font-bold"> Fetch data from an api </h1>{" "}
        {data.message}
      </div>
    );
  }
}

export default App;
