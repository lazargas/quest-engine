import Info from "@/Components/Refer/Info/Info";
import { Box } from "@mui/material";
import React from "react";
import Wallet from "../Data/wallet.png";
import { QuestContext } from "@/Context/Quest";
import axios from "axios"

// export const getStaticProps = async () => {
//   const token =
//     "AAAAAAAAAAAAAAAAAAAAAIhWlQEAAAAApyBfg3njnHpB2fKr31h%2BOOuSe9U%3DBFvNxG1lMfMdi7rRboaY0fwyqnNUQGFfKZHduKmty3WUWFKB03";
//   const data = {
//     text:"this is akarsh"
//   };
//    const res1 = await axios.post("https://api.twitter.com/2/tweets", data,{
//     headers: {
//       Authorization: {
//         "Signature Method": "HMAC-SHA1",
//         "Consumer Key": "al2kXCyYEqlWiz89ySnwvEecb",
//         "Consumer Secret": "NwBoEpGkvFkmQA0rvotSMenwRZKtbGO0qXkiiXcYstxs5S2VEf",
//         "Access Token": "1504210952514043907-WtLrPI1K1WoKsAEoAs6pDmzJS0OLfY",
//         "Token Secret": "q6BeQweFWPVdKscRSz2oG0yYkY5r21WykFRO1MawRl6B7",
//       },
//     },
//   });
  
//   const data1 = res1.data;

//   return {
//     props: { ninjas: data1 },
//   };
// };

const Refers = ({ninjas}) => {
  console.log(ninjas);
  return (
    <>
      <Box>
        <Info />
      </Box>
    </>
  );
};

export default Refers;
