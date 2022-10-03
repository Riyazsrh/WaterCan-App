/** @format */

import theme from "../../../Theme/Theme";
export const Styles: any = {
	mainGallery: {
		gridTemplateColumns: "repeat(4 , 1fr) !important",
		[theme.breakpoints.down("sm")]: {
			height: "100% !important",
			display: "flex !important",
			flexDirection: "column",
		},
	},
};
