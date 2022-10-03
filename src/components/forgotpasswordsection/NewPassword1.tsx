import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Grid from '@mui/material/Grid';
import { Typography, Box, OutlinedInput, Stack, Container, TabProps } from '@mui/material';
import { withStyles } from "@mui/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import OtpInput from "react-otp-input";
import img from './img.png';
import CButton from '../shared/commonButton/CButton';
import { Style } from "./NewPassword.style";
import { Link } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type IProps = {
    classes?: any;
    open: boolean;
    onClose: () => void;
};
interface State {
    Open: any;
    loginOtp3: string;
}

class NewPassword extends Component<IProps, State>{

    state = {
        Open: true,
        loginOtp3: ""
    }

    loginOtpHandler3 = (loginOtp3: any) => this.setState({ loginOtp3 });

    handleClickOpen = () => {
        this.setState({
            Open: true,
        });
    };
    handleClose = () => {
        this.setState({
            Open: false,
        });
    };
    render() {
        const { classes } = this.props;


        return (
            <div>

                <Container maxWidth={false}>
                    <Dialog
                        open={this.props.open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={this.props.onClose}
                        aria-describedby="alert-dialog-slide-description"
                        sx={{ maxWidth: '850px', margin: 'auto' }}
                    >
                        <DialogContent sx={{ background: "#F2F2F2", fontSize: "26px", }}>
                            <Grid container className={classes.imgSection}>
                                <Grid item lg={6.5} sm={6.5} md={6.5} xs={12}>
                                    <Typography sx={{ fontFamily: "Inter", fontWeight: "600", lineHeight: "31px", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center", margin: 'auto' }}>
                                        Set New Password
                                    </Typography>

                                    <Grid container sx={{ marginTop: '10px' }}>
                                        <Grid item lg={12} xs={12}>

                                            <Box>
                                                <Typography sx={{ fontFamily: 'Inter', fontWeight: "500px", fontStyle: "normal", fontSize: "18px", color: " #000620" }}>
                                                    New Passcode
                                                </Typography>
                                            </Box>
                                            <Box className="passcodeParentDiv">
                                                <OtpInput
                                                    placeholder="******"
                                                    inputStyle={{
                                                        width: "100%",
                                                        height: "50px",
                                                        fontSize: "15px",
                                                        backgroundColor: "#f1f1f1",
                                                        border: "1px solid #D6DCF3",
                                                        borderRadius: "5px",
                                                        display: 'flex',
                                                        marginRight: "7px",
                                                        boxShadow: "2px 2px 25px 2px rgba(177, 233, 255, 0.8)"


                                                    }}
                                                    numInputs={6}
                                                    value={this.state.loginOtp3}
                                                    onChange={this.loginOtpHandler3}
                                                    shouldAutoFocus
                                                />
                                            </Box>

                                            <Box sx={{ marginTop: '20px' }}>
                                                <Typography sx={{ fontFamily: 'Inter', fontWeight: "500px", fontStyle: "normal", fontSize: "18px", color: " #000620" }}>
                                                    New Passcode
                                                </Typography>
                                            </Box>

                                            <Box className="passcodeParentDiv">

                                                <OtpInput
                                                    placeholder="******"
                                                    inputStyle={{
                                                        width: "100%",
                                                        height: "50px",
                                                        fontSize: "15px",
                                                        backgroundColor: "#f1f1f1",
                                                        display: "flex",
                                                        flexWrap: "nowrap",
                                                        flexDirection: "row",
                                                        justifyContent: "center",
                                                        border: "1px solid #D6DCF3",
                                                        borderRadius: "5px",
                                                        marginRight: "7px",
                                                        boxShadow: "2px 2px 25px 2px rgba(177, 233, 255, 0.8)"


                                                    }}
                                                    numInputs={6}
                                                    value={this.state.loginOtp3}
                                                    onChange={this.loginOtpHandler3}
                                                    shouldAutoFocus
                                                />

                                            </Box>

                                            <Link to="/account-login">
                                                <Stack className={classes.addToContanierButton} >

                                                    <CButton title="Set New Passcode" />
                                                </Stack>
                                            </Link>


                                        </Grid>


                                    </Grid>
                                </Grid>
                                <Grid item lg={0.5} md={0.5} sm={0.5}></Grid>
                                <Grid item lg={5} md={5} sm={5} xs={12}>
                                    <Box sx={{ marginLeft: "0px" }}
                                    >
                                        <img src={img} width="100%" height="270px" />
                                    </Box>
                                </Grid>

                            </Grid>

                        </DialogContent>

                    </Dialog>
                </Container>
            </div>
        )
    }
}

export default withStyles(Style)(NewPassword);
