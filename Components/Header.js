import React from "react";
import styled from "styled-components";

let today = new Date().toISOString().slice(0, 10);

export default function Header() {
  return (
    <ComponentContainer>
      <HeaderText>To-Do.</HeaderText>
      <HeaderList>{today}</HeaderList>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: white;
  font-family: poppins-bold;
  font-size: 30px;
`;

const HeaderList = styled.Text`
  color: white;
  font-family: poppins-bold;
  font-size: 20px;
  margin-right: 20px;
`;
