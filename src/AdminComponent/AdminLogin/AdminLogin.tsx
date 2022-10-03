import React from "react";
import {
    Button,
    Divider,
    FormControl,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Grid, Box } from "@mui/material";

import "./AdminLogin.css";
import paco from "../../assets/images/paco.png";
import logo from "../../assets/images/logo.png";
import apple from "../../assets/images/AppleIcon.png";
import android from "../../assets/images/google-play.png";
import Select from "@mui/material/Select";
import india from "../../assets/images/india.png";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import OtpInput from "react-otp-input";
import CButton from "../../components/shared/commonButton/CButton";
import deliveryMan from "../../assets/images/delivery-man.png";
import { withRouter } from "../../components/withRouter/withRouter";

interface NavigateProps {
	navigate?: any;
	location?: any;
}

class AdminLogin extends React.Component<NavigateProps> {

    state = {
        number : "",
        loginOtp: "",
        
    }

    onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			number: e.target.value,
		});
        console.log({number: e.target.value})
	};

    loginOtpHandler = (loginOtp: any) => this.setState({ loginOtp });

    handleClick = () => {
		if (this.state.loginOtp) {
			const notify = () => toast.warn("Please Enter valid data!");
			notify();
            this.props.navigate("/admin/dashboard");
		} 
	};

    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <Grid
                    //   sx={{ border: "2px solid blue" }}
                    alignItems="flex-end"
                    container
                    className="login-container-admin"
                >
                    {/* //Bottle Grid */}
                    <Grid
                        className="display-none-sm display-none-bottle"
                        container
                        // sx={{ border: "2px solid red" }}
                        item
                        sm={3}
                        md={3}
                        lg={3}
                    >
                        <img style={{ width: "80%" }} src={paco} alt="bottleCan" />
                        {/* </Grid> */}
                    </Grid>

                    {/* Login Form Grid item */}
                    <Grid
                        item
                        container
                        xs={12}
                        sm={12}
                        md={12}
                        lg={6}
                        justifyContent="space-evenly"
                        alignItems="center"
                        sx={{
                            backgroundColor: "#F2F2F2",
                            paddingBottom: "5rem",
                            //   border: "2px solid orange",
                            width: "200%",
                        }}
                    >
                        <Grid
                            item
                            container
                            direction="column"
                            justifyContent="space-around"
                            alignItems="center"
                            sm={8}
                            lg={10}
                        >
                            <Grid
                                className="login-section"
                                container
                                direction="column"
                                alignItems="center"
                                width="85%"
                            >
                                <img src={logo} alt="logo" />

                                <Typography
                                    sx={{
                                        width: "100%",
                                        margin: "1rem 0",
                                        marginTop: "20px ",
                                        textAlign: "center",
                                        fontWeight: "700",
                                        fontSize: "26px",
                                        fontFamily: "Inter",
                                    }}
                                >
                                    Login Account
                                </Typography>

                                <Box className="mobileNoChildBox1">
                                    <Box>
                                        <FormControl sx={{ m: 1, minWidth: 85 }}>
                                            <Select
                                                displayEmpty
                                                inputProps={{ "aria-label": "Without label" }}
                                                variant="standard"
                                                disableUnderline={true}
                                            >
                                                <MenuItem selected={true} value={10}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            border: "none",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <img
                                                            className="india"
                                                            src={india}
                                                            width="20px"
                                                            height="15px"
                                                            alt="India"
                                                        />
                                                        <Typography className="mobileNoChildBox2Typography">
                                                            +91
                                                        </Typography>
                                                    </Box>
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                    <Box sx={{ display: "flex", border: "none" }}>
                                                        <img
                                                            className="india"
                                                            src={india}
                                                            width="20px"
                                                            height="15px"
                                                            alt="India"
                                                        />
                                                        <Typography className="mobileNoChildBox2Typography">
                                                            +91
                                                        </Typography>
                                                    </Box>
                                                </MenuItem>
                                                <MenuItem value={30}>
                                                    <Box sx={{ display: "flex", border: "none" }}>
                                                        <img
                                                            className="india"
                                                            src={india}
                                                            width="20px"
                                                            height="15px"
                                                            alt="India"
                                                        />
                                                        <Typography className="mobileNoChildBox2Typography">
                                                            +91
                                                        </Typography>
                                                    </Box>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        className="divider"
                                    />
                                    <Box
                                        className="text-phone"
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-evenly",
                                            alignItems: "center",
                                            marginLeft: "25px",
                                        }}
                                    >
                                        <Box className="childBox4">
                                            <PhoneIcon className="phoneIcon" />
                                        </Box>
                                        <Box className="mobileNoChildBox3">
                                            <TextField
                                                  value={this.state.number}
                                                className="textField"
                                                select={false}
                                                  onChange={this.onChangeHandle}
                                                variant="standard"
                                                placeholder="Phone Number"
                                                type="tel"
                                                required
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                            ></TextField>
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography
                                    sx={{
                                        width: "100%",
                                        variant: "filled",
                                        textAlign: "left",
                                        fontWeight: "700",
                                        fontSize: "20px",
                                        margin: "10px 0",
                                    }}
                                >
                                    Passcode
                                </Typography>
                                <Box className="passcodeParentDiv">
                                    <OtpInput
                                        data-testid="otp-input"
                                        placeholder="**"
                                        inputStyle={{
                                            width: "100%",
                                            height: "40px",
                                            borderRadius: "5%",
                                            border: "none",
                                            margin: "0 3px",
                                            fontSize: "15px",
                                        }}
                                        numInputs={6}
                                          value={this.state.loginOtp}
                                          onChange={this.loginOtpHandler}
                                        className="otp"
                                        isInputSecure
                                    />
                                </Box>

                                <Stack
                                    onClick={() => this.handleClick()}
                                    className="loginButton"
                                >
                                    <CButton title="Login" />
                                </Stack>

                                <Box sx={{ marginTop: "1rem" }}>
                                    <Typography
                                        sx={{
                                            textAlign: "center",
                                            color: "#1C97FD",

                                            textDecoration: "underline",
                                            fontWeight: "600",
                                            fontSize: "18px",
                                            marginTop: "0.5rem",
                                        }}
                                    //   onClick={this.handleForgetPassword}
                                    >
                                        Forgot Passcode?
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid
                                className="display-none-sm"
                                item
                                sx={{ marginTop: "1.5rem", width: "85%" }}
                            >
                                <Link to="register">
                                    <Stack className="loginButton registerBtn display-none-md">
                                        <CButton title="register now" />
                                    </Stack>
                                </Link>
                            </Grid>
                            <Grid
                                className="playstore-section"
                                item
                                container
                                spacing={1}
                                justifyContent="space-between"
                            >
                                <Grid item sm={6}>
                                    <Button className="play-store">
                                        <Box className="playstore-img">
                                            <img alt="Apple" src={apple} />
                                        </Box>
                                        <Box>
                                            <Typography
                                                className="playstore-text1"
                                                sx={{
                                                    fontSize: "0.6rem !important",
                                                    color: "#A2A3A5",
                                                }}
                                            >
                                                Download on The
                                            </Typography>
                                            <Typography
                                                className="playstore-text2"
                                                sx={{
                                                    fontSize: "16px",
                                                    color: "#161A1D",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                App Store
                                            </Typography>
                                        </Box>
                                    </Button>
                                </Grid>
                                <Grid item sm={6}>
                                    <Button className="play-store">
                                        <Box className="playstore-img">
                                            <img src={android} alt="android" />
                                        </Box>
                                        <Box>
                                            <Typography
                                                className="playstore-text1"
                                                sx={{
                                                    fontSize: "0.6rem !important",
                                                    color: "#A2A3A5",
                                                }}
                                            >
                                                Download on The
                                            </Typography>
                                            <Typography
                                                className="playstore-text2"
                                                sx={{
                                                    fontSize: "16px",
                                                    color: "#161A1D",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                App Store
                                            </Typography>
                                        </Box>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Man with bottle */}
                    <Grid
                        // sx={{ border: "2px solid black" }}
                        className="display-none-sm"
                        item
                        lg={3}
                        sm={3}
                        md={3}
                    >
                        <img
                            style={{ width: "80%", marginLeft: "20%" }}
                            src={deliveryMan}
                            alt="deliveryMan"
                        />
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default  withRouter(AdminLogin);