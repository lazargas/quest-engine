import React from "react";
import Style from "./TwitterBox.module.css";
import WalletIcon from "@mui/icons-material/Wallet";
import TwitterIcon from "@mui/icons-material/Twitter";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { Typography, Box, Divider, Button } from "@mui/material";
import Verify from "../Verify/Verify";

const TwitterBox = ({ verify }) => {
  console.log(verify);
  return (
    <>
      <div className={Style.Container}>
        <div className={Style.Heading}>
          Complete The following Tasks to Earn Gems
        </div>

        <div className={Style.Wrapper}>
          <div className={Style.Component}>
            <div className={Style.followLink}>
              <TwitterIcon sx={{ color: "#00FFFF" }} />
              <a
                href="https://twitter.com/akarshs97171806?ref_src=twsrc%5Etfw"
                className={Style.twitterButton}
                target="_blank"
              >
                <Typography className={Style.follow}>
                  Follow @akarsh97171806
                </Typography>
              </a>
            </div>
          </div>
        </div>
        <button className={Style.VerifyButton}>
          {verify === "Verify" ? <p>Verify</p> : <p>Verified</p>}
        </button>
        <div className={Style.Wrapper}>
          <div className={Style.Component}>
            <div className={Style.followLink}>
              <TwitterIcon sx={{ color: "#00FFFF" }} />
              <a
                href="https://twitter.com/spinbladeio/status/1618935165639876608"
                className={Style.twitterButton}
                target="_blank"
              >
                <Typography className={Style.follow}>
                  Retweet a tweet
                </Typography>
              </a>
            </div>
          </div>
        </div>
        <button className={Style.VerifyButton}>
          {verify === "Verify" ? <p>Verify</p> : <p>Verified</p>}
        </button>
      </div>
    </>
  );
};

export default TwitterBox;
