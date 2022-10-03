import React, { Component } from "react";
import {
    Box,
    Grid,
    Modal,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { Styles } from "./MyMap.style";
import MapContainer from "./MapContainer";

interface IProps {
    onClose: any;
    open: any;
    classes?: any;
    google?: any;
    onMapClick?: any

}

class MapModal extends Component<IProps> {

    render(): React.ReactNode {
        const { classes } = this.props;
        return (
            <>
            <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
            <Modal
                open={this.props.open}
                onClose={this.props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: "70%",
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <MapContainer
                        google={this.props.google}
                        height='300px'
                        zoom={15}
                    />
                </Box>
            </Modal>
            </Grid>
            </Grid>
            </>
        );
    }
}



export default withStyles(Styles)(MapModal);