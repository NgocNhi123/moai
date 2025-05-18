import { Sidebar } from "./sidebar";
import { ReactNode, useState } from "react";
import {
	defaultUser,
	bodyData,
	footerData,
	footerNote,
	defaultHeader,
} from "./sidebar.const";
import s from "./sidebar.module.css";
import { Meta, StoryObj } from "@storybook/react";
import { docsMetaParameters } from "../../../utils/parameter";

const meta: Meta = {
	title: "Showcase/Banh Mi/Sidebar",
	component: Sidebar,
	parameters: docsMetaParameters({
		primary: "none",
		hideArgs: true,
	})
};

export default meta;

export const Primary = () => void {}

const MenuItemWrapper = ({ href, children }: { href: string; children: ReactNode }) => {
	return (
		<div onClick={() => alert("Foo")}>
			<a href={href}>{children}</a>
		</div>
	);
};

export const Basic: StoryObj = {
	render: () => {
		return (
			<div className={s.stories}>
				<Sidebar
					headerData={defaultHeader}
					bodyData={bodyData}
					footerData={footerData}
					as={MenuItemWrapper}
				/>
			</div>
		);
	}
}

export const Full: StoryObj = {
	render: () => {
		const [path, setPath] = useState("/");
		return (
			<div className={s.stories}>
				<Sidebar
					headerData={defaultHeader}
					bodyData={bodyData}
					footerData={footerData}
					widthPx={350}
					as={MenuItemWrapper}
					path={path}
					setPath={setPath}
					footerNote={footerNote}
					userArea={defaultUser}
				/>
			</div>
		);
	}
}
