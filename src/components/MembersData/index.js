import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import dummyData from "./dummyData";
import styled from "styled-components";

const StyledTableRow = styled(TableRow)`
  border-radius: 10px;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
    background-color: #fff;
  }
`;

const StyledTableBody = styled(TableBody)`
  margin-top: 10px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DotsButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const MemberTable = () => {
  const [members] = useState(dummyData);

  return (
    <>
      <Grid
        container
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        mb={4}
        mt={4}
      >
        <Grid item md={10} xs={12}>
          <TableContainer component={Paper} sx={{ backgroundColor: "#FAFAFA" }}>
            <Table>
              <TableHead sx={{ textAlign: "center" }}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                </TableRow>
              </TableHead>
              <StyledTableBody>
                {members.map((member) => (
                  <StyledTableRow key={member.id}>
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar alt={member.name} src={member.profileImage} />
                        <span style={{ marginLeft: "8px" }}>{member.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>
                      <Container>
                        {member.phone}
                        <DotsButton>...</DotsButton>
                      </Container>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </StyledTableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default MemberTable;
