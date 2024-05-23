import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dashboard = ({ route }) => {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username}!</Text>
      <Text style={styles.text}>This is your dashboard.</Text>
      {/* Add more components and functionality here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
  },
});

export default Dashboard;
