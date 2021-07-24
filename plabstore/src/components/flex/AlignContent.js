import React from "react";
import Box from "@material-ui/core/Box";

export function AlignBetween(props) {
  const { children, ...rest } = props;
  return (
    <div style={{ width: "100%" }}>
      <Box {...rest} display="flex" alignContent="space-between" m={1} p={1}>
        {children}
      </Box>
    </div>
  );
}
export function AlignAround(props) {
  const { children, ...rest } = props;
  return (
    <div style={{ width: "100%" }}>
      <Box {...rest} display="flex" alignContent="space-around" m={1} p={1}>
        {children}
      </Box>
    </div>
  );
}
