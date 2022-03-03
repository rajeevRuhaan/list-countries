import React from "react";
import { Box, CircularProgress, Alert, AlertTitle } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{ width: "100%" }} >
      <Alert severity="info">
        <AlertTitle>Loading...</AlertTitle>
        <CircularProgress />
      </Alert>
    </Box>
  );
};

export default Loading;
