export const contractData = {
    address: '0xdD3ae043869193612Fdb05Fc9F9FbC4fbCF65486',
    contractName: 'RaffleWorld',
    abi:[
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_keyHash",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "_vrfCoordinatorAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_linkTokenContractAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_requiredRaffleLink",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            }
          ],
          "name": "ActivateRaffle",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_percentage",
              "type": "uint256"
            }
          ],
          "name": "AddPercentage",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_ticketsNumber",
              "type": "uint256"
            }
          ],
          "name": "BuyTickets",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            }
          ],
          "name": "CancelRaffle",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "RaffleWinner",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            }
          ],
          "name": "RemovePercentage",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
            }
          ],
          "name": "RequestedRandomness",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_startDate",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "_tokenAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_prizeAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_ticketsLimit",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_ticketPrice",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_lockDays",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "_status",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "_canceled",
              "type": "bool"
            }
          ],
          "name": "SetRaffle",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_lockDays",
              "type": "uint256"
            }
          ],
          "name": "SetRaffleLockDays",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "_name",
              "type": "string"
            }
          ],
          "name": "SetRaffleName",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_prizeAmount",
              "type": "uint256"
            }
          ],
          "name": "SetRafflePrizeAmount",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_startDate",
              "type": "uint256"
            }
          ],
          "name": "SetRaffleStartDate",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "_status",
              "type": "string"
            }
          ],
          "name": "SetRaffleStatus",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_ticketPrice",
              "type": "uint256"
            }
          ],
          "name": "SetRaffleTicketPrice",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_ticketsLimit",
              "type": "uint256"
            }
          ],
          "name": "SetRaffleTicketsLimit",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "_tokenAddress",
              "type": "address"
            }
          ],
          "name": "SetRaffleTokenAddress",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_requireRaffleLink",
              "type": "uint256"
            }
          ],
          "name": "SetRequiredRaffleLink",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "WithdrawOwnerFunds",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_ticketsNumber",
              "type": "uint256"
            }
          ],
          "name": "WithdrawTickets",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            }
          ],
          "name": "activateRaffle",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "active_raffles",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_percentage",
              "type": "uint256"
            }
          ],
          "name": "addPercentage",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_ticketsNumber",
              "type": "uint256"
            }
          ],
          "name": "buyTickets",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            }
          ],
          "name": "cancelRaffle",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getActiveRafflesLength",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getRafflesLength",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            }
          ],
          "name": "getRandomNumber",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "linkTokenContractAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "percentagesToWin",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "raffleTickets",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "timeWhenBought",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "raffles",
          "outputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "startDate",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "prizeAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ticketsLimit",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ticketPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lockDays",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "status",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "canceled",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "totalPercentage",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "randomness",
              "type": "uint256"
            }
          ],
          "name": "rawFulfillRandomness",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            }
          ],
          "name": "removePercentage",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "requiredRaffleLink",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_startDate",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_tokenAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_prizeAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_ticketsLimit",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_ticketPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_lockDays",
              "type": "uint256"
            }
          ],
          "name": "setRaffle",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_lockDays",
              "type": "uint256"
            }
          ],
          "name": "setRaffleLockDays",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            }
          ],
          "name": "setRaffleName",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_prizeAmount",
              "type": "uint256"
            }
          ],
          "name": "setRafflePrizeAmount",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_startDate",
              "type": "uint256"
            }
          ],
          "name": "setRaffleStartDate",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_ticketPrice",
              "type": "uint256"
            }
          ],
          "name": "setRaffleTicketPrice",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_ticketsLimit",
              "type": "uint256"
            }
          ],
          "name": "setRaffleTicketsLimit",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_requiredRaffleLink",
              "type": "uint256"
            }
          ],
          "name": "setRequiredRaffleLink",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "userTickets",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            }
          ],
          "name": "withdrawOwnerFunds",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_raffleId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_ticketsNumber",
              "type": "uint256"
            }
          ],
          "name": "withdrawTickets",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
}