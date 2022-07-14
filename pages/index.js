import React, {useEffect} from "react";
import {Card, Button} from "semantic-ui-react";
import {Link} from "../routes";
import Layout from "../components/Layout";
import factory from "../ethereum/factory";

const Home = ({campaignList}) => {

	const renderCampaigns = () => {
		const items = campaignList.map((address) => {
			const campaignDescription = (
				<Link route={`/campaigns/${address}`}>
					<a>View Campaign</a>
				</Link>
			);

			return {
				header: address,
				description: campaignDescription,
				fluid: true,
			};
		});

		return <Card.Group items={items}/>
	};

	return (
		<Layout>
			<h3>Open Campaigns</h3>
			<Link route={"/create-campaign"}>
				<a>
					<Button
						content={"Create Campaign"}
						icon={"add circle"}
						floated={"right"}
						primary
					/>
				</a>
			</Link>
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