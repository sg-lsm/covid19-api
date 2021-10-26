import React from "react";
import "./App.css";
import Contents from "./components/Contents";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "KR" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Contents />
      </div>
    );
  }
}


export default App;
