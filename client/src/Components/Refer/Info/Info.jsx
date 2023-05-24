import React from 'react'
import Style from './Info.module.css'
import WalletIcon from '@mui/icons-material/Wallet';
import TwitterIcon from '@mui/icons-material/Twitter';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Typography, Box, Divider,Button } from '@mui/material';
import Footer from '../Footer/Footer'
import Akarsh from '../../../Data/akarsh.png'

const Info = () => {
  return (
    <>
    <div className={Style.Container}>
        <div className={Style.Heading} >
         Metaverse Universe Referral Info
        </div>
        <div className={Style.Wrapper}>
          <div className={Style.Content} >
          <WalletIcon fontSize='large' sx={{color:"#fff"}} />
          </div>
          <div className={Style.Content} >
          <TwitterIcon fontSize='large' sx={{color:"#fff"}} />
          </div>
          <div className={Style.Content} >
            <Box sx={{paddingRight:"20px"}}>
            <VerifiedUserIcon fontSize='large' sx={{color:"#fff" }} />
            </Box>
          </div>
          <div className={Style.Content} >
          <MilitaryTechIcon fontSize='large' sx={{color:"#fff"}} />
          </div>
        </div>
        <div className={Style.Wrapper} >
        <div className={Style.Content2} >
          <Typography sx={{color:"rgb(255,255,255,0.7)"}} >1. Copy your Referral Link</Typography>
          </div>
          <div className={Style.Content2} >
          <Typography sx={{color:"rgb(255,255,255,0.7)"}} >2. Share the link to on Twitter</Typography>
          </div>
          <div className={Style.Content2} >
          <Typography sx={{color:"rgb(255,255,255,0.7)"}} >3. Invitees verify their information with your link</Typography>
          </div>
          <div className={Style.Content2} >
          <Typography sx={{color:"rgb(255,255,255,0.7)"}} >4. As the referrer, Invitors obtain GEM</Typography>            
          </div>
        </div>
        <Divider sx={{padding:"25px 0"}} />
        <div className={Style.Heading2} >
         How to Earn Gems
        </div>
        <img src={Akarsh} alt="" />
        <Box>
            <Footer/>
        </Box>

        
    </div>
    
    </>
  )
}

export default Info


