
# NEXTJS COMPONENT LIBRARY

## INSTALL
`@git-ovidiu/nextjs-component-library@latest`


# CONFIG
You will to customize and update 4 files for each component:

## CSS
 ```scss
 @use '../../../styles/main.scss' as *;

:root{
  //--a|m|o-component-name-div-action: value;
  --a-test-component-right-column-background: gray;
}

  //.a|m|o.main-container-div{}
  .a-test-component{}
```

<br/>

## TSX
```tsx
import React, { ReactElement } from "react";
import "./Component.scss";
export interface ComponentProps {
  text: string;
  number: number;
  ReactElement?: ReactElement;
  boolean?: boolean;
}
export default function Component(props: ComponentProps) {
  return (
    <>
      <section>
         {/*component code here*/}
      </section>
    </>
  );
}

```