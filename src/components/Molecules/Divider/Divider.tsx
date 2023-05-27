import React, {ReactElement, useRef, useEffect, CSSProperties} from "react";
import "./Divider.scss";

interface DividerStyle extends CSSProperties {
	"--m-divider-width"?: string;
}
export interface DividerProps {
	style?: DividerStyle;

	divider?: ReactElement;
	vertical?: boolean;
	position?: string;
	width?: string;
}

export default function Divider(props: DividerProps) {
	const dividerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleResize = () => {
			if (dividerRef.current && props.vertical) {
				const parentHeight = dividerRef.current.parentElement?.parentElement?.offsetHeight;
				dividerRef.current.style.height = `${parentHeight}px`;
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [props.vertical]);

	return (
		<>
			<div
				ref={dividerRef}
				className={`m-divider ${props.vertical ? "vertical" : ""} ${props.position}`}
				style={{"--m-divider-width" : props.width, ...props.style}}
			>
				{props.divider}
			</div>
		</>
	);
}



// TODO de facut o animatie care sa plece de la 50px de ex si sa se duca pana la 1

// TODO trebuie un apdding pe ambele versiuni

// TODO in loc de left/right la vertical, trebuie pus top/right cumva