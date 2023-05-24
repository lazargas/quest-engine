import { InputBase, Typography, styled, Button } from "@mui/material";
import Link from "next/link";
import { Box } from "@mui/system";
import React from "react";

const InputField = styled(InputBase)`
  max-width: 50%;
  padding: 20px;
  margin-left: 30px;
  font-size: 20px;
  height: 20px;
  width: 50%;
  background: #ffffff;
  border-radius: 10px;
`;

const StyledInputField = styled(InputBase)`
  max-width: 50%;
  padding: 20px;
  margin-left: 30px;
  font-size: 20px;
  height: 400px;
  width: 50%;
  background: #ffffff;
  border-radius: 10px;
`;

const StyledTypography = styled(Typography)`
  font-size: 22px;
  margin: 20px 30px;
  padding: 5px 20px;
  background: #000;
  color: #ffffff;
  width: 10%;
  border-radius: 10px;
`;

const StyledButton = styled(Button)`
  margin-left: 300px;
  background: #000;
`;

const Description = () => {
  return (
    <div>
      <Box>
        <Box>
          <StyledTypography align="center">Title</StyledTypography>
          <InputField label="Title" placeholder="Enter Title">
            Enter Title
          </InputField>
        </Box>
        <Box>
          <StyledTypography>Description</StyledTypography>
          <StyledInputField label="Title">Enter description</StyledInputField>

          <StyledButton
            variant="contained"
            sx={{ "&:hover": { backgroundColor: "#EE6983" } }}
          >
            <Link href={{ pathname: "Entries" }}>Submit And Next</Link>
          </StyledButton>
        </Box>
      </Box>
    </div>
  );
};

export default Description;
