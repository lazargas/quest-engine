import Discord from "@/Components/Discord/Discord";
import Info from "@/Components/Refer/Info/Info";
import Refer from "@/Components/Refer/Refer";
import Telegram from "@/Components/Telegram/Telegram";
import Twitter from "@/Components/Twitter/Twitter";
import { Typography, Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import { QuestContext } from "@/Context/Quest";
import { useContext } from "react";

export const getStaticProps = async () => {
    const token = "AAAAAAAAAAAAAAAAAAAAAIhWlQEAAAAApyBfg3njnHpB2fKr31h%2BOOuSe9U%3DBFvNxG1lMfMdi7rRboaY0fwyqnNUQGFfKZHduKmty3WUWFKB03";

  const res1 = await axios.get('https://api.twitter.com/2/users/1504210952514043907/followers',{
    headers:{
        Authorization: `Bearer ${token}`
    }
  });
  const data1 = res1.data;
  
  return{
    props:{ ninjas: data1 }
  }

}

const Container = styled(Box)`
  display: flex-box;
`;

const Wrapper = styled(Box)`
  margin-top: 50px;
  margin-right: 300px;
  margin-left: 50px;
  padding: 30px 25px;
  background: #ee6983;
  max-width: 30%;
  border-radius: 40px;
  border: 2px solid #000;
  height: unset;
  color: rgb(0, 0, 0);
  border-width: 2px;
  border-color: rgb(0, 255,255,0.5);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  left: -4px;
  top: -4px;
  
`;

const Entries = ({ninjas}) => {

  const {setInitialFollowers} = useContext(QuestContext);

  const initialFollowers1 = ninjas.data.length;
  useEffect(()=>{
    setInitialFollowers(initialFollowers1);
  })
  
  
  return (
    <div>
      <Box>
        <Typography
          sx={{
            fontFamily:"sans-serif",
            fontSize: "40px",
            fontWeight: "600",
            marginTop: "20px",
            marginLeft: "20px",
            color:"#FFFFFF"
          }}
        >
          Choose a Template
        </Typography>
        <Container>
          <Wrapper
            sx={{
              "&:hover": { border: "4px solid #00FFFF",transition: "left .1s ease,top .1s ease"},
            }}
          >
            <Twitter/>
          </Wrapper>
          <Wrapper
            sx={{
              "&:hover": { border: "4px solid #00FFFF", transition: "left .1s ease,top .1s ease" },
            }}
          >
            <Refer/>
          </Wrapper>
          <Wrapper
            sx={{
              "&:hover": { border: "4px solid #00FFFF", transition: "left .1s ease,top .1s ease" },
            }}
          >
            <Discord/>
          </Wrapper>
          <Wrapper
            sx={{
              "&:hover": { border: "4px solid #00FFFF", transition: "left .1s ease,top .1s ease" },
            }}
          >
            <Telegram/>
          </Wrapper>
          
        </Container>
        
      </Box>
    </div>
  );
};

export default Entries;
