import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import styled from "styled-components";

const StyledTable = styled(Table)`
  width: 100%;
  border: 1px solid #ccc; /* Add a border to the table */
`;

const StyledTableCell = styled(TableCell)`
  border: 1px solid #ccc; /* Add a border to the cells */
`;

const EcosystemTables = ({ tableData }) => {
  return (
    <TableContainer component={Paper}>
      <StyledTable>
        <TableBody>
          {[0, 1].map((rowIndex) => (
            <TableRow key={rowIndex}>
              {[0, 1].map((colIndex) => {
                const data = tableData[rowIndex * 2 + colIndex];
                return (
                  <StyledTableCell key={colIndex}>
                    <Typography variant="h4" fontWeight={700} color={"#575757"} textAlign={"center"}>
                      {data.title}
                    </Typography>
                    <Typography variant="h2" fontWeight={700} color={"#575757"} textAlign={"center"}>
                      {data.subtitle}
                    </Typography>
                  </StyledTableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

// const StyledTypography = styled(Typography)`
//   color: var(--Dark, #575757);
//   text-align: center;
//   font-family: Poppins;
//   font-size: ${(props) => (props.variant === "subtitle1" ? "16px" : "24px")};
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
//   letter-spacing: 0.44px;
// `;

export default EcosystemTables;
