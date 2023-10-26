import React from "react";
import { Grid, Typography } from "@mui/material";
import CardHeading from "./CardHeading";
import styled from "styled-components";
import DoughnoutChart from "../DoughnoutChart";
import { chartData, chartData1, chartData2, chartData3, options } from "./chartData";

const PerformanceCards = ({ title, image }) => {
  return (
    <>
      <CardHeading title={title} width={100} />
      <Grid container>
        <Grid item md={5}>
          <CardWrapper>
            <Wrapper container py={3}>
              {image &&
                image.map((image, index) => (
                  <ItemsData item md={6} xs={12} key={index}>
                    <ImageWrapper>
                      <img
                        src={image.image}
                        alt={image.label}
                        height={"50px"}
                      />
                    </ImageWrapper>
                  </ItemsData>
                ))}
              <ItemsData
                item
                md={12}
                py={2}
                sx={{
                  border: "1px solid var(--Light-gray, #f8fafb)",
                  background: "var(--Light-gray, #f8fafb)",
                  padding: "20px",
                }}
              >
                <Typography variant="subtitle2" textAlign={"center"}>
                  *Custom Analysis, Highlights & Reviews
                </Typography>
              </ItemsData>
            </Wrapper>
          </CardWrapper>
        </Grid>
        <Grid item md={1}>
          <Separator />
        </Grid>
        <Grid item md={6} xs={12} px={4} py={4}>
          <Grid
            container
            spacing={1}
            sx={{ canvas: { height: "200px !important" } }}
            justifyContent={"center"}
          >
            <Grid item md={6} xs={12}>
              <DoughnoutChart data={chartData}  options={options}/>
            </Grid>
            <Grid item md={6} xs={12}>
              <DoughnoutChart data={chartData1} options={options}/>
            </Grid>
            <Grid item md={6} xs={12}>
              <DoughnoutChart data={chartData2} options={options}/>
            </Grid>
            <Grid item md={6} xs={12}>
              <DoughnoutChart data={chartData3} options={options} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const CardWrapper = styled.div``;

const Wrapper = styled(Grid)`
  border-radius: 10px 10px 0px 0px;
  border: 1px solid var(--Light-gray, #f8fafb);
  background: var(--White, #fff);
`;

const ItemsData = styled(Grid)`
  border-radius: 5px;
  border: 1px solid var(--Light-gray, #f8fafb);
  background: #fff;
  padding: 10px;
`;

const ImageWrapper = styled.div`
  height: 146.172px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid var(--Light-gray, #f8fafb);
  background: var(--Light-gray, #f8fafb);
`;

const Separator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  margin-left: 3px;
  vertical-align: middle !important;
  width: 1px;
  height: 184px;
  opacity: 0.3;
  background: #7d909b;
`;

export default PerformanceCards;
