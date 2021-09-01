import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Trailer from "./Movies/components/Trailer";
import Popularity from './Sorter/components/Popularity'
import ReleaseDates from './Sorter/components/ReleaseDates'
import Rating from './Sorter/components/Rating'
import Genres from "./Navigation/components/Genres";
import SearchResults from "./SearchBar/components/SearchResults";
import Description from "./Movies/components/Description";


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact >
            <Genres/>
          </Route>
          <Route path="/Search" exact >
            <Genres/>
          </Route>
          <Route path="/trailer/:id" render={({ match }) => (
            <Trailer id={match.params.id} />
          )} />
          <Route path="/description/:id" render={({ match }) => (
            <Description id={match.params.id} />
          )} />
          <Route path="/Sort_by/Rating" exact >
            <Rating />
          </Route>
          <Route path="/Sort_by/Release_dates" exact >
            <ReleaseDates />
          </Route>
          <Route path="/Sort_by/Popularity" exact >
            <Popularity />
          </Route>
          <Route path="/Search/:id" render={({ match }) => (
            <SearchResults id={match.params.id} />
          )} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
