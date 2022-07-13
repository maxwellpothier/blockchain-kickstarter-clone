import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0xD59803Ac20440a8947aC3d22e86F5Bb6973C193E"
);

export default instance;