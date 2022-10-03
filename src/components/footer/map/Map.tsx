/** @format */

import { Box } from "@mui/material";
import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useStyles } from "./Map.styles";

const Mapp = () => {
	const classes = useStyles();
	return (
		<Box>
			<MapContainer
				center={[51.505, -0.09]}
				zoom={9}
				scrollWheelZoom={true}
				className={classes.map}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.505, -0.09]} />
			</MapContainer>
		</Box>
	);
};

export default Mapp;
