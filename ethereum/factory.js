import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0x92d47208a08BD22431D3065Ed1415DE443062b7d"
);

export default instance;