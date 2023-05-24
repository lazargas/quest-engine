import React from "react";
import { useState, useContext } from "react";
import { EmojiEmotions, AttachFile, Mic } from "@mui/icons-material";
import { Box, styled, InputBase, Button } from "@mui/material";
import { QuestContext } from "@/Context/Quest";
import Link from 'next/link'

const Container = styled(Box)`
  margin-top: 150px;
  height: 55px;
  width: 650px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: auto;
    color: #919191;
  }
`;

const Search = styled(Box)`
  border-radius: 18px;
  background-color: #ffffff;
  width: calc(94% - 120px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  font-size: 14px;
  height: 20px;
  width: 100%;
`;

const Footer = ({ sendText, setValue, value }) => {
  const { code } = useContext(QuestContext);
  const url = `http://localhost:3000/Entries/${code}`;
  const [press, setPress] = useState(false);

  return (
    
    <>
      <Box sx={{ display: "flex-box" }}>
        <Box sx={{display: "flex"}}>
          <Container>
            <Search>
              <InputField
                
                value={url}
              />
            </Search>
          </Container>
          <Box sx={{marginTop:"160px"}}  >
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="Share your experiences and earn rewards by verifying your identity and writing reviews. Connect wallet to Earn 50-100GEM. Enter Your Code Here:" data-hashtags="Metaverse" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </Box>
        </Box>
        
        <Box>
          <Button
            variant="contained"
            onClick={() => {
                navigator.clipboard.writeText(code);
                setPress(true);
              }}
            sx={{ margin: "25px 100px",padding:"0 15px" , background: "#660000","&:hover": {backgroundColor: "rgb(0,0,0,0.3)" }}}
            
          >
            {press?<p>Copied</p>:<p>Copy</p>}
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "25px 100px",marginLeft:"360px" ,padding:"0 15px" , background: "#660000","&:hover": {backgroundColor: "rgb(0,0,0,0.3)" }, height:"50px"}}  
          >
            <Link href={{pathname: "Leaderboard"}} >
            Leaderboard
            </Link>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
