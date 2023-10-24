import React from "react";
import styled from "styled-components";

const Separator = () => {
  return <SeparatorComponent />;
};

export default Separator;

const SeparatorComponent = styled.div`
  flex: 1;
  height: 2px;
  background: #ccc;
  margin: 0 10px;
`;
