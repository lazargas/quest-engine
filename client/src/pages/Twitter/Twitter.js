import React, { useContext, useEffect, useState } from 'react'
import TwitterBox from '@/Components/Twitter/TwitterBox/TwitterBox'
import { Box } from '@mui/material'
import axios from "axios";
import { QuestContext } from '@/Context/Quest';

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



const Twitter = ({ninjas}) => {
  const {initialFollowers} = useContext(QuestContext);
  const [verify, setVerify] = useState("");
  
  const finalFollowers = ninjas.data.length;
  console.log("initial followers", initialFollowers);
  console.log("final Followers", finalFollowers);

  const Verified = async () => {
    if((initialFollowers+1)===finalFollowers)
    setVerify("Verified");
    else{
      setVerify("Verify");
    }
  }

    useEffect(()=>{
      Verified();
    })
    
   
  console.log(verify);

  return (
    <div>
        <Box>
            <TwitterBox verify={verify} />
        </Box>
    </div>
  )
}

export default Twitter