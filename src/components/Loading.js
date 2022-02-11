import React from "react";
import { Box, CircularProgress, Alert, AlertTitle } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Alert severity="info">
        <AlertTitle>Loading...</AlertTitle>
        <CircularProgress />
      </Alert>
    </Box>
  );
};

export default Loading;
