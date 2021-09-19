import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { Web3Service } from './services/web3service';
import MetaMaskConnector from './integrations/MetaMaskConnector';
import Nav from "react-bootstrap/Nav";
import { Home } from "./screens/Home";

export default function App() {

  const checkSetUp = () => {
    if (!Web3Service.isSetUp()) {
      Web3Service.setUpWeb3(
        MetaMaskConnector.getWeb3(),
        window.ethereum.selectedAddress
      );
    };
  };

  const getRafflesLength = () => {
    checkSetUp();
    return Web3Service.getRafflesLength();
  };

  const getRaffle = (index) => {
    checkSetUp();
    return Web3Service.getRaffle(index);
  };

  const getActiveRafflesLength = () => {
    checkSetUp();
    return Web3Service.getActiveRafflesLength();
  }

  const getActiveRaffleIndex = (active_raffle_index) => {
    checkSetUp();
    return Web3Service.getActtiveRaffleIndex();
  }

  return (
    <Router>
      <Nav justify variant="tabs" defaultActiveKey="/home" >
        <Nav.Item>
          <Nav.Link href="/home">All Raffles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Active Raffles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">My Raffles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Winners</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <Home 
            getRafflesLength={getRafflesLength}
            getRaffle={getRaffle}
            getActiveRafflesLength={getActiveRafflesLength}
            getActiveRaffleIndex={getActiveRaffleIndex}
          />
        </Route>
      </Switch>
    </Router >
  );
}
