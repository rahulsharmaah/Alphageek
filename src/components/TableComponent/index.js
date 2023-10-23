import React from "react";
import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Container = styled(TableContainer)`
  background: white;
  border: 1px solid #ccc;
  margin-bottom: 16px;
`;

const CustomTable = styled(Table)`
  min-width: 650;
  border-radius: 5px 5px 0px 0px !important;
`;

const TableComponent = ({ heading, data }) => {
  return (
    <Container>
      <CustomTable>
        <TableHead
          sx={{
            bgcolor: "var(--Darkest, #1C2753)",
            borderRadius: "5px 5px 0px 0px !Important",
          }}
        >
          <TableRow>
            <TableCell
              colSpan={2}
              sx={{
                color: "#fff",
                textAlign: "center",
                borderRadius: "5px 5px 0px 0px",
              }}
            >
              {heading}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography
                  variant={index === 1 ? "h5" : "h6"} 
                >
                  {row.label}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={index === 1 ? "h5" : "h6"}
                >
                  {row.value}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
    </Container>
  );
};

export default TableComponent;
