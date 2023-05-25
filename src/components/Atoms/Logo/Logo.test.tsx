import React from "react";
import {render} from "@testing-library/react";

import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

describe("Logo", () => {
  test("renders the Logo", () => {
    render(
      <Logo
        background="#4cbfa6"
        border-radius="20px "
        image-source="https://res.cloudinary.com/alvarosaburido/image/upload/v1616082729/as-portfolio/awesome-sushi-logo_aiaydr.png"
        logo={
          <Link href="https://www.google.com" target="_blank">
            <Image
              alt="Placeholder"
              src="https://res.cloudinary.com/alvarosaburido/image/upload/v1616082729/as-portfolio/awesome-sushi-logo_aiaydr.png"
			  fill
            />
          </Link>
        }
        logo-href="https://www.google.com"
      />
    );
  });
});
