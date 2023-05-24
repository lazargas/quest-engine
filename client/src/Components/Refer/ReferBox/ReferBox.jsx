import { getLink } from "@/service/api";
import { Box, styled } from "@mui/material";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { QuestContext } from "@/Context/Quest";
import Style from "./ReferBox.module.css";
import Link from "next/link";

const ReferBox = () => {
  const { code } = useContext(QuestContext);
  const url = `http://localhost:3000`;

  return (
    <div>
      <Box>
        <Box>
          <h3>For referral Link: </h3>
        </Box>

        <Box>
          <nav className={Style.links}>
            <Link className={Style.linkEffect} href={{ pathname: "Refers" }}>
              Click Me
            </Link>
          </nav>
        </Box>
      </Box>
    </div>
  );
};

export default ReferBox;

