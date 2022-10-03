import React, { Component } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Grid from '@mui/material/Grid';
import Business_9 from './Business_9.png';
import { Typography, Box, OutlinedInput,Stack } from '@mui/material';
import { Style } from "./ForgotPassword.style";
import { withStyles } from "@mui/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import OtpModal2 from "./OtpModal2/OtpModal2";
import CButton from "../shared/commonButton/CButton";

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
  open:boolean;
  onClose : any

};
interface State {
  openOtpModal: boolean;
  open: boolean;
	openPassword: boolean
}

class ForgotPassword extends Component<IProps, State>{

  state = {
		open: false,
		openPassword: false,
    openOtpModal: false
	};

	handleForgetPassword = () => {
		this.setState({
			openPassword: true
		})
	}
	

  openOtpModal = () => {
    this.setState({
      openOtpModal:true
    })
  }
  handleCloseForgetPassword = () => {
		this.setState({
			openPassword: false
	})
	}
  handleCloseOtp = () => {
		this.setState({
			openOtpModal: false
	})
	}
   
    render() {
        const { classes } = this.props;

    return (
    <div>
     
      <Dialog
        open={this.props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.props.onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent sx={{background: "#F2F2F2",fontSize: "26px"}}>
        
        <Box>
        <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={{marginTop:"10px"}}>
                <Stack sx={{width:"54px", height:"40px"}} onClick={this.props.onClose}>
                <ChevronLeftIcon
                  sx={{
                              background: "#FFFFFF",					
                              borderRadius: "50%",
                              fontSize: "1.5rem",
                  }}
                />
                </Stack>
                    <Typography sx={{marginBottom:"20px", fontFamily:"Inter", fontWeight: "600",lineHeight: "31px",fontSize: "22px"}}>
                        Forgot Passcode
                    </Typography>
                    <OutlinedInput placeholder="Phone no" sx={{width:"100%", height:"49px", borderRadius: "10px", border: "1px solid #D6DCF3", boxShadow: "2px 2px 25px 2px rgba(177, 233, 255, 0.6)",background: "#FFFFFF"}}/>
                    <Stack onClick={this.openOtpModal} className={classes.ContanierButton} >
                    
                      <CButton title="Continue"/>
                    </Stack>
                </Box>
                <OtpModal2 open={this.state.openOtpModal} onClose={this.handleCloseOtp}/>

            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <img src={Business_9} width="100%"/>
            </Grid>
       </Grid>
       </Box>
        </DialogContent>
        
      </Dialog>
    </div>

    );
}
}

export default withStyles(Style)(ForgotPassword);
