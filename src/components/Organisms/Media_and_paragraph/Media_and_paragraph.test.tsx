import React from "react";
import { render } from "@testing-library/react";

import Media_and_paragraph from "./Media_and_paragraph";
import Title_and_description from "../../Molecules/Title_and_description"
import Button_slide from "../../Atoms/Button_Slide"
import Image from "next/image"
import Media_image from "../../Molecules/Media_image"
import Description from "../../Atoms/Description"
import Animated_text from "../../Atoms/Animated_text"
import Logo from "../../Atoms/Logo"

describe("Media_and_paragraph", () => {
	test("renders the Media_and_paragraph", () => {
		render(
			<Media_and_paragraph
				align-elements="center"
				content={<Title_and_description action={<Button_slide hover-effect="slide-right" padding="xs" text="button text"/>} description="Tation pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur" label={<Description color="red" text="Label"/>} text-align="left" title={<Animated_text text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti" variant="h2"/>}/>}
				content-col-md={5}
				content-offset-breakpoint="md"
				content-offset-value={1}
				image={<Media_image image={<Image alt="Placeholder" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"/>} image-border-radius="0px" label-bottom-right={<Logo background="#4cbfa6" border-radius="20px " image-source="https://res.cloudinary.com/alvarosaburido/image/upload/v1616082729/as-portfolio/awesome-sushi-logo_aiaydr.png" logo="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg" logo-href="https://www.google.com"/>} object-fit="cover" padding-bottom-desktop="0%" padding-bottom-mobile="0%" padding-bottom-tablet="0%"/>}
				image-col-md={5}
				image-offset-breakpoint="md"
				image-offset-value={1}
			/>
		);
	});
});


// todo de facut fisiere de test la toate componentele care nu au