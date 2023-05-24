import {useState} from 'react';
import { Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import TwitterBox from './TwitterBox/TwitterBox';
import TwitterRedirect from './TwitterRedirect/TwitterRedirect';

const Container = styled(Box)`
  display: flex;
`;

const Wrapper = styled(Box)`
  padding-left: 10px;
`;

const StyledBtn = styled('btn')({
  padding:'10px 10px',
});

const Twitter = () => {

  const [openRefer, setOpenRefer] = useState(false);

  const handleOpen = () =>{
    if(openRefer){
      setOpenRefer(false);
    }
    else{
      setOpenRefer(true);
    }
  }

  return (
    <>
      <Container>
        <Wrapper>
          <TwitterIcon fontSize="medium" />
        </Wrapper>
        <Wrapper>
        <StyledBtn onClick={()=>{handleOpen()}}>Twitter</StyledBtn>
        {openRefer?<TwitterRedirect/>:null}
        </Wrapper>
      </Container>
      
    </>
  );
};

export default Twitter;
