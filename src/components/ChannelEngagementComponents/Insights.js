import React, { useState } from "react";
import {
  Card,
  List,
  ListItem,
  Typography,
  Button,
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import styled from "styled-components";
import CustomBubbleChart from "../CustomBubbleChart";
import { chartData, chartOptions, usePlugins } from "./ChartDetails";
import CloseIcon from "@mui/icons-material/Close"; // Import the CloseIcon

const Insights = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const bulletPoints = [
    "Lörem ipsum mibel dekalig nyn, liksom nybenade. Pseudokyn reande, i stenokäl utom finansfobi. Sore autoda, eurosk autoser.",
    "Polyk hevis. Karen. Köföpreskap gogt klimatflykting mutaska. Trikemi käre. Devis traligt för att.",
    "Fal nyfaning stenock. Sungen trar i konat. Vir rer. Ber mussa. Videosamtal somyng gösam.",
    "Kroning makronade. Syncism råkäligen myra. Doling prer. Oliga hofar las, för mön.",
  ];

  return (
    <>
      <Grid2 container spacing={1} justifyContent={"center"}>
        <Grid2 item xs={12} md={7}>
          <Grid2 item md={4}>
            <CardContainer>
              <Card>
                <CustomBubbleChart
                  data={chartData}
                  options={chartOptions}
                  usePlugins={usePlugins}
                />
              </Card>
            </CardContainer>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <CardContainer>
              <Card>
                <CustomBubbleChart
                  data={chartData}
                  options={chartOptions}
                  usePlugins={usePlugins}
                />
              </Card>
            </CardContainer>
          </Grid2>
          <Grid2 item xs={12} md={5}>
            <CardContainer>
              <Card>
                <CustomBubbleChart
                  data={chartData}
                  options={chartOptions}
                  usePlugins={usePlugins}
                />
              </Card>
            </CardContainer>
          </Grid2>
        </Grid2>

        <Grid2 item xs={12} md={4} sx={{ height: " 581px" }}>
          <CardContainer
            sx={{
              fill: "var(--White, #FFF)",
              strokeWidth: "1px",
              stroke: "#EBEBEB",
              display: "flex",
              flexDirection: "column",
              alignItems: "space-between",
              alignContent: "center",
            }}
          >
            <CardData>
              <Typography variant="h5" gutterBottom>
                AGS Insights
              </Typography>
              <List>
                {bulletPoints.map((point, index) => (
                  <ListItem bulletPoints={false} key={index}>
                    {point}
                  </ListItem>
                ))}
              </List>
            </CardData>
            <Dots>...</Dots>
          </CardContainer>
          <Grid2 item xs={12} md={4}>
            <CardContainer>
              <Grid2 item flexDirection={"row"}>
                <Typography variant="h3">Engagement Metrics</Typography>
              </Grid2>
              <CardData>
                <Button onClick={handleOpenModal}>
                  <img src="word-count.png" alt="Word count" />
                </Button>
              </CardData>
            </CardContainer>
          </Grid2>
        </Grid2>
      </Grid2>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ModalContent>
          <CloseButton onClick={handleCloseModal}>
            <CloseIcon />
          </CloseButton>
          <img src="word-count.png" alt="Word count" />
        </ModalContent>
      </Modal>
    </>
  );
};

const CardContainer = styled(Card)`
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin: 16px;
`;

const CardData = styled.div`
  color: var(--Dark, #575757);
  font-family: Poppins;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: justify;
  padding: 18px 18px;
`;

const Dots = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: #d5dee3;
`;

const ModalContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-height: "100vh";
  width: "50%";

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #fff;
`;

export default Insights;
