import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";

class App extends Component {
  state = {
    loading: false,
    error: null,
    items: [],
    searchTerm: ""
  };

  getResults = e => {
    const { searchTerm } = this.state;
    e.preventDefault();

    if (!searchTerm) {
      console.log("it's working");
      return;
    } else {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyBvXOg5FDKSnzdo-Q3AdInFGnmhXyNdt7A&cx=004783607014133881989:7owxsdjwhdk&q=${
          this.state.searchTerm
        }`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ items: data.items, loading: true });
        });
    }
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };
  render() {
    const { searchTerm, items, loading } = this.state;
    // item.pagemap.cse_image[0].src
    let cards;
    if (loading) {
      cards = items.map(item => <Cards item={item} key={item.cacheId} />);
    } else {
      cards = <Spinner />;
    }

    return (
      <div className="app">
        <NavBar
          handleChange={this.handleChange}
          getResults={this.getResults}
          value={searchTerm}
        />
        <h1>Testing for title</h1>
        <section className="card_wrapper" style={{ marginTop: "200px" }}>
          {cards}
        </section>
      </div>
    );
  }
}

export default App;
