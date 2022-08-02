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
  padding: ${(props) => props.theme.space[3]};
`;

const TeacherListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
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