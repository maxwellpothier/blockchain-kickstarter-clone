import { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";

class CampaignShow extends Component {
	static async getInitialProps(props) {
		// const campaign = Campaign(props.query.address);
		console.log(props.query.address);
		// const summary = await campaign.methods.getSummary().call();

		// console.log(summary);
		
		return {};
	}

	render() {
		return (
			<Layout>
				Campaign Show
			</Layout>
		);
	}
}

export default CampaignShow;