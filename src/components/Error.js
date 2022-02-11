import React from "react";

import { Stack, Alert, AlertTitle } from "@mui/material";

const Error = ({ error }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>{error}</AlertTitle>
      </Alert>
    </Stack>
  );
};

export default Error;
