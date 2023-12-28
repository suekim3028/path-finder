import * as React from "react";

import Chip from "@mui/material/Chip";
import WarningIcon from "@mui/icons-material/Warning";

const WarnChip = () => {
  return (
    <>
      <Chip icon={<WarningIcon />} label="장애물이 있습니다." />
    </>
  );
};

export default WarnChip;
