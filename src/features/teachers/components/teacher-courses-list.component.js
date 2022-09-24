import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

export const TeacherCoursesList = ({ courses = {} }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);

  const { heading = "School", subjects = ["Physics", "Chemistry"] } = courses;

  return (
    <ScrollView>
      <List.Accordion
        title={heading}
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
      >
        <List.Item title={subjects[0]} />
      </List.Accordion>
    </ScrollView>
  );
};
