import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ConnectModal from "../components/ConnectModal";
import RaffleTable from "../components/RaffleTable";

const ActiveRaffles = (props) => {

    const [connected, setConnected] = React.useState(false);
    const [connectModal, setConnectModal] = React.useState(true);
    const [raffles, setRaffles] = React.useState([]);

    const closeModal = () => {
        setConnectModal(false);
    };

    const addRaffle = async (active_raffle_index) => {
        await props.getRaffle(active_raffle_index).then(result => {
            setRaffles(raffles => [...raffles, result]);
        });
    };

    const getRaffles = async () => {
        const activeRafflesLength = await props.getActiveRafflesLength();
        for (let i = 0; i < activeRafflesLength; i++) {
            await props.getActiveRaffleIndex(i).then(active_raffle_index => {
                console.log(active_raffle_index);
                addRaffle(active_raffle_index);
            });
        };
    };

    const initWeb3Interface = async () => {
        setTimeout(() => {
            setConnected(true);
            getRaffles();
            closeModal();
        }, 2000);
    };

    return (
        <Container fluid>
            <Row>
                <Col>
                    {connectModal ?
                        <ConnectModal
                            show={connectModal}
                            onHide={() => closeModal()}
                            initWeb3={initWeb3Interface}
                        />
                        :
                        <RaffleTable
                            display={connected}
                            raffles={raffles}
                            activeRaffles={true}
                            getActiveRaffleIndex={props.getActiveRaffleIndex}
                            buyTickets={props.buyTickets}
                        />
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default ActiveRaffles;