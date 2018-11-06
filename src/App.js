import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";

class App extends Component {
  state = {
    loading: true,
    error: null,
    items: [],
    searchTerm: ""
  };

  getResults = e => {
    e.preventDefault();
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBvXOg5FDKSnzdo-Q3AdInFGnmhXyNdt7A&cx=004783607014133881989:7owxsdjwhdk&q=${
        this.state.searchTerm
      }`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ items: data.items });
      });
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };
  render() {
    const { searchTerm, items } = this.state;
    // item.pagemap.cse_image[0].src

    return (
      <div className="app">
        <NavBar
          handleChange={this.handleChange}
          getResults={this.getResults}
          value={searchTerm}
        />
        <section className="card_wrapper">
          {items.map(item => (
            <Cards item={item} key={item.cacheId} />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
