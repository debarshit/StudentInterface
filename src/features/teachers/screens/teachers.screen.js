import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { TeacherInfoCard } from "../components/teacher-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { TeachersContext } from "../../../services/teachers/teachers.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const TeacherList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const TeachersScreen = () => {
  const { isLoading, error, teachers } = useContext(TeachersContext);
  console.log(error);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <TeacherList
        data={teachers}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <TeacherInfoCard teacher={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.TeacherId}
      />
    </SafeArea>
  );
};