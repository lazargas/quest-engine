import { getLink } from '@/service/api'
import { Box, styled } from '@mui/material'
import React, { useContext } from 'react'
import { useEffect,useState } from 'react'
import { QuestContext } from '@/Context/Quest'
import Style from './TwitterRedirect.module.css'
import Link from 'next/link'








const TwitterRedirect = () => {

  const {code} = useContext(QuestContext);
  const url = `http://localhost:3000`;
 
 

  return (
    <div>
         <Box>
          <Box>
             <h3>To Complete Tasks</h3>
          </Box>
        
          <Box>
          <nav className={Style.links}>
            
            <Link className={Style.linkEffect} href={{ pathname: "Twitter/Twitter" }}>
            Click Me
                    </Link>
            
          </nav>
            
          </Box>
            
         </Box>
    </div>
  )
}

export default TwitterRedirect