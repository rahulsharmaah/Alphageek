import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import React from "react";

const GridRoot = styled(Grid)`
  margin: 0 auto;
`;
const pageGutterSize = {
  xs: 11,
  sm: 11,
  md: 11,
  lg: 11,
  xl: 10,
  spacing: 0,
};
function Gutter({ children, justify, xs, sm, md, lg, xl, spacing }) {
  return (
    <GridRoot
      item
      container
      xs={xs || pageGutterSize.xs}
      sm={sm || pageGutterSize.sm}
      md={md || pageGutterSize.md}
      lg={lg || pageGutterSize.lg}
      xl={xl || pageGutterSize.xl}
      spacing={spacing || pageGutterSize.spacing}
      justify={justify}
    >
      {children}
    </GridRoot>
  );
}

export default Gutter;
