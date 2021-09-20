import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import convertTimestamp from "../services/timestamp_converter";
import BuyTicketsModal from "./BuyTicketsModal";

const RaffleTable = (props) => {

    const [displayTicketsModal, setTicketsModalDisplay] = React.useState(false);
    const [currentRaffleIndex, setCurrentRaffleIndex] = React.useState(0);

    const showModal = async (index) => {
        setCurrentRaffleIndex(index);
        setTicketsModalDisplay(true);
    }

    const closeModal = async () => {
        setTimeout(() => {
            setTicketsModalDisplay(false);
            closeModal();
        }, 2000);
    };

    return (
        <>
            {
                displayTicketsModal ?
                    <BuyTicketsModal
                        show={displayTicketsModal}
                        closeModal={closeModal}
                        buyTickets={props.buyTickets}
                        raffleIndex={currentRaffleIndex}
                        getActiveRaffleIndex={props.getActiveRaffleIndex}
                    />
                    :
                    <>
                    </>
            }
            <Table striped bordered hover>
                {
                    props.display ?
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Start Date</th>
                                <th>Token Address</th>
                                <th>Prize Amount</th>
                                <th>Tickets limit</th>
                                <th>Ticket Price</th>
                                <th>Lock days</th>
                                <th>Status</th>
                                {props.activeRaffles ?
                                    <th>Buy Tickets</th>
                                    :
                                    <th>Canceled</th>
                                }
                            </tr>
                        </thead>
                        :
                        <></>
                }
                <tbody>
                    {props.raffles.map((raffle, index) =>
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{raffle[0]}</td>
                            <td>{convertTimestamp(raffle[1])}</td>
                            <td><a href={`https://rinkeby.etherscan.io/address/` + raffle[2]}>{raffle[2]}</a></td>
                            <td>{raffle[3] / 1000000000000000000}</td>
                            <td>{raffle[4]}</td>
                            <td>{raffle[5] / 1000000000000000000}</td>
                            <td>{raffle[6]}</td>
                            <td>{raffle[7]}</td>
                            {
                                props.activeRaffles ?
                                    <td>
                                        <Button className='btn btn-primary' onClick={() => showModal(index)}>
                                            Buy Tickets
                                        </Button>
                                    </td>
                                    :
                                    <td>{raffle[8].toString()}</td>
                            }
                        </tr>
                    )}
                </tbody>
            </Table >
        </>
    );
}

export default RaffleTable;