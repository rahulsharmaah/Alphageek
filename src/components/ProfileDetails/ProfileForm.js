import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ProfileForm = () => {
  return (
    <Grid item xs={12}>
      <Form>
        <FormGroup>
          <Grid container spacing={3} px={2}>
            {/* <Grid item xs={12} md={6}> */}
            <Grid item xs={12} md={6}>
              <Label htmlFor="org">Name</Label>
              <StyledTextField
                id="name"
                variant="outlined"
                placeholder="Insaan"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Label htmlFor="org">Organisation</Label>
              <StyledTextField
                id="org"
                variant="outlined"
                placeholder="Microsoft"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Label htmlFor="state">State</Label>
              <StyledTextField
                id="state"
                variant="outlined"
                placeholder="LA"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Label htmlFor="country">Country</Label>
              <StyledTextField
                id="country"
                variant="outlined"
                placeholder="USA"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Label htmlFor="mobile">Mobile</Label>
              <StyledTextField
                id="mobile"
                variant="outlined"
                placeholder="+12345678"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Label htmlFor="email">Email</Label>
              <StyledTextField
                id="email"
                variant="outlined"
                placeholder="abc@mail.com"
                fullWidth
              />
            </Grid>
          </Grid>
        </FormGroup>
        <SaveButtonContainer>
          <SaveButton>Save</SaveButton>
        </SaveButtonContainer>
      </Form>
    </Grid>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

const Label = styled.label`
  color: #1c2753;
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins";
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-top: 5px !important;
`;

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const SaveButton = styled(Button)`
  width: 209px;
  height: 51px;
  color: #fff !important;
  font-size: 24px;
  background-color: #1c2753 !important;
`;
export default ProfileForm;
