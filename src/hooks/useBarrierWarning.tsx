"use client";
import { L } from "@/design-system";
import { Alert, Chip } from "@mui/material";
import { useState } from "react";

const useBarrierWarning = () => {
  const [open, setOpen] = useState<boolean | null>(false);

  const showComponent = open !== null;

  return {
    onWarn: (hasWarning: boolean) => setOpen(hasWarning),
    WarningSnackbar: showComponent ? (
      <L.Fixed b={40} l={0} r={0} justifyContent="center" alignItems={"center"}>
        <Chip
          color={open ? "error" : "primary"}
          label={
            open ? "감지된 장애물이 있습니다" : "장애물이 없네요 편히 걸으세요!"
          }
          size={"medium"}
        />
      </L.Fixed>
    ) : (
      <></>
    ),
  };
};

export default useBarrierWarning;
