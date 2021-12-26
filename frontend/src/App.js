import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';

import BoardsList from "./components/boards-list.component";
import AddItem from "./components/add-item.component";
import AddBoard from "./components/add-board.component";

class App extends Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Ritik Mehta
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Boards
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add-board"} className="nav-link">
                Add Board
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/boards"]} component={BoardsList} />
            <Route exact path="/add-item" component={AddItem} />
            <Route exact path="/add-board" component={AddBoard} />
          </Switch>
        </div>
        
      </div>

    );
    
  }
}

export default App;
