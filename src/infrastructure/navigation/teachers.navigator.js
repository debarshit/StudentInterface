import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { TeachersScreen } from "../../features/teachers/screens/teachers.screen";
import { TeacherDetailScreen } from "../../features/teachers/screens/teacher-detail.screen";

const TeacherStack = createStackNavigator();

export const TeachersNavigator = () => {
  return (
    <TeacherStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <TeacherStack.Screen name="Teachers" component={TeachersScreen} />
      <TeacherStack.Screen
        name="TeacherDetail"
        component={TeacherDetailScreen}
      />
    </TeacherStack.Navigator>
  );
};
