import React from "react";
import Box from "@material-ui/core/Box";

export function JustifyStart(props) {
  const { children, ...rest } = props;
  return (
    <div style={{ width: "100%" }}>
      <Box {...rest} display="flex" justifyContent="flex-start" m={1} p={1}>
        {children}
      </Box>
    </div>
  );
}
export function JustifyCenter(props) {
  const { children, ...rest } = props;
  return (
    <div style={{ width: "100%" }}>
      <Box {...rest} display="flex" justifyContent="center" m={1} p={1}>
        {children}
      </Box>
    </div>
  );
}
export function JustifyEnd(props) {
  const { children, ...rest } = props;
  return (
    <div style={{ width: "100%" }}>
      <Box {...rest} display="flex" justifyContent="flex-end" m={1} p={1}>
        {children}
      </Box>
    </div>
  );
}
export function JustifyBetween(props) {
  const { children, ...rest } = props;
  return (
    <div style={{ width: "100%" }}>
      <Box {...rest} display="flex" justifyContent="space-between" m={1} p={1}>
        {children}
      </Box>
    </div>
  );
}
export function JustifyAround(props) {
  const { children, ...rest } = props;
  return (
    <div style={{ width: "100%" }}>
      <Box {...rest} display="flex" justifyContent="space-around" m={1} p={1}>
        {children}
      </Box>
    </div>
  );
}
