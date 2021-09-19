import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import ConnectModal from "../components/ConnectModal";

export const Home = (props) => {

    const test = async () => {
        console.log(await props.getRaffle(0));
    }

    return (
        <div>
            <ConnectModal
                show={true}
                onHide={() => {}}
                initWeb3={() => {}}
            />
        </div>
    );
}
