import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { TeacherInfoCard } from "../components/teacher-info-card.component";
import { TeacherCoursesList } from "../components/teacher-courses-list.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const TeacherDetailScreen = ({ route }) => {

  const { teacher } = route.params;
  return (
    <SafeArea>
      <TeacherInfoCard teacher={teacher} />
      <TeacherCoursesList />
    </SafeArea>
  );
};