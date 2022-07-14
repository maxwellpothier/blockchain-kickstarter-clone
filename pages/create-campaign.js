import Layout from "../components/Layout";
import {Button, Form, Input, Message} from "semantic-ui-react";
import { useState } from "react";
import factory from "../ethereum/factory";
import web3 from "../ethereum/web3";
import {Router} from "../routes";

const CreateCampaign = () => {
	const [minContribution, setMinContribution] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setErrorMessage("");

		try {
			const accounts = await web3.eth.getAccounts();

			await factory.methods.createCampaign(minContribution).send({
				from: accounts[0],
			});

			Router.pushRoute("/");
		} catch (err) {
			setErrorMessage(err.message);
		}

		setIsLoading(false);
		setMinContribution("");
	};


	return (
		<Layout>
			<h3>Create a Campaign</h3>
			<Form onSubmit={onSubmit} error={!!errorMessage}>
				<Form.Field>
					<label>Minimum Contribution</label>
					<Input
						value={minContribution}
						label={"wei"}
						labelPosition={"right"}
						onChange={(e) => setMinContribution(e.target.value)}
					/>
				</Form.Field>
				<Message
					error
					header={"Error with creating contract"}
					content={errorMessage}
				/>
				<Button loading={isLoading} type={"submit"} primary>Create</Button>
			</Form>
		</Layout>
	);
};

export default CreateCampaign;