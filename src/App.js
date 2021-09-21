import React from "react";
import {
  Switch,
  Route,
  HashRouter as Router
} from "react-router-dom"
import { Web3Service } from './services/web3service';
import MetaMaskConnector from './integrations/MetaMaskConnector';
import Nav from "react-bootstrap/Nav";
import AllRaffles from "./screens/AllRaffles";
import ActiveRaffles from "./screens/ActiveRaffles";

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
    return Web3Service.getActtiveRaffleIndex(active_raffle_index);
  }

  const buyTickets = (raffleId, amount) => {
    checkSetUp();
    return Web3Service.buyTickets(raffleId, amount);
  }

  return (
    <Router>
      <Nav fill>
        <Nav.Item>
          <Nav.Link href="/all_raffles">All Raffles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/active_raffles">Active Raffles</Nav.Link>
        </Nav.Item>
      </Nav>

      <Switch>
        <Route path="/all_raffles">
          <AllRaffles
            getRafflesLength={getRafflesLength}
            getRaffle={getRaffle}
          />
        </Route>
        <Route path="/active_raffles">
          <ActiveRaffles
            getRaffle={getRaffle}
            getActiveRafflesLength={getActiveRafflesLength}
            getActiveRaffleIndex={getActiveRaffleIndex}
            buyTickets={buyTickets}
          />
        </Route>
      </Switch>
    </Router >
  );
}
