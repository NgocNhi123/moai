import { Fragment, useState } from "react";
import { Toggle } from "./toggle";
import { Meta, StoryObj } from "@storybook/react";
import { docsMetaParameters } from "../../../utils/parameter";

const meta: Meta = {
	title: "Showcase/Banh Mi/Toggle",
	component: Toggle,
	parameters: docsMetaParameters({
		primary: "none",
		hideArgs: true,
	})
};

export default meta;

export const Primary = () => void {}

export const Main: StoryObj = {
	render: () => {
		const [checked, setChecked] = useState<boolean>(false);
		return (
			<Fragment>
				<Toggle checked={checked} setValue={setChecked} />
				<br />
				<Toggle
					checked={!checked}
					setValue={(state) => setChecked(!state)}
				/>
			</Fragment>
		);
	}
}
