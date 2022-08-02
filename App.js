import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { TeachersScreen } from "./src/features/teachers/screens/teachers.screen";

export default function App() {
  return (
    <>
      <TeachersScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
