import { Button, DivPx, text } from "@moai/core";
import { ArrowCircleRight } from "@moai/icon/hro";
import s from "./hero.module.css";

export const Hero = (): JSX.Element => (
	<div className={s.container}>
		<p className={s.tagline}>
			<span className={text.muted}>A React component library,</span>
			<span className={s.space}> </span>
			<br className={s.break} />
			<span>where buttons look like buttons🗿</span>
		</p>
		<DivPx size={32} />
		<div className={s.buttons}>
			<Button
				size={Button.sizes.large}
				icon={ArrowCircleRight}
				reverse
				highlight
				children="Get started"
				href="https://docs.moaijs.com"
			/>
			<DivPx size={16} />
			<Button
				size={Button.sizes.large}
				children="GitHub"
				href="https://github.com/moaijs/moai"
			/>
		</div>
	</div>
);
