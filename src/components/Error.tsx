import React from "react";

import { Stack, Alert, AlertTitle } from "@mui/material";

const Error = ({ err }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>{err}</AlertTitle>
      </Alert>
    </Stack>
  );
};

export default Error;
