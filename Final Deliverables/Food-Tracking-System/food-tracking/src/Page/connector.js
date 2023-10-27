import FoodTrackingJSON from './FoodTracking.json'
import { ethers } from "ethers";
import Web3Modal from "web3modal";



export const FoodTrackingAddress = "0x20775d300BdE943Ac260995E977fb915fB01f399";

export const FoodTrackingABI = FoodTrackingJSON.abi;


if (!window.ethereum) {
    alert('Meta Mask Not Found')
    window.open("https://metamask.io/download/")
} 


        // const signer = providers.getSigner();
        // const contract = fetchContract(signer);

        // return contract;

const web3modal = new Web3Modal();
const connection = await web3modal.connect();
const provider = new ethers.providers.Web3Provider(connection);
// export const provider = new ethers.providers.Web3Provider(window.ethereum);
// console.log(provider);
export const signer = provider.getSigner();


export const contract = new ethers.Contract(FoodTrackingAddress, FoodTrackingABI, signer);
// console.log(contract);