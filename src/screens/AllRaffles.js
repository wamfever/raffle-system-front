import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ConnectModal from "../components/ConnectModal";
import RaffleTable from "../components/RaffleTable";

const AllRaffles = (props) => {
    const [connected, setConnected] = React.useState(false);
    const [connectModal, setConnectModal] = React.useState(true);
    const [raffles, setRaffles] = React.useState([]);

    const closeModal = () => {
        setConnectModal(false);
    };

    const getRaffles = async () => {
        const rafflesLength = await props.getRafflesLength();
        for (let i = 0; i < rafflesLength; i++) {
            await props.getRaffle(i).then(result => {
                setRaffles(raffles => [...raffles, result]);
            });
        }
    }

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
                        <RaffleTable display={connected} raffles={raffles} />
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default AllRaffles;
