import {
    Dialog,
    DialogContent,
    Box,
    Typography,
    Button,
    Stack,
  } from "@mui/material";
  import React from "react";
  import CButton from "../../shared/commonButton/CButton";
  import OtpInput from "react-otp-input";
import NewPassword1 from "../NewPassword1";
  
  interface IProps {
    open: boolean;
    onClose: any;
  }
  interface MyState {
    loginOtp3: string;
    openNewPassword: boolean;
  }
  
  class OtpModal2 extends React.Component<IProps, MyState> {
    state = {
      loginOtp3: "",
      openNewPassword: false
    };
    openNewPassword = () => {
        this.setState({
            openNewPassword:true
        })
    }
    handleCloseNewPassword = () => {
        this.setState({
            openNewPassword:false
        })
    }
    loginOtpHandler3 = (loginOtp3: any) => this.setState({ loginOtp3 });
    render(): React.ReactNode {
      return (
        <Dialog
          onClose={this.props.onClose}
          sx={{
            boxShadow: "2px 2px 25px 2px rgba(177, 233, 255, 0.5)",
            borderRadius: "20px",
          }}
          className="dialog"
          open={this.props.open}
        >
          <DialogContent style={{ overflow: "hidden" }}>
            <Box>
              <Box className="flex-center">
                <Typography variant="h5" className="modal-text1 mb">
                  OTP Verification
                </Typography>
              </Box>
              <Typography className="modal-text2 mb">
                Enter the OTP sent to +91 987654321
              </Typography>
  
              <Box className="otp-box mb">
                <OtpInput
                  placeholder="****"
                  inputStyle={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "5%",
                    border: "none",
                    fontSize: "15px",
                    backgroundColor: "#f1f1f1",
                    display: "flex",
                    flexWrap: "nowrap",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                  numInputs={4}
                  value={this.state.loginOtp3}
                  onChange={this.loginOtpHandler3}
                  className="otp-width"
                  shouldAutoFocus
                />
              </Box>
  
              <Box className="flex-center mb">
                <Button sx={{ margin: "0 auto" }}>
                  <Typography className="otp-text mb-2">
                    don't receive oTP?{" "}
                  </Typography>
                </Button>
              </Box>
                <Stack className="loginButton verify-now" onClick={this.openNewPassword}>
                  <CButton title="verify now" />
                </Stack>
                <NewPassword1 open={this.state.openNewPassword} onClose={this.handleCloseNewPassword}/>
            </Box>
          </DialogContent>
        </Dialog>
      );
    }
  }
  
  export default OtpModal2;