import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function BuyTicketsModal(props) {
    const [purcasheStatus, setPurchaseStatus] = useState(false);
    const [ticketsNumber, setTicketsNumber] = useState(0);

    const incrementTickets = () => {
        setTicketsNumber(ticketsNumber + 1);
    };

    const decrementTickets = () => {
        if (ticketsNumber > 0) {
            setTicketsNumber(ticketsNumber - 1);
        }
    };

    const buyTickets = async () => {
        await props.getActiveRaffleIndex(props.raffleIndex).then(raffleIndex => 
            props.buyTickets(raffleIndex, ticketsNumber)
        );
        setPurchaseStatus(true);
        props.closeModal();
    }

    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            backdrop='static'
            className='text-centered'
            centered>
            <Modal.Body className='text-centered'>
                {!purcasheStatus ? (
                    <Container fluid className="text-center">
                        <Row>
                            <span className="lead"> Choose the number of tickets that you want to buy! </span>
                        </Row>
                        <Row style={{paddingTop:'2vh'}}>
                            <Col>
                                <Button className='btn btn-md btn-primary' onClick={() => decrementTickets()}>
                                    -
                                </Button>
                            </Col>
                            <Col>
                                <span className="lead">{ticketsNumber}</span>
                            </Col>
                            <Col>
                                <Button className='btn btn-md btn-primary' onClick={() => incrementTickets()}>
                                    +
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <Container fluid className="text-center">
                        <span className="lead"> Transaction is being proceseed! </span>
                    </Container>
                )}
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                {
                    purcasheStatus ?
                        <Button className='btn btn-md btn-success' onClick={() => { }}>
                            Purchase succseful!
                        </Button>
                        :
                        <>
                            <Button className="btn btn-md btn-danger" onClick={() => props.closeModal()}>
                                Cancel
                            </Button>
                            <Button className='btn btn-md btn-primary' onClick={() => buyTickets()}>
                                Buy tickets
                            </Button>
                        </>
                }
            </Modal.Footer>
        </Modal>
    );
}
export default BuyTicketsModal;