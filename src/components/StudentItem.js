import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const StudentItem = ({ student, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{student.name} - {student.age} years - Grade {student.grade}</Text>
      <Button title="Edit" onPress={onEdit} />
      <Button title="Delete" onPress={onDelete} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, borderBottomWidth: 1 },
  text: { fontSize: 16, marginBottom: 5 },
});

export default StudentItem;
