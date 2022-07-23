import { Button, IconButton, Typography,styled } from '@mui/material'
import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import { Box, Container } from '@mui/system';
function Jackpot({jackpot,setJackpot}) {

    const JackpotStyle = styled(Box)(({ theme }) => ({
        paddingTop: "40px",
        margin: "10px",
        ".btn": {
          justifyContent: "center",
        },
        ".flex": {
          direction: "flex",
          flexDirection: "column",
        },
      }));

  return (
    <JackpotStyle>
          <Container maxWidth="md">
        <div className="flex">
          <IconButton onClick={() => {setJackpot(!jackpot)}}>
            {<CloseIcon />}
          </IconButton>
          <Typography variant="h5" align="center">
            Booking free Discount
          </Typography>
        </div>
        <Box
          sx={{
            height: "50vh",
            backgroundColor: "#bdbdbd",
          }}
        ></Box>
        <Button variant='outlined' 
          className="btn"
          color="inherit"
          align="center"
          sx={{ fontSize: 30, marginTop: "5px" }} >Claim</Button>
        </Container>
      
    </JackpotStyle>
   
  )
}

export default Jackpot