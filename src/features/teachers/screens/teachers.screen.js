import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";

import { TeacherInfoCard } from "../components/teacher-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const TeacherListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const TeachersScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <TeacherListContainer>
      <TeacherInfoCard />
    </TeacherListContainer>
  </SafeArea>
);