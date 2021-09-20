import { contractData } from '../contracts/RaffleWorld';

let web3;
let contract;
let currentAddress;

export const Web3Service = {

    isSetUp: () => {
        return web3 && contract && currentAddress
    },

    setUpWeb3: (instance, address) => {
        web3 = instance;
        contract = new web3.eth.Contract(contractData.abi, contractData.address);
        currentAddress = address;
    },

    getWeb3: () => {
        return web3;
    },

    getContract: () => {
        return contract;
    },

    owner: () => {
        return contract.methods.owner().call();
    },

    getRafflesLength: () => {
        return contract.methods.getRafflesLength().call();
    },

    getRaffle: (index) => {
        return contract.methods.raffles(index).call();
    },

    getActiveRafflesLength: () => {
        return contract.methods.getActiveRafflesLength().call();
    },

    getActtiveRaffleIndex: (active_raffle_index) => {
        console.log(active_raffle_index);
        return contract.methods.active_raffles(active_raffle_index).call();
    },

    buyTickets: (raffleIndex, amount) => {
        console.log(raffleIndex, amount);
        return contract.methods.buyTickets(raffleIndex, amount).send({
            from: currentAddress
        });
    }
};