import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import "./drop-file-input.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import file from "../../assets/images/uploadF.png";
import fileType from "../../assets/images/imgType.png";

const DropFileInput = (props: any) => {
  const wrapperRef: any = useRef(null);
  const [progress, setProgress] = useState<any>(100);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e: any) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList: any = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  return (
    <>
      <Grid ref={wrapperRef} className="drop-file-input">
        <Grid className="drop-file-input__label">
          <img src={file} alt="" style={{ width: "60px" }} />
          <Typography>Drag & Drop your file here</Typography>
          <Typography>OR</Typography>
        </Grid>
        <input type="file" value="" onChange={onFileDrop} />
        <Box sx={{ textAlign: "center" }}>
          <Button
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            sx={{
              background: "#1C97FD",
              color: "#ffff",
              width: "150px",
              borderRadius: "10px",
            }}
          >
            Browse File
          </Button>
        </Box>
      </Grid>
      {fileList.length > 0 ? (
        <Grid className="drop-file-preview">
          <Typography sx={{ fontWeight: "600 !important" }}>
            Uploaded file
          </Typography>
          {fileList.map((item: any, index: any) => (
            <Grid key={index}>
              <img src="" alt="" />
              <Grid display="flex">
                <Box>
                  <img src={fileType} alt="" />
                </Box>
                <Box width="100%" ml={1}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      sx={{ fontWeight: "600 !important", marginBottom: "5px" }}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontWeight: "600 !important" }}>
                      X
                    </Typography>
                  </Box>
                  <LinearProgress
                    value={progress}
                    color="primary"
                    variant="buffer"
                    sx={{
                      marginBottom: "20px",
                      width: "100%",
                      textAlign: "center",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      ) : null}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
