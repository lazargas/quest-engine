import React,{useState} from 'react';
import { Typography, styled, Button } from "@mui/material";
import { Box } from "@mui/system";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import axios from 'axios';
import ReferBox from './ReferBox/ReferBox';
import Info from './Info/Info';

const Container = styled(Box)`
  display: flex;
`;

const Wrapper = styled(Box)`
  padding-left: 10px;
`;

const StyledBtn = styled('btn')({
    padding:'10px 10px',
});

const Refer = ({data}) => {

  const [openRefer, setOpenRefer] = useState(false);

  const handleOpen = () =>{
    if(openRefer){
      setOpenRefer(false);
      console.log('akarsh');
    }
    else{
      setOpenRefer(true);
    }
  }

  return (
    <>
      <Container>
        <Wrapper>
          <PersonAddIcon fontSize="medium" />
        </Wrapper>
        <Wrapper>
          <StyledBtn onClick={()=>{handleOpen()}} >Refer a friend</StyledBtn>
          {openRefer?<ReferBox open={openRefer} setOpen={setOpenRefer} />:null}
        </Wrapper>
      </Container>
    </>
  )
}

export default Refer



