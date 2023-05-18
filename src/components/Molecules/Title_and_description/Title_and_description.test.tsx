import React from "react";
import { render } from "@testing-library/react";

import Title_and_description from "./Title_and_description";
import Button_slide from "../../Atoms/Button_Slide";
import Description from "../../Atoms/Description";
import Animated_text from "../../Atoms/Animated_text";

describe("Title_and_description", () => {
	test("renders the Title_and_description", () => {
		render(  <Title_and_description
			action={<Button_slide hover_effect="slide-right" padding="xs" text="button text"/>}
			description="Tation pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur"
			label={<Description color="red" text="Label"/>}
			text_align="left"
			title={<Animated_text text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti" variant="h2"/>}
		/>);
	});
});