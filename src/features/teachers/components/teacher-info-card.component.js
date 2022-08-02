import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const TeacherCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const TeacherCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body}
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const TeacherInfoCard = ({ teacher = {} }) => {
  const {
    name = "Some Teacher",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = teacher;

  return (
    <TeacherCard elevation={5}>
      <TeacherCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </TeacherCard>
  );
};
