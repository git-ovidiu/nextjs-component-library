import React from "react";
import { render } from "@testing-library/react";

import ButtonSlide from "../../Atoms/Button-slide";
import Description from "../../Atoms/Description";
import AnimatedText from "../../Atoms/Animated-text";
import TitleAndDescription from "./Title-and-description"

describe("TitleAndDescription", () => {
	test("renders the TitleAndDescription", () => {
		render(
				<TitleAndDescription
					action={<ButtonSlide hover-effect="slide-right" padding="xs" text="button text"/>}
					description="Tation pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur"
					label={<Description color="red" text="Label"/>}
					text-align="left"
					title={<AnimatedText text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti" variant="h2"/>}
				/>
		);
	});
});