"use client";
import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";

const useClientErrorSnackbar = () => {
  const [open, setOpen] = useState(false);

  return {
    onError: () => setOpen(true),
    ErrorSnackbar: (
      <Snackbar
        open={!!open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    ),
  };
};

export default useClientErrorSnackbar;
