import React from 'react'
import { Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import DiscordIcon from '../../Data/discord.ico';

const Container = styled(Box)`
  display: flex;
`;

const Wrapper = styled(Box)`
  padding-left: 10px;
`;

const Discord = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <img src={DiscordIcon} alt="" />
        </Wrapper>
        <Wrapper>
          <Typography>Discord</Typography>
        </Wrapper>
      </Container>
    </>
  )
}

export default Discord