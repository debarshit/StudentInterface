import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { TeachersScreen } from "../../features/teachers/screens/teachers.screen";

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
        component={() => <Text>Teacher Detail</Text>}
      />
    </TeacherStack.Navigator>
  );
};
