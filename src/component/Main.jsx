import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";
import React from "react";
import RepositoryList from "../RepositoryList"; // Update the import path as per your file structure

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Rate Repository Application</Text>
      <View>
        <RepositoryList />
      </View>
    </View>
  );
};

export default Main;
