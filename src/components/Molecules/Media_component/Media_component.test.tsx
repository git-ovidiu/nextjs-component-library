import React from "react";
import {render} from "@testing-library/react";
import Image from "next/image";
import Media_component from './Media_component';

describe("Media_component", () => {
	test("renders the Media_component", () => {
		render(
			<div>
				<Media_component
					image={
						<Image
							src="https://res.cloudinary.com/dxbivmheq/image/upload/v1674309864/OvidiuBunghez_diagramic_drawing_simple_color_Yellow_Orange_only_3d2d259b-ddf5-4fb3-94ef-fe74a7954ad8_cvowat.png"
							height={300}
							width={300}
							alt="placeholder"
							fill
						/>
					}
					video="https://res.cloudinary.com/dxbivmheq/video/upload/v1664097081/samples/sea-turtle.mp4"
					auto-play={false}
					muted={false}
					loop={true}
					show-controls-property={true}
					label_top_right={
						<Image src="https://fakeimg.pl/100x50/000000/ffffff?text=right" alt="Placeholder" />
					}
					label_top_left={
						<Image src="https://fakeimg.pl/100x50/000000/ffffff?text=right" alt="Placeholder" />
					}
					label_bottom_right={
						<Image src="https://fakeimg.pl/100x50/000000/ffffff?text=right" alt="Placeholder" />
					}
					label_bottom_left={
						<Image src="https://fakeimg.pl/100x50/000000/ffffff?text=right" alt="Placeholder" />
					}
				/>
			</div>
		);
	});
});
