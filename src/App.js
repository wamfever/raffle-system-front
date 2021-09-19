import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { Web3Service } from './services/web3service';
import MetaMaskConnector from './integrations/MetaMaskConnector';
import Nav from "react-bootstrap/Nav";
import AllRaffles from "./screens/AllRaffles";

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

  const [activeSection, setActiveSection] = React.useState('active_raffles');

  return (
    <Router>
      <Nav justify variant="tabs" defaultActiveKey="/all_raffles" onSelect={(event) => setActiveSection(event)}>
        <Nav.Item>
          <Nav.Link href="/all_raffles">All Raffles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/active_raffles">Active Raffles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">My Raffles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Winners</Nav.Link>
        </Nav.Item>
      </Nav>

      <Switch>
        <Route path="/all_raffles">
          <AllRaffles
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
