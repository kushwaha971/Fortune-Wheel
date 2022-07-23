import React, { useState } from "react";
import {
  styled,
  Box,
  Typography,
  Button,
  IconButton,
  Dialog,
} from "@mui/material";
import { Container } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import Jackpot from "./Jackpot";
import "./wheelStyle.css";

const SpineStyle = styled(Box)(({ theme }) => ({
  paddingTop: "30px",
  margin: "10px",
  ".btn": {
    justifyContent: "center",
  },
  ".flex": {
    direction: "flex",
    flexDirection: "column",
  },
  ".btn": {
    outline: "none",
  },
}));

function Wheel({ open, setOpen }) {
  const [name, setName] = useState("circle  start-rotation stop-rotate");
  const startRotation = () => {
    setName("circle start-rotation");
  };
  const stopRotation = () => {
    setTimeout(() => {
      setName("circle start-rotation stop-rotate");
    }, 1000);
  };

  return (
    <SpineStyle>
      <Container maxWidth="md">
        <div className="flex">
          <IconButton onClick={() => setOpen(!open)}>
            {<CloseIcon />}
          </IconButton>
          <Typography variant="h5" align="center">
            Spine & get booking fee discount!
          </Typography>
        </div>
        <Box
          sx={{
            height: "auto",
            width:'auto',
            backgroundColor: "#bdbdbd",
          }}
        >
          <div>
          <div className="arrow"></div>
            <ul className={name}>
            
              <button className="spin-button" onClick={startRotation}>
                Spin
              </button>
              <li>
                <div className="text" contentEditable="true" spellCheck="false">
                  10%
                </div>
              </li>

              <li>
                <div className="text" contentEditable="true" spellCheck="false">
                  20%
                </div>
              </li>

              <li>
                <div className="text" contentEditable="true" spellCheck="false">
                  30%
                </div>
              </li>

              <li>
                <div className="text" contentEditable="true" spellCheck="false">
                  50%
                </div>
              </li>

              <li>
                <div className="text" contentEditable="true" spellCheck="false">
                  90%
                </div>
              </li>
            </ul>
          </div>
        </Box>
        <Button
          variant="outlined"
          className="btn"
          color="inherit"
          align="center"
          sx={{ fontSize: 30, marginTop: "8px", marginLeft: "50px" }}
          onClick={stopRotation}
        >
          Tap to Stop
        </Button>
      </Container>
      
      {/* <Dialog fullScreen open={jackpot} onClose={Close}>
        <Jackpot jackpot={jackpot} setJackpot={setJackpot} />
      </Dialog> */}
    </SpineStyle>
  );
}

export default Wheel;
