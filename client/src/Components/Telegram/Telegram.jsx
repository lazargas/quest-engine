import React from 'react'
import { Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import TelegramIcon from '@mui/icons-material/Telegram';

const Container = styled(Box)`
  display: flex;
`;

const Wrapper = styled(Box)`
  padding-left: 10px;
`;

const Telegram = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <TelegramIcon fontSize="medium" />
        </Wrapper>
        <Wrapper>
          <Typography>Telegram</Typography>
        </Wrapper>
      </Container>
    </>
  )
}

export default Telegram