import React, { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { TeachersContext } from "../../../services/teachers/teachers.context";

import { Search } from "../components/search.component";
import { TeacherInfoCard } from "../components/teacher-info-card.component";

const TeacherList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const TeachersScreen = () => {
  const { isLoading, teachers } = useContext(TeachersContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
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