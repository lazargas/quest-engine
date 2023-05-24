import React, { useEffect, useState } from "react";
import Style from "./LeaderboardInfo.module.css";
import { getLeaderboard } from "@/service/api";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const LeaderboardInfo = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const getLeaderBoardData = async () => {
      let data = await getLeaderboard();
      console.log(data);
      setLeaderboard(data);
      return;
    };
    getLeaderBoardData();
  }, []);

  return (
    <>
      <div className={Style.Container}>
        <div className={Style.Heading}>Referral Leader Board</div>
        <div className={Style.Container1}>

          <List sx={{color:"rgb(255,255,255,0.8)"}} >
          <ListItem>
                  <ListItemText primary="Accounts" />
                  <ListItemText sx={{marginLeft:"400px"}}  primary="No. of Gems"/>
                </ListItem>
            {leaderboard.map((l) => {
              return (
                <ListItem>
                  <ListItemText primary={l.Account} />
                  <ListItemText sx={{marginLeft:"90px"}}  primary={l.Gems.toString()} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
    </>
  );
};

export default LeaderboardInfo;
