/** @format */

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AppleIcon from "../../assets/images/AppleIcon.png";
import GooglePlay from "../../assets/images/google-play.png";
import { useStyles } from "./Sidebar.style";
import CommonDialogBox from "../shared/CommonDialogBox";

const IconsComponent = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{ cursor: "pointer" }}
        className={classes.appBox}
        onClick={() => setOpen(true)}
      >
        <Box sx={{ mr: 2 }}>
          <img alt="AppleIcon" src={AppleIcon} width={40} />
        </Box>
        <Box>
          <Typography className={classes.downloadTypo}>
            Download on The
          </Typography>
          <Typography
            style={{
              fontSize: "20px",
              color: "#161A1D",
              fontWeight: 600,
              fontFamily: "Inter !important",
            }}
          >
            App Store
          </Typography>
        </Box>
      </Box>
      <CommonDialogBox
        open={open}
        // setOpen={setOpen}
        onClose={handleClose}
        heading="Download Water Can APK File"
        button1="cancel"
        button2="Download"
      />
      <Box
        sx={{ cursor: "pointer" }}
        className={classes.appBox}
        onClick={() => setOpen(true)}
      >
        <Box sx={{ mr: 2 }}>
          <img alt="GooglePlay" src={GooglePlay} width={40} />
        </Box>
        <Box>
          <Typography className={classes.downloadTypo}>
            Download on The
          </Typography>
          <Typography
            style={{
              fontSize: "20px",
              color: "#161A1D",
              fontWeight: 600,
              fontFamily: "Inter !important",
            }}
          >
            App Store
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default IconsComponent;
