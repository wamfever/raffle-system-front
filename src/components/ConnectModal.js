import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import MetaMaskConnector from '../integrations/MetaMaskConnector';

function ConnectModal(props) {
  const [connected, setConnected] = useState(false);
  const connectWeb3 = () => {
    MetaMaskConnector.ethEnabled().then((res, err) => {
      if (!err) {
        setConnected(true);
        props.initWeb3();
      } else {
        console.log('Metamask request error:', err);
      }
    });
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      backdrop='static'
      className='text-centered'
      centered>
      <Modal.Body className='text-centered'>
        {!connected ? (
          <Container fluid className="text-center">
            <span className="lead"> Please Conenct to your Metamask </span>
          </Container>
        ) : (
          <Container fluid className="text-center">
            <span className="lead"> Authentication succesful! </span>
          </Container>
        )}
      </Modal.Body>
      <Modal.Footer className='justify-content-center'>
        {
          connected ?
          <Button className='btn btn-md btn-success' onClick={() => {}}>
            Loading..
          </Button>
          :
          <Button className='btn btn-md btn-primary' onClick={() => connectWeb3()}>
            Connect
          </Button>
        }
      </Modal.Footer>
    </Modal>
  );
}
export default ConnectModal;