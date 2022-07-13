import React, {useEffect} from "react";
import {Card, Button} from "semantic-ui-react";
import Layout from "../components/Layout";
import factory from "../ethereum/factory";

const Home = ({campaignList}) => {

	const renderCampaigns = () => {
		const items = campaignList.map((address) => {
			return {
				header: address,
				description: <a>View Campaign</a>,
				fluid: true,

			}
		});

		return <Card.Group items={items}/>
	};

	return (
		<Layout>
			<h3>Open Campaigns</h3>
			<Button
				content={"Create Campaign"}
				icon={"add circle"}
				floated={"right"}
				href={"/campaigns/new"}
				primary
			/>
			{renderCampaigns()}
		</Layout>
	);
};

export async function getStaticProps() {
	const campaignList = await factory.methods.getDeployedCampaigns().call();

	return {
		props: {
			campaignList,
		}
	};
};

export default Home;