{/* <div class="ml-36 lg:ml-0 w-[900px] h-[620px] border border-gray-200 border-opacity-20 rounded-3xl flex items-center relative flex-col space-y-[18px] text-2xl bg-[#2b2a37] bg-opacity-70"><button class="text-white opacity-40 absolute top-6 lg:right-8 right-20">  x</button><div class="text-2xl pt-3">My Inflation Universe Airdrop Referral Link </div><div class="flex space-x-[182px] relative "><div class="w-[27px] h-[27px] border-2 border-[#29F6A9] rounded-full flex items-center justify-center text-sm ">1</div><div class="w-[27px] h-[27px] border-2 border-[#29F6A9] rounded-full flex items-center justify-center text-sm ">2</div><div class="w-[27px] h-[27px] border-2 border-[#29F6A9] rounded-full flex items-center justify-center text-sm ">3</div><div class="w-[27px] h-[27px] border-2 border-[#29F6A9] rounded-full flex items-center justify-center text-sm ">4</div><div class="w-[183px] h-[3px] bg-gradient-to-br from-[#29F6A9] to-[#19C8FF] absolute left-[-155px] top-[12px]"></div><div class="w-[183px] h-[3px] bg-gradient-to-br from-[#29F6A9] to-[#19C8FF] absolute left-[53px] top-[12px]"></div><div class="w-[183px] h-[3px] bg-gradient-to-br from-[#29F6A9] to-[#19C8FF] absolute left-[263px] top-[12px]"></div></div><div class="flex space-x-40 relative "><img class="w-[50px]" src="/images/invite-icon1.png" alt=""><img class="w-[50px]" src="/images/invite-icon2.png" alt=""><img class="w-[50px]" src="/images/invite-icon3.png" alt=""><img class="w-[50px]" src="/images/invite-icon4.png" alt=""></div><div class="text-base flex flex-row text-center space-x-3 relative pt-2 text-opacity-90 text-white"><div class="flex w-[200px] font-thin ">Connect wallet and copy your referral link below.      </div><div class="flex w-[200px] relative flex-col items-center">Send the link to your web3 family Or share on<a class="" href="https://twitter.com/intent/tweet?text=Join%20%40Infverse_io%20Inflation%20Universe%20%23Airdrop%20Campaign%20!Welcome%20to%20become%20%23Web3%20Natives%20and%20share%20your%20Web3%20Experience!%20%23Verify%20to%20%23Earn%20%23Reviews%20to%20Earn%20%23Infverse%20www.infverse.io%2Fr%3Fcode%3Dc9c8e436bd" target="_blank" rel="noopener noreferrer"><button class="flex bg-[#1D9BF0] w-[90px] h-[30px] rounded-xl relative items-center justify-center mt-2 hover:bg-black ease-in-out duration-300"><img class="object-fill h-[18px] w-[18px] " src="/images/twitter-icon.png" alt="twitter" height="80px" width="200px"><div class="text-sm ml-1">Twitter</div></button></a></div><div class="flex w-[200px]">Invitees verify their information with your link to generate Inflation ID and level up</div><div class="flex w-[200px]">As the referrer, Invitors obtain GEM in Invitation Badge as invitation rewards based on invite level</div></div><div class="w-[90%] h-[1px] border border-white border-opacity-10 "></div><div class="text-xl flex-col flex justify-center items-center"><div class="text-xl">How to Earn GEM</div><div class="text-base text-white text-opacity-60">（Based on Invitees Level&amp;Quantities）</div></div><div class="flex flex-row text-base">Invitees Level:<div class=" rounded-xl mx-3 bg-gradient-to-br from-gray-500 to-black text-white text-base px-5"> Level 1</div> &gt;<div class=" rounded-xl mx-3 bg-gradient-to-br from-[#29F6A9] to-[#19C8FF] text-black text-base px-5"> Level 2</div> &gt;<div class=" rounded-xl mx-3 bg-gradient-to-br from-[#77F629] to-[#DFFF19] text-black bg-gradient-to-brtext-black text-base px-5"> Level 3</div> &gt;<div class=" rounded-xl mx-3 bg-gradient-to-br from-[#FFD910] to-[#FF6C3E] text-black text-base px-5"> Level 4</div> &gt;<div class=" rounded-xl mx-3 bg-gradient-to-br from-[#F67F29] to-[#FF19CC] text-black text-base px-5"> Level 5</div>  · · ·<div class=" rounded-xl mx-3 bg-gradient-to-br from-purple-200 to-orange-300 text-black text-base px-5">Level N</div></div><div class="flex flex-row items-center justify-start relative text-base w-[826.3px]">GEM Acquired :<div class=" rounded-xl ml-6 mt-1 text-base px-5"> 20</div><div class=" rounded-xl ml-16 mt-1 text-base px-5"> 40</div><div class=" rounded-xl ml-16 mt-1 text-base px-5"> 60</div><div class=" rounded-xl ml-14 mt-1 text-base px-5"> 80</div><div class=" rounded-xl ml-16 mt-1 text-base px-5"> 100</div><div class=" rounded-xl ml-16 mt-1 text-base px-5"> 20xN</div></div><div class="flex w-100% justify-center text-base"><div class="flex items-center cursor-pointer bg-white w-[635px] bg-opacity-[0.05] mr-2 rounded-lg h-[40px] no-scrollbar hover:bg-opacity-10 overflow-x-scroll whitespace-nowrap"><p class=" text-white text-opacity-90 pl-3 pr-10 top-10 ">www.infverse.io/r?code=c9c8e436bd</p></div><button class=" flex justify-center items-center mt-[5px] h-[31px] text-sm text-center  text-white w-[90px]  rounded-xl transition-all duration-500 bg-gradient-to-tl from-indigo-600 via-red-500 to-pink-500  bg-size-200 bg-pos-0 hover:bg-pos-100"><div class="mb-[5px]">Copy</div></button><a class="" href="https://twitter.com/intent/tweet?text=Join%20%40Infverse_io%20Inflation%20Universe%20%23Airdrop%20Campaign%20!Welcome%20to%20become%20%23Web3%20Natives%20and%20share%20your%20Web3%20Experience!%20%23Verify%20to%20%23Earn%20%23Reviews%20to%20Earn%20%23Infverse%20www.infverse.io%2Fr%3Fcode%3Dc9c8e436bd" target="_blank" rel="noopener noreferrer"><button class="flex bg-[#1D9BF0] w-[90px] h-[30px] rounded-xl relative items-center justify-center ml-2 mt-1 hover:bg-black ease-in-out duration-300"><img class="object-fill h-[18px] w-[18px] " src="/images/twitter-icon.png" alt="twitter" height="80px" width="200px"><div class="text-sm ml-1">Twitter</div></button></a></div><button class=" bottom-3 text-[#19C8FF] border-gray-200 border-opacity-40 py-1 px-5 text-lg rounded-xl mt-4 hover:bg-white hover:text-black ease-in-out duration-300">  View My Referrals &gt; </button></div> */}