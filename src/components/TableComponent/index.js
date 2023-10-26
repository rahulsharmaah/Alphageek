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

const TableComponent = ({ heading, data, needHeading = true }) => {
  return (
    <Container>
      <CustomTable>
        {needHeading ? (
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
                  overflowX: "hidden"
                }}
              >
                {heading}
              </TableCell>
            </TableRow>
          </TableHead>
        ) : (
          " "
        )}
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography variant={index === 1 ? "h6" : "subtitle2"}>
                  {row.label}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant={index === 1 ? "h6" : "subtitle2"}>
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
