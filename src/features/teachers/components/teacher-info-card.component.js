import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import { Text } from "../../../components/typography/text.component";

import {
  TeacherCard,
  TeacherCardCover,
  Info,
  Section,
  Rating,
  Address,
} from "./teacher-info-card.styles";

export const TeacherInfoCard = ({ teacher = {} }) => {
  const {
    TeacherName = "Some Teacher",
    TeacherPhoto = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    TeacherAddress = "100 some random street",
    TeacherRating = 4,
  } = teacher;

  const ratingArray = Array.from(new Array(Math.floor(TeacherRating)));

  return (
    <TeacherCard elevation={5}>
      <TeacherCardCover key={TeacherName} source={{ uri: TeacherPhoto }} />
      <Info>
        <Text variant="label">{TeacherName}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
        </Section>
        <Address>{TeacherAddress}</Address>
      </Info>
    </TeacherCard>
  );
};
