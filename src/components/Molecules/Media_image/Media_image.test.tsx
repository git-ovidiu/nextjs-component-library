import React from "react";
import {render} from "@testing-library/react";
import Media_image from "./Media_image";
import Image from "next/image";

describe("Media_component", () => {
	test("renders the Media_component", () => {
		render(
			<div>
				<Media_image
					image={<Image alt="placeholder" fill src="https://res.cloudinary.com/dxbivmheq/image/upload/v1674309864/OvidiuBunghez_diagramic_drawing_simple_color_Yellow_Orange_only_3d2d259b-ddf5-4fb3-94ef-fe74a7954ad8_cvowat.png" style={{objectFit: 'cover'}}/>}
					image-border-radius="0px"
					label-bottom-left={<Image alt="Placeholder" width={100} height={50} src="https://res.cloudinary.com/dxbivmheq/image/upload/v1685288101/dummy_100x50_ffffff_000000_q4dp06.webp"/>}
					label-bottom-right={<Image alt="Placeholder" width={100} height={50} src="https://res.cloudinary.com/dxbivmheq/image/upload/v1685288101/dummy_100x50_ffffff_000000_q4dp06.webp"/>}
					label-top-left={<Image alt="Placeholder" width={100} height={50} src="https://res.cloudinary.com/dxbivmheq/image/upload/v1685288101/dummy_100x50_ffffff_000000_q4dp06.webp"/>}
					label-top-right={<Image alt="Placeholder" width={100} height={50} src="https://res.cloudinary.com/dxbivmheq/image/upload/v1685288101/dummy_100x50_ffffff_000000_q4dp06.webp"/>}
				/>
			</div>
		);
	});
});
