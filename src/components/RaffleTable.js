import React from "react";
import Table from "react-bootstrap/Table";
import convertTimestamp from "../services/timestamp_converter";

const RaffleTable = (props) => {


    return (
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
                            <th>Tickets Remaining</th>
                            <th>Ticket Price</th>
                            <th>Lock days</th>
                            <th>Status</th>
                            <th>Canceled</th>
                        </tr>
                    </thead>
                    :
                    <></>
            }
            <tbody>
                {props.raffles.map((raffle, index) =>
                    <tr>
                        <td>{index}</td>
                        <td>{raffle[0]}</td>
                        <td>{convertTimestamp(raffle[1])}</td>
                        <td><a href={`https://rinkeby.etherscan.io/address/` + raffle[2]}>{raffle[2]}</a></td>
                        <td>{raffle[3] / 1000000000000000000}</td>
                        <td>{raffle[4]}</td>
                        <td>{raffle[5] / 1000000000000000000}</td>
                        <td>{raffle[6]}</td>
                        <td>{raffle[7]}</td>
                        <td>{raffle[8].toString()}</td>
                    </tr>
                )}
            </tbody>
        </Table >
    );
};

export default RaffleTable;