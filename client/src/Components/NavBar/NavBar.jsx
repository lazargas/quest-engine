import * as React from 'react';
import { useContext, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { QuestContext } from '@/Context/Quest';
import { addUser } from '@/service/api';

export default function ButtonAppBar() {

  const { connectWallet, currentAccount,setCode,code} = useContext(QuestContext);
  
  
  useEffect(()=>{
    const addUserAccount = async () => {
      let data = await addUser({Account:currentAccount,ReferralCode:"",Refers:0,Gems:0});
      setCode(data.id);
      console.log(code);
    }
      addUserAccount();
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:'#000', boxShadow:'none'}} >
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:'600' }}>
            Quest Templating
          </Typography>
          <Button color="inherit" variant='contained' sx={{color:'#000', height:'30px'}} onClick={()=>{connectWallet()}} >{
            currentAccount?currentAccount:<h4>Connect Wallet</h4>
          }</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}