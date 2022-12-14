/** @format */

// /** @format */

// import * as React from "react";
// import { Theme, useTheme } from "@mui/material/styles";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
// 	PaperProps: {
// 		style: {
// 			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
// 			width: 250,
// 		},
// 	},
// };

// const names = [
// 	"Oliver Hansen",
// 	"Van Henry",
// 	"April Tucker",
// 	"Ralph Hubbard",
// 	"Omar Alexander",
// 	"Carlos Abbott",
// 	"Miriam Wagner",
// 	"Bradley Wilkerson",
// 	"Virginia Andrews",
// 	"Kelly Snyder",
// ];

// function getStyles(name: string, personName: string[], theme: Theme) {
// 	return {
// 		fontWeight:
// 			personName.indexOf(name) === -1
// 				? theme.typography.fontWeightRegular
// 				: theme.typography.fontWeightMedium,
// 	};
// }

// export default function MultipleSelect() {
// 	const theme = useTheme();
// 	const [personName, setPersonName] = React.useState<string>("");

// 	const handleChange = (event: SelectChangeEvent<typeof personName>) => {
// 		// const {
// 		// 	target: { value },
// 		// } = event;
// 		setPersonName(
// 			// On autofill we get a stringified value.
// 			event.target.value
// 		);
// 	};

// 	return (
// 		<div>
// 			<FormControl sx={{ m: 1, width: 300 }}>
// 				<InputLabel shrink={false} id="demo-multiple-name-label">
// 					Select Bank
// 				</InputLabel>
// 				<Select
// 					sx={{
// 						width: "476px",
// 						background: "#E3F2FF",
// 						border: "2px solid #CEE4F8",
// 						borderRadius: "10px",
// 					}}
// 					// labelId="demo-multiple-name-label"
// 					// id="demo-multiple-name"
// 					multiple
// 					// InputLabelProps={{ shrink: false }}
// 					value={personName}
// 					onChange={handleChange}
// 					// input={<OutlinedInput label="Name" />}
// 					// placeholder="Select Bank"
// 					MenuProps={MenuProps}>
// 					{names.map((name) => (
// 						<MenuItem
// 							key={name}
// 							value={name}
// 							// style={getStyles(name, personName, theme)}
// 						>
// 							{name}
// 						</MenuItem>
// 					))}
// 				</Select>
// 			</FormControl>
// 		</div>
// 	);
// }

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { BankName } from "../../../utils/data/bankName";
import theme from "../../../Theme/Theme";

export default function BasicSelect() {
	const [bank, setBank] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setBank(event.target.value as string);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Select Bank</InputLabel>
				<Select
					sx={{
						width: "476px",
						background: "#E3F2FF",
						border: "2px solid #CEE4F8",
						borderRadius: "10px",
						[theme.breakpoints.down("sm")]: {
							width: "100%",
						},
					}}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={bank}
					label="Select Bank"
					required={true}
					onChange={handleChange}>
					{BankName.map((item) => (
						<MenuItem key={item.id} value={item.name}>
							{item.name}
						</MenuItem>
					))}

					{/* <MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem> */}
				</Select>
			</FormControl>
		</Box>
	);
}
